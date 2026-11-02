/**
 * 样式变更提取器
 * 从 diff 结果中提取样式变更，生成 styleChanges 数据
 */
import { diffStyle } from '../diff/style.js'

/**
 * 提取样式变更
 * @param {Object} diffed - 差异后的数据
 * @param {Object} last - 旧数据
 * @param {Object} current - 新数据
 * @param {Array} markers - 现有 marker 列表（会被修改）
 * @param {Object} options - 配置选项
 */
export function extractStyleMarkers(diffed, last, current, markers, options = {}) {
  const { detectStyle = true, styleDiffConfig = {} } = options

  if (!detectStyle) return

  // 收集已处理的字段
  const processedFields = new Set()

  // 1. 遍历现有 marker，检查是否有样式变更
  for (const marker of markers) {
    // 支持 field、html、text 类型的 marker
    if (marker.type !== 'field' && marker.type !== 'html' && marker.type !== 'text') continue

    const field = marker.field
    processedFields.add(field)

    const oldContent = last ? last[field] : ''
    const newContent = current ? current[field] : ''

    if (!oldContent || !newContent) continue

    // 对比样式
    const styleResult = diffStyle(oldContent, newContent, styleDiffConfig)

    if (styleResult.hasStyleDiff) {
      // 将样式变更附加到现有 marker
      marker.styleChanges = {
        hasStyleDiff: true,
        elements: styleResult.styleChanges.map(change => ({
          selector: change.selector,
          oldHtml: change.oldHtml,
          newHtml: change.newHtml
        })),
        diffDetails: mergeDiffDetails(styleResult.styleChanges)
      }
    }
  }

  // 2. 检查未处理的字段（纯样式变更，没有内容变更）
  const allFields = new Set([
    ...Object.keys(diffed || {}),
    ...Object.keys(last || {}),
    ...Object.keys(current || {})
  ])

  for (const field of allFields) {
    if (processedFields.has(field)) continue
    if (field.startsWith('_')) continue

    const oldContent = last ? last[field] : ''
    const newContent = current ? current[field] : ''

    if (!oldContent || !newContent) continue
    if (typeof oldContent !== 'string' || typeof newContent !== 'string') continue

    // 检查是否可能是 HTML 内容
    if (!looksLikeHtml(oldContent) && !looksLikeHtml(newContent)) continue

    // 对比样式
    const styleResult = diffStyle(oldContent, newContent, styleDiffConfig)

    if (styleResult.hasStyleDiff) {
      // 创建独立的样式变更 marker
      markers.push({
        id: `diff-style-${field}-0`,
        type: 'style',
        field,
        fieldLabel: field,
        position: markers.length + 1,
        changeType: 'modify',
        oldValue: '',
        newValue: '',
        styleChanges: {
          hasStyleDiff: true,
          elements: styleResult.styleChanges.map(change => ({
            selector: change.selector,
            oldHtml: change.oldHtml,
            newHtml: change.newHtml
          })),
          diffDetails: mergeDiffDetails(styleResult.styleChanges)
        }
      })
    }
  }
}

/**
 * 检查字符串是否看起来像 HTML
 * @param {string} str - 字符串
 * @returns {boolean}
 */
function looksLikeHtml(str) {
  if (!str || typeof str !== 'string') return false
  return /<[a-z][^>]*>/i.test(str)
}

/**
 * 合并多个元素的差异详情
 * @param {Array} styleChanges - 样式变更列表
 * @returns {Object} 合并后的差异详情
 */
function mergeDiffDetails(styleChanges) {
  const added = []
  const removed = []
  const changed = []

  for (const change of styleChanges) {
    const details = change.diffDetails

    // 去重合并
    for (const item of details.added) {
      if (!added.find(a => a.property === item.property)) {
        added.push(item)
      }
    }

    for (const item of details.removed) {
      if (!removed.find(r => r.property === item.property)) {
        removed.push(item)
      }
    }

    for (const item of details.changed) {
      if (!changed.find(c => c.property === item.property)) {
        changed.push(item)
      }
    }
  }

  return { added, removed, changed }
}

export default {
  extractStyleMarkers
}