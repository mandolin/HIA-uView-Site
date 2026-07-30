import { readdir, readFile } from 'node:fs/promises';
import { join, relative, resolve, sep } from 'node:path';

/**
 * @module check-site-content
 * @lang zh-CN 校验首发公开页面的 zh-Hans/en 对等性、来源、链接和隐私边界；只读取固定 Site 内容树，不处理用户输入或网络。
 * @lang en Validates zh-Hans/en parity, provenance, links, and privacy boundaries for launch public pages; it reads only the fixed Site content tree and processes neither user input nor network state.
 */

/**
 * @typedef {object} PagePair
 * @property {string} id <lang><zh-CN>稳定的页面身份。</zh-CN><en>Stable page identity.</en></lang>
 * @property {string} zhPath <lang><zh-CN>中文页面的 Site 相对路径。</zh-CN><en>Site-relative path of the Chinese page.</en></lang>
 * @property {string} enPath <lang><zh-CN>英文页面的 Site 相对路径。</zh-CN><en>Site-relative path of the English page.</en></lang>
 * @lang zh-CN 表示必须成对维护的一个公开页面身份。
 * @lang en Represents one public page identity that must be maintained as a pair.
 */

/**
 * @lang zh-CN 首发页面的冻结对等清单；增删页面必须连同公开 ADR、导航和此清单一并审阅。
 * @lang en Frozen parity list for launch pages; adding or removing a page must review this list together with the public ADR and navigation.
 * @type {PagePair[]}
 */
const PAGE_PAIRS = [
  { id: 'home', zhPath: 'index.md', enPath: 'en/index.md' },
  { id: 'getting-started/introduction', zhPath: 'getting-started/introduction.md', enPath: 'en/getting-started/introduction.md' },
  { id: 'components/overview', zhPath: 'components/overview.md', enPath: 'en/components/overview.md' },
  { id: 'components/u-button', zhPath: 'components/u-button.md', enPath: 'en/components/u-button.md' },
  { id: 'design-system/tokens-and-theme', zhPath: 'design-system/tokens-and-theme.md', enPath: 'en/design-system/tokens-and-theme.md' },
  { id: 'tool/overview', zhPath: 'tool/overview.md', enPath: 'en/tool/overview.md' },
  { id: 'migration-and-source/migration-from-uview', zhPath: 'migration-and-source/migration-from-uview.md', enPath: 'en/migration-and-source/migration-from-uview.md' },
  { id: 'compatibility-and-releases/compatibility-evidence', zhPath: 'compatibility-and-releases/compatibility-evidence.md', enPath: 'en/compatibility-and-releases/compatibility-evidence.md' }
];

/**
 * @lang zh-CN 允许页面声明的公开 HIA-uView 事实来源前缀；内容不可改指向私有仓、上游站点或本机路径。
 * @lang en Allowed public HIA-uView fact-source prefix for page declarations; content cannot point to private repositories, upstream sites, or workstation paths.
 */
const PUBLIC_SOURCE_PREFIX = 'https://github.com/mandolin/HIA-uView/';

/**
 * @lang zh-CN 绝不应进入公开页面或静态输出的标记；匹配即阻断构建交接。
 * @lang en Markers that must never enter public pages or static output; a match blocks build handoff.
 */
const FORBIDDEN_PUBLIC_MARKERS = ['file://', 'work-zone', 'touristappid', 'appid:', 'k:\\', 'i:\\', 'private artifact'];

/**
 * @lang zh-CN 递归列出 Site 内容树内的 Markdown 文件，忽略 VitePress 配置目录和生成目录。
 * @lang en Recursively lists Markdown files inside the Site content tree, ignoring VitePress configuration and generated directories.
 * @param {string} directory <lang><zh-CN>当前绝对扫描目录。</zh-CN><en>Current absolute scan directory.</en></lang>
 * @returns {Promise<string[]>} <lang><zh-CN>Markdown 绝对路径列表。</zh-CN><en>Markdown absolute-path list.</en></lang>
 */
async function listMarkdownFiles(directory) {
  /** @lang zh-CN 读取当前目录的受信任 entry 元数据，不根据 Markdown 内容决定扫描路径。 @lang en Reads trusted entry metadata from the current directory and never chooses scan paths from Markdown content. */
  const entries = await readdir(directory, { withFileTypes: true });

  /** @lang zh-CN 收集当前目录分支中的 Markdown 文件。 @lang en Collects Markdown files in the current directory branch. */
  const files = [];

  for (const entry of entries) {
    /** @lang zh-CN 由当前目录与 entry 名称拼接固定候选路径。 @lang en Joins the current directory and entry name into a fixed candidate path. */
    const absolutePath = join(directory, entry.name);

    if (entry.isDirectory()) {
      if (entry.name !== '.vitepress') {
        files.push(...await listMarkdownFiles(absolutePath));
      }
      continue;
    }

    if (entry.isFile() && entry.name.endsWith('.md')) {
      files.push(absolutePath);
    }
  }

  return files.sort();
}

/**
 * @lang zh-CN 解析受限 YAML frontmatter 的顶层标量键，足以验证页面身份与公开来源，不把 Markdown 当作可执行配置。
 * @lang en Parses top-level scalar keys from restricted YAML frontmatter, sufficient to validate page identity and public provenance without treating Markdown as executable configuration.
 * @param {string} content <lang><zh-CN>完整 Markdown 文本。</zh-CN><en>Complete Markdown text.</en></lang>
 * @returns {Record<string, string>} <lang><zh-CN>顶层标量键值映射。</zh-CN><en>Top-level scalar key-value map.</en></lang>
 */
function parseFrontmatter(content) {
  if (!content.startsWith('---\n')) {
    return {};
  }

  /** @lang zh-CN 查找首个 frontmatter 关闭标记；缺失时返回空映射并由调用方报告。 @lang en Finds the first frontmatter closing marker; returns an empty map when absent so the caller can report it. */
  const closingOffset = content.indexOf('\n---', 4);

  if (closingOffset < 0) {
    return {};
  }

  /** @lang zh-CN 切出仅用于元数据检查的 frontmatter 文本。 @lang en Slices frontmatter text used only for metadata checking. */
  const frontmatter = content.slice(4, closingOffset);

  /** @lang zh-CN 收集未缩进的简单键值行，嵌套 VitePress 展示字段不影响本门禁。 @lang en Collects unindented simple key-value lines; nested VitePress display fields do not affect this gate. */
  const values = {};

  for (const line of frontmatter.split(/\r?\n/)) {
    /** @lang zh-CN 仅接受安全的顶层标量键语法，避免解释 YAML 特性。 @lang en Accepts only safe top-level scalar-key syntax and does not interpret YAML features. */
    const match = /^([A-Za-z][A-Za-z0-9_-]*):\s*(.+)$/.exec(line);

    if (match) {
      values[match[1]] = match[2].replace(/^['"]|['"]$/g, '');
    }
  }

  return values;
}

/**
 * @lang zh-CN 将 Site 相对 Markdown 路径映射为 VitePress 路由，以验证绝对站内链接。
 * @lang en Maps a Site-relative Markdown path to a VitePress route to validate absolute site-internal links.
 * @param {string} relativePath <lang><zh-CN>使用正斜杠的 Site 相对 Markdown 路径。</zh-CN><en>Site-relative Markdown path using forward slashes.</en></lang>
 * @returns {string} <lang><zh-CN>对应的绝对站内路由。</zh-CN><en>Corresponding absolute site-internal route.</en></lang>
 */
function routeFromMarkdownPath(relativePath) {
  if (relativePath === 'index.md') {
    return '/';
  }

  if (relativePath === 'en/index.md') {
    return '/en/';
  }

  return `/${relativePath.replace(/\.md$/, '')}`;
}

/**
 * @lang zh-CN 提取 Markdown 内以 `/` 开头的站内链接目标；外部链接和锚点不在此函数解析范围。
 * @lang en Extracts site-internal Markdown link targets that begin with `/`; external links and anchors are outside this function's scope.
 * @param {string} content <lang><zh-CN>完整 Markdown 文本。</zh-CN><en>Complete Markdown text.</en></lang>
 * @returns {string[]} <lang><zh-CN>去掉锚点后的站内链接目标列表。</zh-CN><en>Site-internal link-target list with anchors removed.</en></lang>
 */
function extractInternalLinks(content) {
  /** @lang zh-CN 使用只匹配 Markdown 链接目标的固定正则，不执行或访问链接。 @lang en Uses a fixed regular expression that matches Markdown link targets only and never executes or visits a link. */
  const matches = [...content.matchAll(/\]\((\/[^)\s]+)\)/g)];
  return matches.map((match) => match[1].split('#')[0]);
}

/**
 * @lang zh-CN 校验固定首发页面、成对 locale、来源、链接和公开隐私边界。
 * @lang en Validates fixed launch pages, paired locales, provenance, links, and public privacy boundaries.
 * @param {string} [repositoryRoot=process.cwd()] <lang><zh-CN>仓库绝对根目录。</zh-CN><en>Absolute repository root directory.</en></lang>
 * @returns {Promise<string[]>} <lang><zh-CN>稳定问题列表；空数组表示通过。</zh-CN><en>Stable issue list; an empty array means pass.</en></lang>
 */
export async function validateSiteContent(repositoryRoot = process.cwd()) {
  /** @lang zh-CN 固定公开页面的根目录。 @lang en Fixed root directory for public pages. */
  const siteRoot = resolve(repositoryRoot, 'site');

  /** @lang zh-CN 读取实际 Markdown 清单并转换为仓内稳定相对路径。 @lang en Reads the actual Markdown inventory and converts it to stable repository-relative paths. */
  const markdownFiles = await listMarkdownFiles(siteRoot);

  /** @lang zh-CN 可用路由集合用于后续站内链接验证。 @lang en Available-route set used for later site-internal link validation. */
  const availableRoutes = new Set(markdownFiles.map((file) => routeFromMarkdownPath(relative(siteRoot, file).split(sep).join('/'))));

  /** @lang zh-CN 累积所有页面问题，确保维护者一次得到完整可修复结果。 @lang en Accumulates all page issues so maintainers receive a complete repairable result in one run. */
  const issues = [];

  for (const pagePair of PAGE_PAIRS) {
    for (const page of [{ locale: 'zh-Hans', path: pagePair.zhPath }, { locale: 'en', path: pagePair.enPath }]) {
      /** @lang zh-CN 从固定配对清单解析页面路径，不接受正文或配置提供的路径。 @lang en Resolves the page path from the fixed pair list and accepts no path supplied by body content or configuration. */
      const absolutePath = resolve(siteRoot, page.path);

      let content;

      try {
        content = await readFile(absolutePath, 'utf8');
      } catch (error) {
        if (error?.code === 'ENOENT') {
          issues.push(`${page.path}: missing paired ${page.locale} page for ${pagePair.id}.`);
          continue;
        }

        throw error;
      }

      /** @lang zh-CN 解析声明性 frontmatter，仅验证身份、语言、状态和来源。 @lang en Parses declarative frontmatter and validates only identity, locale, status, and provenance. */
      const frontmatter = parseFrontmatter(content);

      if (frontmatter.id !== pagePair.id) {
        issues.push(`${page.path}: id must equal ${pagePair.id}.`);
      }

      if (frontmatter.locale !== page.locale) {
        issues.push(`${page.path}: locale must equal ${page.locale}.`);
      }

      if (frontmatter.status !== 'pre-release') {
        issues.push(`${page.path}: status must be pre-release.`);
      }

      if (!frontmatter.source?.startsWith(PUBLIC_SOURCE_PREFIX)) {
        issues.push(`${page.path}: source must use the approved public HIA-uView repository prefix.`);
      }

      if (!/^#\s+.+/m.test(content)) {
        issues.push(`${page.path}: a visible level-one heading is required.`);
      }

      /** @lang zh-CN 对小写文本执行固定敏感标记扫描，不输出匹配上下文。 @lang en Scans lower-case text for fixed sensitive markers without outputting matched context. */
      const lowerCaseContent = content.toLowerCase();

      for (const marker of FORBIDDEN_PUBLIC_MARKERS) {
        if (lowerCaseContent.includes(marker)) {
          issues.push(`${page.path}: contains a forbidden public marker.`);
          break;
        }
      }

      for (const link of extractInternalLinks(content)) {
        if (!availableRoutes.has(link)) {
          issues.push(`${page.path}: contains an unresolved internal link.`);
        }
      }
    }
  }

  return issues;
}

/**
 * @lang zh-CN 执行公开内容静态门禁并输出不含绝对路径的简洁结果。
 * @lang en Executes the public-content static gate and outputs a concise result without absolute paths.
 * @returns {Promise<void>} <lang><zh-CN>通过时无返回值；失败时抛出错误。</zh-CN><en>Resolves without a value on pass and throws on failure.</en></lang>
 */
async function runContentCheck() {
  /** @lang zh-CN 运行只读内容检查，页面文本不会被修改。 @lang en Runs the read-only content check; page text is never modified. */
  const issues = await validateSiteContent();

  if (issues.length > 0) {
    throw new Error(`Site content gate failed:\n${issues.map((issue) => `- ${issue}`).join('\n')}`);
  }
}

await runContentCheck();
console.log('Bilingual public-content gate passed.');
