/**
 * htmldiff-js 引擎封装
 * 直接导入依赖，打包时一起打包
 */
import HtmlDiff from 'htmldiff-js'

// 引擎名称
export const engineName = 'htmldiff'

/**
 * 对比 HTML 内容
 * @param {string} oldHtml - 旧 HTML
 * @param {string} newHtml - 新 HTML
 * @returns {string} 带 <ins>/<del> 标签的 HTML
 */
export function diffHTML(oldHtml, newHtml) {
  // 快速相等判断
  if (oldHtml === newHtml) return newHtml
  if (!oldHtml) return newHtml
  if (!newHtml) return ''

  // 使用打包进来的 HtmlDiff
  if (!HtmlDiff) {
    console.warn('[rich-diff] htmldiff-js 未正确加载')
    return newHtml
  }

  try {
    return HtmlDiff.execute(oldHtml, newHtml)
  } catch (error) {
    console.warn('[rich-diff] htmldiff 对比失败:', error)
    return newHtml
  }
}

/**
 * 对比纯文本
 * @param {string} oldText - 旧文本
 * @param {string} newText - 新文本
 * @returns {string} 带差异标记的文本
 */
export function diffText(oldText, newText) {
  return diffHTML(oldText, newText)
}

export default {
  engineName,
  diffHTML,
  diffText
}