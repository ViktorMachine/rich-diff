/**
 * 样式对比核心模块
 * 负责提取 HTML 元素中的内联样式并进行对比
 */
import { parseStyle, compareStyles, hasStyleDiff } from '../utils/styleParser.js'

/**
 * 从 HTML 字符串中提取带 style 属性的元素
 * @param {string} html - HTML 字符串
 * @returns {Array} 元素列表 [{ id, path, tagName, style, outerHTML, innerHTML }]
 */
export function extractStyleElements(html) {
  if (!html || typeof html !== 'string') {
    return []
  }

  const elements = []
  const parser = new DOMParser()
  const doc = parser.parseFromString(html, 'text/html')

  const allElements = doc.querySelectorAll('[style]')

  allElements.forEach((element, index) => {
    elements.push({
      id: element.id || null,
      path: getElementPath(element),
      tagName: element.tagName.toLowerCase(),
      style: element.getAttribute('style'),
      outerHTML: element.outerHTML,
      innerHTML: element.innerHTML
    })
  })

  return elements
}

/**
 * 获取元素的 DOM 路径
 * @param {Element} element - DOM 元素
 * @returns {string} 路径字符串，如 'div > p:nth-child(2)'
 */
function getElementPath(element) {
  const path = []
  let current = element

  while (current && current.nodeType === Node.ELEMENT_NODE) {
    let selector = current.tagName.toLowerCase()

    if (current.id) {
      selector += `#${current.id}`
      path.unshift(selector)
      break
    }

    const parent = current.parentElement
    if (parent) {
      const siblings = Array.from(parent.children).filter(
        child => child.tagName === current.tagName
      )
      if (siblings.length > 1) {
        const index = siblings.indexOf(current) + 1
        selector += `:nth-child(${index})`
      }
    }

    path.unshift(selector)
    current = parent
  }

  return path.join(' > ')
}

/**
 * 匹配新旧元素对
 * @param {Array} oldElements - 旧元素列表
 * @param {Array} newElements - 新元素列表
 * @param {string} strategy - 匹配策略 'id' | 'path' | 'auto'
 * @returns {Array} 匹配结果 [{ oldElement, newElement }]
 */
export function matchElements(oldElements, newElements, strategy = 'auto') {
  const matches = []
  const matchedOld = new Set()
  const matchedNew = new Set()

  // 策略函数列表
  const strategies = strategy === 'auto'
    ? [matchById, matchByPath, matchBySimilarity]
    : strategy === 'id'
    ? [matchById]
    : strategy === 'path'
    ? [matchByPath]
    : [matchById, matchByPath]

  for (const matchFn of strategies) {
    for (const oldEl of oldElements) {
      if (matchedOld.has(oldEl)) continue

      for (const newEl of newElements) {
        if (matchedNew.has(newEl)) continue

        if (matchFn(oldEl, newEl)) {
          matches.push({ oldElement: oldEl, newElement: newEl })
          matchedOld.add(oldEl)
          matchedNew.add(newEl)
          break
        }
      }
    }
  }

  return matches
}

/**
 * 通过 ID 匹配
 */
function matchById(oldEl, newEl) {
  return oldEl.id && newEl.id && oldEl.id === newEl.id
}

/**
 * 通过路径匹配
 */
function matchByPath(oldEl, newEl) {
  return oldEl.path === newEl.path
}

/**
 * 通过内容相似度匹配（阈值 80%）
 */
function matchBySimilarity(oldEl, newEl) {
  if (oldEl.tagName !== newEl.tagName) return false

  const oldText = oldEl.innerHTML.replace(/<[^>]+>/g, '').trim()
  const newText = newEl.innerHTML.replace(/<[^>]+>/g, '').trim()

  if (!oldText || !newText) return false

  const similarity = calculateSimilarity(oldText, newText)
  return similarity >= 0.8
}

/**
 * 计算字符串相似度（简单实现）
 */
function calculateSimilarity(str1, str2) {
  if (str1 === str2) return 1

  const len1 = str1.length
  const len2 = str2.length
  const maxLen = Math.max(len1, len2)

  if (maxLen === 0) return 1

  // 使用简单的编辑距离
  const distance = levenshteinDistance(str1, str2)
  return 1 - distance / maxLen
}

/**
 * 计算编辑距离
 */
function levenshteinDistance(str1, str2) {
  const m = str1.length
  const n = str2.length
  const dp = Array(m + 1).fill(null).map(() => Array(n + 1).fill(0))

  for (let i = 0; i <= m; i++) dp[i][0] = i
  for (let j = 0; j <= n; j++) dp[0][j] = j

  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (str1[i - 1] === str2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1]
      } else {
        dp[i][j] = 1 + Math.min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1])
      }
    }
  }

  return dp[m][n]
}

/**
 * 对比两个 HTML 的样式差异
 * @param {string} oldHtml - 旧 HTML
 * @param {string} newHtml - 新 HTML
 * @param {Object} options - 配置选项
 * @returns {Object} { hasStyleDiff, styleChanges }
 */
export function diffStyle(oldHtml, newHtml, options = {}) {
  const { matchStrategy = 'auto' } = options

  if (!oldHtml || !newHtml) {
    return { hasStyleDiff: false, styleChanges: [] }
  }

  // 提取元素
  const oldElements = extractStyleElements(oldHtml)
  const newElements = extractStyleElements(newHtml)

  // 匹配元素
  const matches = matchElements(oldElements, newElements, matchStrategy)

  // 对比样式
  const styleChanges = []

  for (const { oldElement, newElement } of matches) {
    const oldStyleObj = parseStyle(oldElement.style)
    const newStyleObj = parseStyle(newElement.style)

    const diffResult = compareStyles(oldStyleObj, newStyleObj)

    if (hasStyleDiff(diffResult)) {
      styleChanges.push({
        selector: newElement.id ? `#${newElement.id}` : newElement.path,
        tagName: newElement.tagName,
        oldStyle: oldElement.style,
        newStyle: newElement.style,
        oldHtml: oldElement.outerHTML,
        newHtml: newElement.outerHTML,
        diffDetails: diffResult
      })
    }
  }

  return {
    hasStyleDiff: styleChanges.length > 0,
    styleChanges
  }
}

export default {
  diffStyle,
  extractStyleElements,
  matchElements
}