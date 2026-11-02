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

  // 遍历所有 marker，检查是否有样式变更
  for (const marker of markers) {
    if (marker.type !== 'html' && marker.type !== 'text') continue

    const field = marker.field
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