/**
 * CSS 样式解析工具
 * 用于解析和对比内联样式
 */

/**
 * 解析样式字符串为键值对对象
 * @param {string} styleString - 样式字符串，如 'color: red; font-size: 14px'
 * @returns {Object} 键值对对象 { color: 'red', 'font-size': '14px' }
 */
export function parseStyle(styleString) {
  if (!styleString || typeof styleString !== 'string') {
    return {}
  }

  const result = {}
  const declarations = styleString.split(';')

  for (const declaration of declarations) {
    const trimmed = declaration.trim()
    if (!trimmed) continue

    // 处理带引号的值（可能包含分号）
    const colonIndex = trimmed.indexOf(':')
    if (colonIndex === -1) continue

    const property = trimmed.substring(0, colonIndex).trim().toLowerCase()
    const value = trimmed.substring(colonIndex + 1).trim()

    if (property && value) {
      result[property] = value
    }
  }

  return result
}

/**
 * 对比两个样式对象，生成差异详情
 * @param {Object} oldStyle - 旧样式对象
 * @param {Object} newStyle - 新样式对象
 * @returns {Object} { added, removed, changed }
 */
export function compareStyles(oldStyle = {}, newStyle = {}) {
  const added = []
  const removed = []
  const changed = []

  const oldKeys = Object.keys(oldStyle)
  const newKeys = Object.keys(newStyle)

  // 检查新增和修改
  for (const key of newKeys) {
    if (!(key in oldStyle)) {
      added.push({ property: key, value: newStyle[key] })
    } else if (oldStyle[key] !== newStyle[key]) {
      changed.push({
        property: key,
        oldValue: oldStyle[key],
        newValue: newStyle[key]
      })
    }
  }

  // 检查删除
  for (const key of oldKeys) {
    if (!(key in newStyle)) {
      removed.push({ property: key, value: oldStyle[key] })
    }
  }

  return { added, removed, changed }
}

/**
 * 判断是否有样式差异
 * @param {Object} diffResult - compareStyles 的返回值
 * @returns {boolean}
 */
export function hasStyleDiff(diffResult) {
  return diffResult.added.length > 0 ||
         diffResult.removed.length > 0 ||
         diffResult.changed.length > 0
}

export default {
  parseStyle,
  compareStyles,
  hasStyleDiff
}