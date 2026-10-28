/**
 * 字段对比工具
 */
import { diffHTML, diffText } from '../adapters/index.js'

/**
 * 对比单个字段
 * @param {string} oldVal - 旧值
 * @param {string} newVal - 新值
 * @param {string} fieldName - 字段名称
 * @param {Object} options - 配置选项
 * @returns {Object} { html, useShadowDOM, markers }
 */
export function diffField(oldVal, newVal, fieldName, options = {}) {
  const { mayContainHtml = false } = options

  // 快速相等判断
  if (oldVal === newVal) {
    return { html: newVal, useShadowDOM: false, markers: [] }
  }

  const oldStr = String(oldVal || '')
  const newStr = String(newVal || '')

  // 判断是否包含 HTML
  if (mayContainHtml && (oldStr.includes('<') || newStr.includes('<'))) {
    return diffHTML(oldStr, newStr, fieldName)
  }

  return diffText(oldStr, newStr, fieldName)
}

/**
 * 对比优先级字段
 * @param {number} oldPriority - 旧优先级
 * @param {number} newPriority - 新优先级
 * @returns {Object} { html, useShadowDOM, markers }
 */
export function diffPriority(oldPriority, newPriority) {
  const priorityMap = { 0: '低', 1: '高' }
  const oldText = priorityMap[oldPriority] ?? '未设置'
  const newText = priorityMap[newPriority] ?? '未设置'
  return diffText(oldText, newText, 'priority')
}

/**
 * 批量对比固定字段
 * @param {Object} current - 当前版本数据
 * @param {Object} last - 历史版本数据
 * @param {string[]} fields - 要对比的字段列表
 * @returns {Object} { diffed, hasDiff }
 */
export function diffFixedFields(current, last, fields = []) {
  const defaultFields = ['title', 'subtitle', 'digest', 'task', 'siteName', 'channelName']
  const targetFields = fields.length > 0 ? fields : defaultFields

  const diffed = {}
  let hasDiff = false

  targetFields.forEach(field => {
    if (current[field] !== last[field]) {
      const mayContainHtml = field === 'title'
      diffed[field] = diffField(
        String(last[field] || ''),
        String(current[field] || ''),
        field,
        { mayContainHtml }
      )
      hasDiff = true
    }
  })

  // 对比优先级
  if (current.priority !== last.priority) {
    diffed.priority = diffPriority(last.priority, current.priority)
    hasDiff = true
  }

  return { diffed, hasDiff }
}

export default {
  diffField,
  diffPriority,
  diffFixedFields
}