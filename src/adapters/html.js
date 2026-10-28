/**
 * HTML 对比适配器
 * 支持 ShadowDOM 降级兼容
 */
import { getEngine, getEngineName } from '../engines/index.js'
import { createDiffId, supportsShadowDOM, extractPlainText } from '../utils/dom.js'
import { DefaultConfig } from '../utils/constants.js'
import { resetCounters as resetTextCounters } from './text.js'

// 计数器
let addCounter = 0
let delCounter = 0

// ShadowDOM 支持状态
let shadowDOMSupported = null

/**
 * 重置计数器
 */
export function resetCounters() {
  addCounter = 0
  delCounter = 0
  resetTextCounters()
}

/**
 * 对比 HTML 内容
 * @param {string} oldHtml - 旧 HTML
 * @param {string} newHtml - 新 HTML
 * @param {string} fieldName - 字段名称
 * @returns {Object} { html, useShadowDOM, markers }
 */
export function diffHTML(oldHtml = '', newHtml = '', fieldName = 'content') {
  resetCounters()

  // 检测 ShadowDOM 支持性
  if (shadowDOMSupported === null) {
    shadowDOMSupported = supportsShadowDOM()
  }

  // 快速判断
  if (oldHtml === newHtml) {
    return createResult(newHtml, false, [])
  }

  if (!oldHtml) {
    return wrapWithInsertTag(newHtml, fieldName)
  }

  if (!newHtml) {
    return createResult('', false, [])
  }

  const engineName = getEngineName()

  try {
    let html
    switch (engineName) {
      case 'htmldiff':
        html = adaptHtmlDiffEngine(oldHtml, newHtml, fieldName)
        break
      case 'diffdom':
        html = adaptDiffDomEngine(oldHtml, newHtml, fieldName)
        break
      default:
        html = adaptHtmlDiffEngine(oldHtml, newHtml, fieldName)
    }

    // 过滤仅样式变化
    html = filterStyleOnlyChanges(html)

    // 如果支持 ShadowDOM，转换标签
    if (shadowDOMSupported) {
      html = convertToShadowDOM(html)
    }

    const markers = extractMarkerIds(html)
    return createResult(html, shadowDOMSupported, markers)

  } catch (error) {
    console.warn(`[rich-diff] ${engineName} 适配器对比失败:`, error)
    return createResult(newHtml, false, [])
  }
}

/**
 * 创建返回结果
 */
function createResult(html, useShadowDOM, markers) {
  return { html, useShadowDOM, markers }
}

/**
 * 适配 htmldiff 引擎输出
 */
function adaptHtmlDiffEngine(oldHtml, newHtml, fieldName) {
  const engine = getEngine()
  let result = engine.diffHTML(oldHtml, newHtml)

  // 注入 data-diff 属性
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
 * 适配 diffdom 引擎输出
 */
function adaptDiffDomEngine(oldHtml, newHtml, fieldName) {
  const engine = getEngine()
  const { oldNode, diffs } = engine.diffHTML(oldHtml, newHtml)

  if (!diffs || diffs.length === 0) {
    return oldNode ? oldNode.innerHTML : newHtml
  }

  // 处理特殊情况
  if (diffs.length === 1 && diffs[0].action === 'fullReplace') {
    return wrapWithInsertTag(diffs[0].newHtml || newHtml, fieldName).html
  }
  if (diffs.length === 1 && diffs[0].action === 'fullRemove') {
    return ''
  }

  // 应用差异
  const markedDoc = oldNode.cloneNode(true)
  const counters = { add: addCounter, del: delCounter }
  const sortedDiffs = [...diffs].reverse()

  for (const diff of sortedDiffs) {
    engine.applyDiff(markedDoc, diff, fieldName, counters)
  }

  addCounter = counters.add
  delCounter = counters.del

  return markedDoc.innerHTML
}

/**
 * 用 ins 标签包裹内容
 */
function wrapWithInsertTag(html, fieldName) {
  const diffId = createDiffId('add', fieldName, addCounter++)
  const result = `<ins style="color: ${DefaultConfig.diffStyles.add.color};" data-diff="add" data-diff-id="${diffId}" data-diff-field="${fieldName}">${html}</ins>`
  return createResult(result, false, [diffId])
}

/**
 * 过滤仅样式变化的差异标记
 */
function filterStyleOnlyChanges(html) {
  const pattern = /<del[^>]*class="[^"]*diffmod[^"]*"[^>]*>([\s\S]*?)<\/del>\s*<ins[^>]*class="[^"]*diffmod[^"]*"[^>]*>([\s\S]*?)<\/ins>/gi

  let result = html
  const matches = []
  let match

  while ((match = pattern.exec(html)) !== null) {
    matches.push({
      fullMatch: match[0],
      delContent: match[1],
      insContent: match[2],
      index: match.index
    })
  }

  for (let i = matches.length - 1; i >= 0; i--) {
    const m = matches[i]
    if (isStyleOnlyChange(m.delContent, m.insContent)) {
      result = result.substring(0, m.index) + m.insContent + result.substring(m.index + m.fullMatch.length)
    }
  }

  return result
}

/**
 * 判断是否仅为样式变化
 */
function isStyleOnlyChange(oldHtml, newHtml) {
  const oldText = extractPlainText(oldHtml)
  const newText = extractPlainText(newHtml)
  if (oldText !== newText) return false

  const oldTag = oldHtml.match(/^<(\w+)/)
  const newTag = newHtml.match(/^<(\w+)/)
  if (!oldTag || !newTag) return false

  return oldTag[1].toLowerCase() === newTag[1].toLowerCase()
}

/**
 * 转换为 ShadowDOM 格式
 */
function convertToShadowDOM(html) {
  let result = html

  result = result.replace(/<ins([^>]*)>([\s\S]*?)<\/ins>/gi, (match, attrs, content) => {
    return `<difftext${attrs}>${content}</difftext>`
  })

  result = result.replace(/<del([^>]*)>([\s\S]*?)<\/del>/gi, (match, attrs, content) => {
    return `<difftext${attrs}>${content}</difftext>`
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
  diffHTML,
  resetCounters
}