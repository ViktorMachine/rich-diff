/**
 * 文本字段变更提取器
 */
import { DefaultConfig } from '../utils/constants.js'
import { hasDiffMarkers, detectChangeType, getDiffRanges, extractDiffMarkers } from './parser.js'

const FIELD_LABELS = DefaultConfig.fieldLabels
const FIELD_STRATEGIES = {
  shortText: ['title', 'subtitle', 'task', 'siteName', 'channelName'],
  mediumText: ['digest']
}

/**
 * 提取基础文本字段变更
 */
export function extractTextMarkers(diffed, last, current, markers) {
  const allTextFields = [...FIELD_STRATEGIES.shortText, ...FIELD_STRATEGIES.mediumText]

  allTextFields.forEach((field, index) => {
    if (diffed[field] && hasDiffMarkers(diffed[field])) {
      const changeType = detectChangeType(diffed[field])
      const { oldValue, newValue } = extractDiffContent(diffed[field])

      markers.push({
        id: `diff-text-${field}`,
        type: 'text',
        field,
        fieldLabel: FIELD_LABELS[field] || field,
        position: index + 1,
        changeType,
        oldValue,
        newValue,
        targetSelector: `[data-diff-field="${field}"]`,
        range: getFirstDiffRange(diffed[field])
      })
    }
  })
}

/**
 * 从差异内容中提取旧值和新值
 */
function extractDiffContent(html) {
  const { insTags, delTags } = extractDiffMarkers(html)

  let oldValue = ''
  let newValue = ''

  if (insTags.length > 0) {
    newValue = insTags.map(tag => tag.text).join(' ')
  }
  if (delTags.length > 0) {
    oldValue = delTags.map(tag => tag.text).join(' ')
  }

  return { oldValue, newValue }
}

/**
 * 获取第一个差异范围
 */
function getFirstDiffRange(html) {
  if (!html || typeof html !== 'string') return null
  const ranges = getDiffRanges(html)
  return ranges.length > 0 ? ranges[0].range : null
}

export default { extractTextMarkers }