/**
 * 纯文本对比适配器
 */
import { getEngine } from '../engines/index.js'
import { createDiffId } from '../utils/dom.js'
import { DefaultConfig } from '../utils/constants.js'

// 计数器
let addCounter = 0
let delCounter = 0

/**
 * 重置计数器
 */
export function resetCounters() {
  addCounter = 0
  delCounter = 0
}

/**
 * 对比纯文本
 * @param {string} oldText - 旧文本
 * @param {string} newText - 新文本
 * @param {string} fieldName - 字段名称
 * @returns {Object} { html, useShadowDOM, markers }
 */
export function diffText(oldText = '', newText = '', fieldName = 'content') {
  resetCounters()

  // 快速判断
  if (oldText === newText) {
    return createResult(newText, false, [])
  }

  if (!oldText) {
    return wrapWithInsertTag(newText, fieldName)
  }

  if (!newText) {
    return createResult('', false, [])
  }

  // 调用引擎对比
  const engine = getEngine()
  const result = engine.diffText(String(oldText), String(newText))

  // 注入 data-diff 属性
  const html = injectDiffAttributes(result, fieldName)
  const markers = extractMarkerIds(html)

  return createResult(html, false, markers)
}

/**
 * 创建返回结果
 */
function createResult(html, useShadowDOM, markers) {
  return { html, useShadowDOM, markers }
}

/**
 * 用 ins 标签包裹内容
 */
function wrapWithInsertTag(text, fieldName) {
  const diffId = createDiffId('add', fieldName, addCounter++)
  const html = `<ins style="color: ${DefaultConfig.diffStyles.add.color};" data-diff="add" data-diff-id="${diffId}" data-diff-field="${fieldName}">${text}</ins>`
  return createResult(html, false, [diffId])
}

/**
 * 注入 data-diff 属性
 */
function injectDiffAttributes(html, fieldName) {
  let result = html

  result = result.replace(/<ins([^>]*)>/g, (match, attrs) => {
    if (attrs.includes('data-diff')) return match
    const diffId = createDiffId('add', fieldName, addCounter++)
    return `<ins${attrs} data-diff="add" data-diff-id="${diffId}" data-diff-field="${fieldName}">`
  })

  result = result.replace(/<del([^>]*)>/g, (match, attrs) => {
    if (attrs.includes('data-diff')) return match
    const diffId = createDiffId('del', fieldName, delCounter++)
    return `<del${attrs} data-diff="del" data-diff-id="${diffId}" data-diff-field="${fieldName}">`
  })

  return result
}

/**
 * 提取标记 ID 列表
 */
function extractMarkerIds(html) {
  const ids = []
  const pattern = /data-diff-id="([^"]+)"/g
  let match

  while ((match = pattern.exec(html)) !== null) {
    ids.push(match[1])
  }

  return ids
}

export default {
  diffText,
  resetCounters
}