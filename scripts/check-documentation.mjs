import { readdir, readFile } from 'node:fs/promises';
import { join, relative, resolve, sep } from 'node:path';

/**
 * @module check-documentation
 * @lang zh-CN 校验 Site 的 HIA Documentation Sys 配置与受管源码双语注释；本脚本只读取固定仓内路径，不生成、上传或执行受检源码。
 * @lang en Validates the Site HIA Documentation Sys configuration and bilingual comments in governed source; this script reads fixed repository paths only and neither generates, uploads, nor executes inspected source.
 */

/**
 * @typedef {object} DocumentationIssue
 * @property {string} path <lang><zh-CN>稳定的仓内相对路径。</zh-CN><en>Stable repository-relative path.</en></lang>
 * @property {string} message <lang><zh-CN>可修复的问题描述。</zh-CN><en>Repairable issue description.</en></lang>
 * @lang zh-CN 表示一条不泄露本机绝对路径的源码文档问题。
 * @lang en Represents one source-documentation issue without leaking a workstation absolute path.
 */

/**
 * @lang zh-CN 允许文档门禁读取的固定源码根；新根必须先更新 ADR 与此清单，不能由配置或内容声明任意扫描路径。
 * @lang en Fixed source roots that the documentation gate may read; a new root must first update the ADR and this list and cannot be declared by configuration or content as an arbitrary scan path.
 */
const GOVERNED_SOURCE_ROOTS = ['scripts', 'site/.vitepress'];

/**
 * @lang zh-CN 判断相对路径是否位于 Documentation Sys 的固定受管范围内。
 * @lang en Determines whether a relative path is inside the fixed Documentation Sys governed scope.
 * @param {string} relativePath <lang><zh-CN>以正斜杠表达的仓内相对路径。</zh-CN><en>Repository-relative path expressed with forward slashes.</en></lang>
 * @returns {boolean} <lang><zh-CN>路径受门禁管理时返回 `true`。</zh-CN><en>Returns `true` when the path is governed by the gate.</en></lang>
 */
function isGovernedPath(relativePath) {
  return GOVERNED_SOURCE_ROOTS.some((sourceRoot) => relativePath === sourceRoot || relativePath.startsWith(`${sourceRoot}/`));
}

/**
 * @lang zh-CN 递归列出固定受管目录中的可注释源码文件，跳过依赖与临时生成目录。
 * @lang en Recursively lists comment-capable source files under fixed governed directories while skipping dependency and temporary-generation directories.
 * @param {string} directory <lang><zh-CN>当前绝对扫描目录。</zh-CN><en>Current absolute scan directory.</en></lang>
 * @param {string} repositoryRoot <lang><zh-CN>仓库绝对根目录。</zh-CN><en>Absolute repository root directory.</en></lang>
 * @returns {Promise<string[]>} <lang><zh-CN>排序前的绝对源码文件列表。</zh-CN><en>Absolute source-file list before sorting.</en></lang>
 */
async function listGovernedFiles(directory, repositoryRoot) {
  // <lang><zh-CN>仅从白名单目录读取目录项元数据，路径不来自被检查文本。</zh-CN><en>Reads directory-entry metadata only from an allowlisted directory; paths never originate from inspected text.</en></lang>
  const entries = await readdir(directory, { withFileTypes: true });

  /** @lang zh-CN 收集当前分支发现的源码路径，最终由调用方排序以稳定诊断顺序。 @lang en Collects source paths found in the current branch; the caller sorts them to stabilize diagnostic order. */
  const files = [];

  for (const entry of entries) {
    /** @lang zh-CN 由当前受管目录和受信任目录项名称拼出候选路径。 @lang en Builds a candidate path from the current governed directory and a trusted directory-entry name. */
    const absolutePath = join(directory, entry.name);

    /** @lang zh-CN 把平台分隔符统一为正斜杠，只用于边界判断和稳定报告。 @lang en Normalizes platform separators to forward slashes only for boundary checks and stable reporting. */
    const relativePath = relative(repositoryRoot, absolutePath).split(sep).join('/');

    if (!isGovernedPath(relativePath) || ['node_modules', 'temp', '.temp', 'dist'].includes(entry.name)) {
      continue;
    }

    if (entry.isDirectory()) {
      files.push(...await listGovernedFiles(absolutePath, repositoryRoot));
      continue;
    }

    if (entry.isFile() && /\.(?:m?js|css)$/.test(entry.name)) {
      files.push(absolutePath);
    }
  }

  return files;
}

/**
 * @lang zh-CN 校验单个源码注释块同时具备 Documentation Sys 要求的中文和英文主描述，并确保字段描述使用 inline lang 表面。
 * @lang en Validates one source documentation block for Documentation Sys Chinese and English primary descriptions and ensures field descriptions use the inline-lang surface.
 * @param {string} block <lang><zh-CN>原始合法注释块。</zh-CN><en>Raw legal comment block.</en></lang>
 * @param {string} relativePath <lang><zh-CN>稳定的仓内诊断路径。</zh-CN><en>Stable repository-relative diagnostic path.</en></lang>
 * @returns {DocumentationIssue[]} <lang><zh-CN>从该块收集的问题。</zh-CN><en>Issues collected from this block.</en></lang>
 */
function validateCommentBlock(block, relativePath) {
  /** @lang zh-CN 累积当前块的完整问题，以便一次修复全部双语缺口。 @lang en Accumulates complete issues for the current block so every bilingual gap can be repaired together. */
  const issues = [];

  if (!block.includes('@lang zh-CN')) {
    issues.push({ path: relativePath, message: 'Documentation blocks must include @lang zh-CN.' });
  }

  if (!block.includes('@lang en')) {
    issues.push({ path: relativePath, message: 'Documentation blocks must include @lang en.' });
  }

  for (const tagName of ['param', 'returns', 'property']) {
    /** @lang zh-CN 仅提取具有字段语义的标准 tag 行，不解析或执行注释文本。 @lang en Extracts only standard tags with field semantics and never parses or executes comment text. */
    const taggedLines = block.split(/\r?\n/).filter((line) => line.includes(`@${tagName}`));

    for (const taggedLine of taggedLines) {
      if (!taggedLine.includes('<lang>') || !taggedLine.includes('<zh-CN>') || !taggedLine.includes('<en>')) {
        issues.push({ path: relativePath, message: `@${tagName} descriptions must include inline zh-CN and en values.` });
      }
    }
  }

  return issues;
}

/**
 * @lang zh-CN 检查固定 JSDoc JSON 配置的 plugin、theme、locale 与隐私输出边界。
 * @lang en Checks plugin, theme, locale, and privacy-output boundaries in the fixed JSDoc JSON configuration.
 * @param {string} repositoryRoot <lang><zh-CN>仓库绝对根目录。</zh-CN><en>Absolute repository root directory.</en></lang>
 * @returns {Promise<DocumentationIssue[]>} <lang><zh-CN>配置问题列表。</zh-CN><en>Configuration-issue list.</en></lang>
 */
async function validateConfiguration(repositoryRoot) {
  /** @lang zh-CN 固定 JSON 配置的仓内路径，拒绝从环境或参数获取替代配置。 @lang en Fixed repository path of JSON configuration; rejects alternate configuration from environment or parameters. */
  const configurationPath = 'docs/jsdoc.config.json';

  /** @lang zh-CN 读取并解析纯 JSON；损坏配置必须失败，不能静默回退。 @lang en Reads and parses plain JSON; malformed configuration must fail and cannot silently fall back. */
  const configuration = JSON.parse(await readFile(resolve(repositoryRoot, configurationPath), 'utf8'));

  /** @lang zh-CN 提取 HIA 专属设置，后续断言不重复遍历可选嵌套。 @lang en Extracts HIA-specific settings so later assertions do not repeatedly traverse optional nesting. */
  const hia = configuration.opts?.hia;

  /** @lang zh-CN 收集所有配置偏差，而非首项失败即中断。 @lang en Collects all configuration drift instead of stopping at the first failure. */
  const issues = [];

  if (!configuration.plugins?.includes('node_modules/@mandolin/jsdoc-plugin-hia-sys/src/index.cjs')) {
    issues.push({ path: configurationPath, message: 'The HIA JSDoc plugin must be explicit.' });
  }

  if (configuration.opts?.template !== 'node_modules/@mandolin/jsdoc-theme-hia') {
    issues.push({ path: configurationPath, message: 'The HIA JSDoc theme must be explicit.' });
  }

  if (hia?.i18n?.defaultLocale !== 'zh-CN' || hia?.i18n?.fallbackLocale !== 'en' || JSON.stringify(hia?.i18n?.locales) !== JSON.stringify(['zh-CN', 'en'])) {
    issues.push({ path: configurationPath, message: 'Documentation locales must be zh-CN with en fallback only.' });
  }

  if (hia?.integration?.enabled !== true || hia.integration.outputFile !== 'temp/documentation/jsdoc/hia-integration.json') {
    issues.push({ path: configurationPath, message: 'The integration output must use the fixed ignored temporary path.' });
  }

  if (hia?.source?.mode !== 'metadata-only' || hia?.source?.link?.enabled !== false || hia?.source?.preview?.enabled !== false || hia?.microPlugins?.includes('code-fragment')) {
    issues.push({ path: configurationPath, message: 'Source links, previews, and source fragments must remain disabled in the privacy baseline.' });
  }

  return issues;
}

/**
 * @lang zh-CN 检查每个受管源码文件至少有一个合法双语文档块，并逐块验证 tag。
 * @lang en Checks every governed source file for at least one legal bilingual documentation block and validates each block's tags.
 * @param {string} repositoryRoot <lang><zh-CN>仓库绝对根目录。</zh-CN><en>Absolute repository root directory.</en></lang>
 * @returns {Promise<DocumentationIssue[]>} <lang><zh-CN>源码文档问题列表。</zh-CN><en>Source-documentation issue list.</en></lang>
 */
async function validateSourceComments(repositoryRoot) {
  /** @lang zh-CN 只汇集当前存在的固定受管根，缺失的未来目录不构成绕过。 @lang en Collects only currently existing fixed governed roots; absent future directories do not form a bypass. */
  const sourceFiles = [];

  for (const sourceRoot of GOVERNED_SOURCE_ROOTS) {
    try {
      sourceFiles.push(...await listGovernedFiles(resolve(repositoryRoot, sourceRoot), repositoryRoot));
    } catch (error) {
      if (error?.code !== 'ENOENT') {
        throw error;
      }
    }
  }

  /** @lang zh-CN 汇总受管文件的注释问题，路径始终转换为仓内相对形式。 @lang en Aggregates comment issues for governed files, always converting paths to repository-relative form. */
  const issues = [];

  for (const sourceFile of sourceFiles.sort()) {
    /** @lang zh-CN 生成不包含盘符的稳定报告路径。 @lang en Produces a stable report path that contains no drive letter. */
    const relativePath = relative(repositoryRoot, sourceFile).split(sep).join('/');

    /** @lang zh-CN 仅读取源码文本匹配合法注释，不导入、解析或执行模块。 @lang en Reads source text only to match legal comments and never imports, parses, or executes a module. */
    const content = await readFile(sourceFile, 'utf8');

    /** @lang zh-CN CSSDoc/JSDoc 均采用块注释，统一按双星开头的合法文档块检查。 @lang en CSSDoc and JSDoc both use block comments, so legal documentation blocks beginning with two stars are checked uniformly. */
    const blocks = content.match(/\/\*\*[\s\S]*?\*\//g) || [];

    if (blocks.length === 0) {
      issues.push({ path: relativePath, message: 'Governed source must contain a bilingual language-appropriate documentation block.' });
      continue;
    }

    for (const block of blocks) {
      issues.push(...validateCommentBlock(block, relativePath));
    }
  }

  return issues;
}

/**
 * @lang zh-CN 汇总配置与源码双语 Documentation Sys 门禁问题，不写入文件、生成物或网络。
 * @lang en Collects configuration and source bilingual Documentation Sys gate issues without writing files, artifacts, or network state.
 * @param {string} [repositoryRoot=process.cwd()] <lang><zh-CN>仓库绝对根目录。</zh-CN><en>Absolute repository root directory.</en></lang>
 * @returns {Promise<DocumentationIssue[]>} <lang><zh-CN>完整问题列表；空数组表示通过。</zh-CN><en>Complete issue list; an empty array means pass.</en></lang>
 */
export async function validateDocumentationContract(repositoryRoot = process.cwd()) {
  /** @lang zh-CN 先校验固定 JSON 契约，再检查源码；两类问题都会返回。 @lang en Validates the fixed JSON contract before source comments; both kinds of issues are returned. */
  const configurationIssues = await validateConfiguration(repositoryRoot);

  /** @lang zh-CN 源码检查独立运行，避免配置问题遮蔽新代码的双语注释缺口。 @lang en Runs source checking independently so configuration problems cannot hide bilingual-comment gaps in new code. */
  const sourceIssues = await validateSourceComments(repositoryRoot);

  return [...configurationIssues, ...sourceIssues];
}

/**
 * @lang zh-CN 以稳定的相对路径诊断执行 Documentation Sys 静态门禁。
 * @lang en Executes the static Documentation Sys gate with stable relative-path diagnostics.
 * @returns {Promise<void>} <lang><zh-CN>验证通过时无返回值；失败时抛出错误。</zh-CN><en>Resolves without a value on pass and throws on failure.</en></lang>
 */
async function runDocumentationCheck() {
  /** @lang zh-CN 运行只读 contract 并保留完整问题集。 @lang en Runs the read-only contract and retains the complete issue set. */
  const issues = await validateDocumentationContract();

  if (issues.length > 0) {
    throw new Error(`Documentation Sys gate failed:\n${issues.map((issue) => `- ${issue.path}: ${issue.message}`).join('\n')}`);
  }
}

await runDocumentationCheck();
console.log('Documentation Sys bilingual source gate passed.');
