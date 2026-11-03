/**
 * htmldiff-js 引擎封装
 * 直接导入依赖，打包时一起打包
 */
import HtmlDiff from 'htmldiff-js'

// 引擎名称
export const engineName = 'htmldiff'

/**
 * 生成基于内容的唯一占位符
 * 相同内容生成相同的占位符，避免 htmldiff 误判
 */
function generatePlaceholder(type, content) {
  // 使用内容的简单哈希（取前 8 位字符编码和）
  let hash = 0
  for (let i = 0; i < content.length; i++) {
    hash = ((hash << 5) - hash) + content.charCodeAt(i)
    hash = hash & hash // Convert to 32bit integer
  }
  // 使用绝对值，确保正数
  const hashValue = Math.abs(hash).toString(36)
  return `__RICH_DIFF_PROTECTED_${type}_${hashValue}__`
}

/**
 * 保护用户原内容中的 ins/del 标签
 * 将整个标签块（包括内容）替换为占位符，避免被 htmldiff-js 对比
 * @param {string} html - HTML 内容
 * @returns {Object} { protected: 保护后的 HTML, placeholders: 占位符映射 }
 */
function protectUserInsDel(html) {
  if (!html || typeof html !== 'string') return { protected: html, placeholders: new Map() }

  // 不重置计数器，保证全局唯一
  const placeholders = new Map()

  // 替换用户 ins 标签（整个标签块，包括内容）
  // 只保护不带 data-diff 属性的标签（即用户原内容）
  html = html.replace(/<ins(\s[^>]*)?>([\s\S]*?)<\/ins>/gi, (match, attrs, content) => {
    // 如果带有 data-diff 属性，说明是差异标记，不保护
    if (attrs && attrs.includes('data-diff=')) {
      return match
    }
    // 整个标签块替换为占位符（包括内容）
    // 使用内容哈希，确保相同内容得到相同的占位符
    const placeholder = generatePlaceholder('INS', match)
    placeholders.set(placeholder, match)
    return placeholder
  })

  // 替换用户 del 标签（整个标签块，包括内容）
  html = html.replace(/<del(\s[^>]*)?>([\s\S]*?)<\/del>/gi, (match, attrs, content) => {
    if (attrs && attrs.includes('data-diff=')) {
      return match
    }
    // 使用内容哈希，确保相同内容得到相同的占位符
    const placeholder = generatePlaceholder('DEL', match)
    placeholders.set(placeholder, match)
    return placeholder
  })

  return { protected: html, placeholders }
}

/**
 * 恢复用户原内容中的 ins/del 标签
 * @param {string} html - HTML 内容
 * @param {Map} placeholders - 占位符映射
 * @returns {string} 恢复后的 HTML
 */
function restoreUserInsDel(html, placeholders) {
  if (!html || !placeholders || placeholders.size === 0) return html

  let result = html

  // 多轮还原，确保所有占位符都被替换
  let maxIterations = 10 // 防止无限循环
  let changed = true
  while (changed && maxIterations > 0) {
    changed = false
    placeholders.forEach((original, placeholder) => {
      if (result.includes(placeholder)) {
        result = result.replace(placeholder, original)
        changed = true
      }
    })
    maxIterations--
  }

  // 清理残留的占位符（无法还原的直接删除）
  result = result.replace(/__RICH_DIFF_PROTECTED_(INS|DEL)_[a-z0-9]+__/g, '')

  return result
}

/**
 * 标准化 HTML 格式
 * 统一自闭合标签、空白字符等，避免格式差异
 * @param {string} html - HTML 内容
 * @returns {string} 标准化后的 HTML
 */
function normalizeHtml(html) {
  if (!html || typeof html !== 'string') return html

  let result = html

  // 统一自闭合标签格式：<br/> -> <br>, <img ... /> -> <img ...>
  result = result.replace(/<br\s*\/>/gi, '<br>')
  result = result.replace(/<img([^>]*)\s*\/>/gi, '<img$1>')
  result = result.replace(/<hr\s*\/>/gi, '<hr>')
  result = result.replace(/<input([^>]*)\s*\/>/gi, '<input$1>')

  // 移除标签间的多余空白（保留标签内文本中的空格）
  // 只处理标签之间的空白，不影响文本内容
  result = result.replace(/>\s+</g, '><')

  // 移除行首行尾空白
  result = result.trim()

  return result
}

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
    // 标准化 HTML 格式，避免空白字符和自闭合标签差异
    const normalizedOld = normalizeHtml(oldHtml)
    const normalizedNew = normalizeHtml(newHtml)

    // 保护用户原内容中的 ins/del 标签
    const { protected: protectedOld, placeholders: oldPlaceholders } = protectUserInsDel(normalizedOld)
    const { protected: protectedNew, placeholders: newPlaceholders } = protectUserInsDel(normalizedNew)

    // 执行对比
    let result = HtmlDiff.execute(protectedOld, protectedNew)

    // 合并占位符映射
    const allPlaceholders = new Map()
    Array.from(oldPlaceholders.entries()).forEach(([k, v]) => allPlaceholders.set(k, v))
    Array.from(newPlaceholders.entries()).forEach(([k, v]) => allPlaceholders.set(k, v))

    // 恢复用户原内容中的 ins/del 标签
    result = restoreUserInsDel(result, allPlaceholders)

    return result
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