/**
 * DOM 工具函数
 */

/**
 * 解析 HTML 字符串为 DOM 节点
 * @param {string} html - HTML 字符串
 * @returns {Element} DOM 节点
 */
export function parseHTML(html) {
  const parser = new DOMParser()
  const doc = parser.parseFromString(`<div>${html}</div>`, 'text/html')
  return doc.body.firstChild
}

/**
 * 从 HTML 中提取纯文本
 * @param {string} html - HTML 字符串
 * @returns {string} 纯文本
 */
export function extractPlainText(html) {
  if (!html) return ''

  return html
    .replace(/<style[^>]*>[\s\S]*?<\/style>/gi, '')
    .replace(/<script[^>]*>[\s\S]*?<\/script>/gi, '')
    .replace(/<[^>]+>/g, '')
    .replace(/&nbsp;/g, ' ')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&amp;/g, '&')
    .replace(/&quot;/g, '"')
    .trim()
}

/**
 * 检查是否支持 ShadowDOM
 * @returns {boolean}
 */
export function supportsShadowDOM() {
  return typeof Element !== 'undefined' &&
         Element.prototype.attachShadow !== undefined
}

/**
 * 检查是否支持自定义元素
 * @returns {boolean}
 */
export function supportsCustomElements() {
  return typeof customElements !== 'undefined'
}

/**
 * 创建差异标记的唯一 ID
 * @param {string} type - 标记类型 (add/del)
 * @param {string} field - 字段名称
 * @param {number} index - 索引
 * @returns {string}
 */
export function createDiffId(type, field, index) {
  return `diff-${type}-${field}-${index}`
}

/**
 * 判断字符串是否包含差异标记
 * @param {string} str - 字符串
 * @returns {boolean}
 */
export function hasDiffMarker(str) {
  if (!str || typeof str !== 'string') return false
  return str.includes('data-diff="') ||
         str.includes('<ins') ||
         str.includes('<del')
}

/**
 * 在指定位置插入节点
 * @param {Element} parent - 父节点
 * @param {Element} newNode - 新节点
 * @param {number} index - 位置索引
 */
export function insertAt(parent, newNode, index) {
  if (index < parent.childNodes.length) {
    parent.insertBefore(newNode, parent.childNodes[index])
  } else {
    parent.appendChild(newNode)
  }
}

/**
 * 根据路径查找 DOM 节点
 * @param {Element} root - 根节点
 * @param {number[]} path - 路径数组
 * @returns {Element|null}
 */
export function findNodeByPath(root, path) {
  if (!path) return root

  let current = root
  for (const index of path) {
    if (!current || !current.childNodes) return null
    current = current.childNodes[index]
  }
  return current
}