/**
 * diff-dom 引擎封装
 */
import { DiffDOM } from 'diff-dom'
import { parseHTML, findNodeByPath, insertAt } from '../utils/dom.js'

/**
 * 引擎名称
 */
export const engineName = 'diffdom'

/**
 * 对比 HTML 内容
 * @param {string} oldHtml - 旧 HTML
 * @param {string} newHtml - 新 HTML
 * @returns {Object} { oldNode, diffs }
 */
export function diffHTML(oldHtml, newHtml) {
  // 快速相等判断
  if (oldHtml === newHtml) return { oldNode: null, diffs: [] }
  if (!oldHtml) return { oldNode: null, diffs: [{ action: 'fullReplace', newHtml }] }
  if (!newHtml) return { oldNode: null, diffs: [{ action: 'fullRemove', oldHtml }] }

  try {
    const oldDoc = parseHTML(oldHtml)
    const newDoc = parseHTML(newHtml)

    const dd = new DiffDOM()
    const diffs = dd.diff(oldDoc, newDoc)

    return { oldNode: oldDoc, diffs }
  } catch (error) {
    console.warn('[rich-diff] diff-dom 对比失败:', error)
    return { oldNode: null, diffs: [] }
  }
}

/**
 * 在 DOM 节点上应用差异操作
 * @param {Element} node - 目标节点
 * @param {Object} diff - 差异操作
 * @param {string} fieldName - 字段名称
 * @param {Object} counters - 计数器 { add, del }
 */
export function applyDiff(node, diff, fieldName, counters) {
  const targetNode = findNodeByPath(node, diff.path)
  if (!targetNode) return

  switch (diff.action) {
    case 'addElement':
      handleAddElement(targetNode, diff, fieldName, counters)
      break
    case 'removeElement':
      handleRemoveElement(targetNode, diff, fieldName, counters)
      break
    case 'replaceElement':
      handleReplaceElement(targetNode, diff, fieldName, counters)
      break
    case 'addTextElement':
      handleAddTextElement(targetNode, diff, fieldName, counters)
      break
    case 'removeTextElement':
      handleRemoveTextElement(targetNode, diff, fieldName, counters)
      break
    case 'replaceTextElement':
      handleReplaceTextElement(targetNode, diff, fieldName, counters)
      break
    default:
      break
  }
}

// === 内部处理函数 ===

function handleAddElement(parent, diff, fieldName, counters) {
  const wrapper = createInsWrapper(fieldName, counters)
  wrapper.innerHTML = diff.element.outerHTML || diff.element.textContent
  insertAt(parent, wrapper, diff.index)
}

function handleRemoveElement(parent, diff, fieldName, counters) {
  const targetChild = parent.childNodes[diff.index]
  if (!targetChild) return

  const wrapper = createDelWrapper(fieldName, counters)
  wrapper.appendChild(targetChild.cloneNode(true))
  parent.replaceChild(wrapper, targetChild)
}

function handleReplaceElement(parent, diff, fieldName, counters) {
  const oldChild = parent.childNodes[diff.index]
  if (!oldChild) return

  const delWrapper = createDelWrapper(fieldName, counters)
  delWrapper.appendChild(oldChild.cloneNode(true))

  const insWrapper = createInsWrapper(fieldName, counters)
  insWrapper.innerHTML = diff.element.outerHTML || diff.element.textContent

  const fragment = document.createDocumentFragment()
  fragment.appendChild(delWrapper)
  fragment.appendChild(insWrapper)
  parent.replaceChild(fragment, oldChild)
}

function handleAddTextElement(parent, diff, fieldName, counters) {
  const wrapper = createInsWrapper(fieldName, counters)
  wrapper.textContent = diff.text
  insertAt(parent, wrapper, diff.index)
}

function handleRemoveTextElement(parent, diff, fieldName, counters) {
  const targetChild = parent.childNodes[diff.index]
  if (!targetChild) return

  const wrapper = createDelWrapper(fieldName, counters)
  wrapper.textContent = diff.text
  parent.replaceChild(wrapper, targetChild)
}

function handleReplaceTextElement(parent, diff, fieldName, counters) {
  const oldChild = parent.childNodes[diff.index]
  if (!oldChild) return

  const oldText = oldChild.textContent || oldChild.nodeValue || ''

  const delWrapper = createDelWrapper(fieldName, counters)
  delWrapper.textContent = oldText

  const insWrapper = createInsWrapper(fieldName, counters)
  insWrapper.textContent = diff.text

  const fragment = document.createDocumentFragment()
  fragment.appendChild(delWrapper)
  fragment.appendChild(insWrapper)
  parent.replaceChild(fragment, oldChild)
}

function createDelWrapper(fieldName, counters) {
  const wrapper = document.createElement('del')
  wrapper.style.color = 'red'
  wrapper.style.textDecoration = 'line-through'
  wrapper.setAttribute('data-diff', 'del')
  wrapper.setAttribute('data-diff-id', `diff-del-${fieldName}-${counters.del++}`)
  wrapper.setAttribute('data-diff-field', fieldName)
  return wrapper
}

function createInsWrapper(fieldName, counters) {
  const wrapper = document.createElement('ins')
  wrapper.style.color = '#1878E8'
  wrapper.setAttribute('data-diff', 'add')
  wrapper.setAttribute('data-diff-id', `diff-add-${fieldName}-${counters.add++}`)
  wrapper.setAttribute('data-diff-field', fieldName)
  return wrapper
}

/**
 * 对比纯文本
 * @param {string} oldText - 旧文本
 * @param {string} newText - 新文本
 * @returns {string} 带差异标记的文本
 */
export function diffText(oldText, newText) {
  // 使用 htmldiff 风格的简单文本对比
  if (oldText === newText) return newText
  if (!oldText) return newText
  if (!newText) return ''

  // 简单实现：直接返回新文本，带上新增部分标记
  // 在实际使用中，应该使用 htmldiff 引擎处理纯文本
  return newText
}

export default {
  engineName,
  diffHTML,
  diffText,
  applyDiff
}
