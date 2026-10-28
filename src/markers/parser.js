/**
 * DOM 解析工具
 * 用于解析差异标记
 */

/**
 * 获取差异范围
 * @param {string} html - HTML 字符串
 * @returns {Array} 范围列表 [{ type, range, content }]
 */
export function getDiffRanges(html) {
  if (!html || typeof html !== 'string') return []

  const ranges = []
  const pattern = /<(ins|del|difftext)([^>]*)>([\s\S]*?)<\/\1>/gi
  let match

  while ((match = pattern.exec(html)) !== null) {
    const attrs = match[2]
    const diffId = extractAttr(attrs, 'data-diff-id')
    const diffType = extractAttr(attrs, 'data-diff')

    ranges.push({
      type: diffType || (match[1].toLowerCase() === 'ins' ? 'add' : 'del'),
      range: [match.index, match.index + match[0].length],
      content: match[3],
      diffId
    })
  }

  return ranges
}

/**
 * 检查是否有差异标记
 * @param {string} str - 字符串
 * @returns {boolean}
 */
export function hasDiffMarkers(str) {
  if (!str || typeof str !== 'string') return false
  return str.includes('data-diff="') || str.includes('<ins') || str.includes('<del') || str.includes('<difftext')
}

/**
 * 检测变更类型
 * @param {string} str - 字符串
 * @returns {string} 'add' | 'del' | 'modify' | 'none'
 */
export function detectChangeType(str) {
  if (!str || typeof str !== 'string') return 'none'

  const hasIns = str.includes('data-diff="add"') || str.includes('<ins') || str.includes('<difftext')
  const hasDel = str.includes('data-diff="del"') || str.includes('<del')

  if (hasIns && hasDel) return 'modify'
  if (hasIns) return 'add'
  if (hasDel) return 'del'
  return 'none'
}

/**
 * 提取差异标记
 * @param {string} html - HTML 字符串
 * @returns {Object} { insTags, delTags }
 */
export function extractDiffMarkers(html) {
  const insTags = []
  const delTags = []

  if (!html || typeof html !== 'string') {
    return { insTags, delTags }
  }

  const pattern = /<(ins|del|difftext)([^>]*)>([\s\S]*?)<\/\1>/gi
  let match

  while ((match = pattern.exec(html)) !== null) {
    const tagType = match[1].toLowerCase()
    const attrs = match[2]
    const content = match[3]
    const diffId = extractAttr(attrs, 'data-diff-id')
    const diffType = extractAttr(attrs, 'data-diff')

    const item = {
      text: cleanContent(content),
      diffId,
      attrs
    }

    // 根据类型分类
    if (diffType === 'add' || tagType === 'ins') {
      insTags.push(item)
    } else if (diffType === 'del' || tagType === 'del') {
      delTags.push(item)
    }
  }

  return { insTags, delTags }
}

/**
 * 根据ID查找元素
 * @param {string} html - HTML 字符串
 * @param {string} diffId - 差异ID
 * @returns {Object|null} { tagName, content, attrs }
 */
export function findElementById(html, diffId) {
  if (!html || !diffId) return null

  const pattern = new RegExp(`<(ins|del|difftext)([^>]*data-diff-id="${diffId}"[^>]*)>([\\s\\S]*?)<\\/\\1>`, 'i')
  const match = pattern.exec(html)

  if (match) {
    return {
      tagName: match[1].toLowerCase(),
      content: match[3],
      attrs: match[2]
    }
  }

  return null
}

/**
 * 清理内容（移除标签）
 * @param {string} html - HTML 字符串
 * @returns {string}
 */
export function cleanContent(html) {
  if (!html) return ''
  return html
    .replace(/<[^>]+>/g, '')
    .replace(/&nbsp;/g, ' ')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&amp;/g, '&')
    .trim()
}

/**
 * 提取属性值
 * @param {string} attrs - 属性字符串
 * @param {string} attrName - 属性名
 * @returns {string|null}
 */
function extractAttr(attrs, attrName) {
  if (!attrs) return null
  const pattern = new RegExp(`${attrName}="([^"]*)"`, 'i')
  const match = pattern.exec(attrs)
  return match ? match[1] : null
}

export default {
  getDiffRanges,
  hasDiffMarkers,
  detectChangeType,
  extractDiffMarkers,
  findElementById,
  cleanContent
}