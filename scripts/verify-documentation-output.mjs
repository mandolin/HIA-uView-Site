import { readFile } from 'node:fs/promises';
import { resolve } from 'node:path';

/**
 * @module verify-documentation-output
 * @lang zh-CN 验证本地 HIA JSDoc integration 输出不含源码正文、绝对路径或私有标记；该检查只读取 Git 忽略的临时生成物。
 * @lang en Verifies that local HIA JSDoc integration output contains no source body, absolute path, or private marker; this check reads only Git-ignored temporary artifacts.
 */

/**
 * @lang zh-CN 受保护 integration JSON 的固定仓内相对路径，不接受调用方覆盖。
 * @lang en Fixed repository-relative path of the protected integration JSON; no caller override is accepted.
 */
const INTEGRATION_OUTPUT_PATH = 'temp/documentation/jsdoc/hia-integration.json';

/**
 * @lang zh-CN 判断字符串是否包含 Windows、UNC、POSIX、file URI 或遍历形式的路径泄露。
 * @lang en Determines whether a string contains a Windows, UNC, POSIX, file-URI, or traversal-shaped path leak.
 * @param {string} value <lang><zh-CN>待检查字符串。</zh-CN><en>String to inspect.</en></lang>
 * @returns {boolean} <lang><zh-CN>检测到不安全路径形态时返回 `true`。</zh-CN><en>Returns `true` when an unsafe path form is detected.</en></lang>
 */
function hasUnsafePath(value) {
  return /^[A-Za-z]:[\\/]/.test(value)
    || /^\\\\/.test(value)
    || /(?:^|[\\/])\.\.(?:[\\/]|$)/.test(value)
    || /file:\/\//i.test(value);
}

/**
 * @lang zh-CN 递归检查 JSON 值，收集 source-content 与路径泄露问题，但不回显完整生成物。
 * @lang en Recursively checks JSON values and collects source-content and path-leak issues without echoing the complete artifact.
 * @param {unknown} value <lang><zh-CN>当前 JSON 值。</zh-CN><en>Current JSON value.</en></lang>
 * @param {string} diagnosticPath <lang><zh-CN>稳定的 JSON 风格诊断路径。</zh-CN><en>Stable JSON-style diagnostic path.</en></lang>
 * @param {string[]} issues <lang><zh-CN>可变问题收集器。</zh-CN><en>Mutable issue collector.</en></lang>
 * @returns {void} <lang><zh-CN>不返回值；问题会追加到收集器。</zh-CN><en>Returns no value; issues are appended to the collector.</en></lang>
 */
function inspectValue(value, diagnosticPath, issues) {
  if (Array.isArray(value)) {
    value.forEach((item, index) => inspectValue(item, `${diagnosticPath}[${index}]`, issues));
    return;
  }

  if (value && typeof value === 'object') {
    for (const [key, nestedValue] of Object.entries(value)) {
      /** @lang zh-CN 只构造 JSON 风格路径，不把生成时的真实文件路径写入诊断。 @lang en Builds only a JSON-style path and never writes a generation-time real file path into diagnostics. */
      const nestedPath = `${diagnosticPath}.${key}`;

      /** @lang zh-CN 只有非空 fragments、非空 primary block 或真值 sourcesContent 才表示源码嵌入；空数组是默认隐私输出的合法声明。 @lang en Only non-empty fragments, a non-empty primary block, or truthy sourcesContent indicates source embedding; an empty array is a valid declaration in the default privacy output. */
      const embedsSourceContent = (key === 'sourceFragments' && Array.isArray(nestedValue) && nestedValue.length > 0)
        || ((key === 'sourcesContent' || key === 'primaryBlock') && Boolean(nestedValue));

      if (embedsSourceContent) {
        issues.push(`${nestedPath} must not embed source content.`);
      }

      inspectValue(nestedValue, nestedPath, issues);
    }

    return;
  }

  if (typeof value === 'string' && hasUnsafePath(value)) {
    issues.push(`${diagnosticPath} contains an unsafe path.`);
  }
}

/**
 * @lang zh-CN 读取并验证生成的 HIA integration JSON 的契约和隐私边界。
 * @lang en Reads and validates contract and privacy boundaries of the generated HIA integration JSON.
 * @param {string} [repositoryRoot=process.cwd()] <lang><zh-CN>仓库绝对根目录。</zh-CN><en>Absolute repository root directory.</en></lang>
 * @returns {Promise<string[]>} <lang><zh-CN>输出问题列表；空数组表示通过。</zh-CN><en>Output-issue list; an empty array means pass.</en></lang>
 */
export async function validateDocumentationOutput(repositoryRoot = process.cwd()) {
  /** @lang zh-CN 只读取固定临时输出，函数不生成、删除或上传文件。 @lang en Reads only the fixed temporary output; this function does not generate, delete, or upload files. */
  const output = JSON.parse(await readFile(resolve(repositoryRoot, INTEGRATION_OUTPUT_PATH), 'utf8'));

  /** @lang zh-CN 汇总生成物的隐私与格式问题。 @lang en Aggregates privacy and format issues for the artifact. */
  const issues = [];

  if (output.contract !== 'hia-jsdoc-integration' || output.mode !== 'hiaIntegration') {
    issues.push('Integration output must declare the hia-jsdoc-integration contract and hiaIntegration mode.');
  }

  if (Array.isArray(output.sourceFragments) && output.sourceFragments.length > 0) {
    issues.push('Top-level sourceFragments must be empty.');
  }

  inspectValue(output, '$', issues);
  return issues;
}

/**
 * @lang zh-CN 执行临时 Documentation Sys 输出检查，并以稳定摘要报告问题。
 * @lang en Executes temporary Documentation Sys output validation and reports issues as a stable summary.
 * @returns {Promise<void>} <lang><zh-CN>通过时无返回值；失败时抛出错误。</zh-CN><en>Resolves without a value on pass and throws on failure.</en></lang>
 */
async function runOutputCheck() {
  /** @lang zh-CN 运行只读验证，避免错误输出回显完整 JSON 内容。 @lang en Runs read-only validation and avoids echoing complete JSON content in errors. */
  const issues = await validateDocumentationOutput();

  if (issues.length > 0) {
    throw new Error(`Documentation output privacy check failed:\n${issues.map((issue) => `- ${issue}`).join('\n')}`);
  }
}

await runOutputCheck();
console.log('Documentation Sys generated-output privacy check passed.');
