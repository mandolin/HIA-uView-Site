import { readdir, readFile } from 'node:fs/promises';
import { join, relative, resolve, sep } from 'node:path';

/**
 * @module verify-static-output
 * @lang zh-CN 验证 VitePress 的本地静态输出不含私有路径、源码映射或禁止公开的标记；不启动服务器、预览或部署。
 * @lang en Verifies that VitePress local static output contains no private path, source map, or prohibited public marker; it starts no server, preview, or deployment.
 */

/**
 * @lang zh-CN 本地 VitePress 静态构建的固定输出目录，不从命令行或环境变量接收替代路径。
 * @lang en Fixed output directory for the local VitePress static build; no alternative path is accepted from command line or environment.
 */
const STATIC_OUTPUT_DIRECTORY = 'site/.vitepress/dist';

/**
 * @lang zh-CN 静态输出中禁止出现的隐私或未授权能力标记。
 * @lang en Privacy or unauthorized-capability markers forbidden from static output.
 */
const FORBIDDEN_OUTPUT_MARKERS = ['file://', 'work-zone', 'touristappid', 'appid:', 'k:\\', 'i:\\', 'sourcescontent'];

/**
 * @lang zh-CN 递归列出固定输出目录中的文件，跳过目录本身且不读取目录外路径。
 * @lang en Recursively lists files in the fixed output directory, skipping directories themselves and never reading outside paths.
 * @param {string} directory <lang><zh-CN>当前绝对输出目录。</zh-CN><en>Current absolute output directory.</en></lang>
 * @returns {Promise<string[]>} <lang><zh-CN>输出文件绝对路径列表。</zh-CN><en>Output-file absolute-path list.</en></lang>
 */
async function listOutputFiles(directory) {
  /** @lang zh-CN 读取受信任输出目录的 entry 元数据。 @lang en Reads entry metadata from the trusted output directory. */
  const entries = await readdir(directory, { withFileTypes: true });

  /** @lang zh-CN 收集输出文件路径。 @lang en Collects output-file paths. */
  const files = [];

  for (const entry of entries) {
    /** @lang zh-CN 从固定输出目录和 entry 名称构造候选路径。 @lang en Builds a candidate path from a fixed output directory and entry name. */
    const absolutePath = join(directory, entry.name);

    if (entry.isDirectory()) {
      files.push(...await listOutputFiles(absolutePath));
      continue;
    }

    if (entry.isFile()) {
      files.push(absolutePath);
    }
  }

  return files.sort();
}

/**
 * @lang zh-CN 校验本地静态输出的必要入口、路径隐私和公开标记边界。
 * @lang en Validates required entry points, path privacy, and public-marker boundaries in local static output.
 * @param {string} [repositoryRoot=process.cwd()] <lang><zh-CN>仓库绝对根目录。</zh-CN><en>Absolute repository root directory.</en></lang>
 * @returns {Promise<string[]>} <lang><zh-CN>稳定输出问题列表；空数组表示通过。</zh-CN><en>Stable output-issue list; an empty array means pass.</en></lang>
 */
export async function validateStaticOutput(repositoryRoot = process.cwd()) {
  /** @lang zh-CN 解析固定构建输出位置。 @lang en Resolves the fixed build-output location. */
  const outputRoot = resolve(repositoryRoot, STATIC_OUTPUT_DIRECTORY);

  /** @lang zh-CN 列出输出文件，构建缺失时由读取失败明确阻断。 @lang en Lists output files; a missing build is explicitly blocked by the read failure. */
  const outputFiles = await listOutputFiles(outputRoot);

  /** @lang zh-CN 构建相对输出文件集合用于验证两个 locale 入口。 @lang en Builds a relative output-file set to validate both locale entry points. */
  const relativeFiles = new Set(outputFiles.map((file) => relative(outputRoot, file).split(sep).join('/')));

  /** @lang zh-CN 汇总输出问题，不把工作站绝对路径写入结果。 @lang en Aggregates output issues without writing workstation absolute paths into results. */
  const issues = [];

  for (const requiredFile of ['index.html', 'en/index.html']) {
    if (!relativeFiles.has(requiredFile)) {
      issues.push(`Static output is missing ${requiredFile}.`);
    }
  }

  for (const outputFile of outputFiles) {
    /** @lang zh-CN 输出报告只使用相对于 dist 的稳定路径。 @lang en Output reports use only the stable path relative to dist. */
    const relativePath = relative(outputRoot, outputFile).split(sep).join('/');

    if (relativePath.endsWith('.map')) {
      issues.push(`${relativePath}: source maps are not allowed in the local static output.`);
      continue;
    }

    /** @lang zh-CN 以 UTF-8 读取文本性静态产物；VitePress 首发输出不包含二进制资产。 @lang en Reads textual static artifacts as UTF-8; VitePress launch output includes no binary asset. */
    const content = await readFile(outputFile, 'utf8');

    /** @lang zh-CN 标记扫描使用小写字符串且不回显命中片段。 @lang en Marker scan uses lower-case text and never echoes matched fragments. */
    const lowerCaseContent = content.toLowerCase();

    for (const marker of FORBIDDEN_OUTPUT_MARKERS) {
      if (lowerCaseContent.includes(marker)) {
        issues.push(`${relativePath}: contains a forbidden output marker.`);
        break;
      }
    }
  }

  return issues;
}

/**
 * @lang zh-CN 执行静态输出检查；它只在已有 build 后读取输出，不上传、服务或删除产物。
 * @lang en Executes the static-output check; it reads output only after an existing build and does not upload, serve, or delete artifacts.
 * @returns {Promise<void>} <lang><zh-CN>通过时无返回值；失败时抛出错误。</zh-CN><en>Resolves without a value on pass and throws on failure.</en></lang>
 */
async function runStaticOutputCheck() {
  /** @lang zh-CN 执行只读输出验证。 @lang en Executes read-only output validation. */
  const issues = await validateStaticOutput();

  if (issues.length > 0) {
    throw new Error(`Static output gate failed:\n${issues.map((issue) => `- ${issue}`).join('\n')}`);
  }
}

await runStaticOutputCheck();
console.log('Static-output privacy and entry-point gate passed.');
