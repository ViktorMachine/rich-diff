/**
 * 自定义字段变更提取器
 */
import { hasDiffMarkers, detectChangeType, getDiffRanges } from './parser.js'

/**
 * 提取自定义字段变更
 */
export function extractCustomMarkers(diffed, last, current, markers) {
  if (!diffed.customFieldMap) return

  Object.keys(diffed.customFieldMap).forEach((field, index) => {
    if (hasDiffMarkers(diffed.customFieldMap[field])) {
      markers.push({
        id: `diff-custom-${field}`,
        type: 'custom',
        field,
        fieldLabel: field,
        position: index + 1,
        changeType: detectChangeType(diffed.customFieldMap[field]),
        oldValue: last?.customFieldMap?.[field] ? String(last.customFieldMap[field]) : '',
        newValue: current?.customFieldMap?.[field] ? String(current.customFieldMap[field]) : '',
        targetSelector: `[data-custom-field="${field}"]`,
        range: getFirstDiffRange(diffed.customFieldMap[field])
      })
    }
  })
}

/**
 * 获取第一个差异范围
 */
function getFirstDiffRange(html) {
  if (!html || typeof html !== 'string') return null
  const ranges = getDiffRanges(html)
  return ranges.length > 0 ? ranges[0].range : null
}

export default { extractCustomMarkers }