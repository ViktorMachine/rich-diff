/**
 * HTML 内容变更提取器
 */
import { DefaultConfig } from '../utils/constants.js'
import { hasDiffMarkers } from './parser.js'

const FIELD_LABELS = DefaultConfig.fieldLabels
const FIELD_STRATEGIES = {
  longText: ['content']
}

/**
 * 提取 HTML 内容变更
 */
export function extractHTMLMarkers(diffed, last, current, markers) {
  const htmlFields = FIELD_STRATEGIES.longText

  htmlFields.forEach(field => {
    if (diffed[field] && hasDiffMarkers(diffed[field])) {
      const subMarkers = extractDiffMarkersFromHTML(diffed[field], field)
      subMarkers.forEach(m => markers.push(m))
    }
  })
}

/**
 * 从差异 HTML 中提取细粒度的差异标记
 */
function extractDiffMarkersFromHTML(html, field) {
  if (!html || typeof html !== 'string') return []

  const tags = collectDiffTags(html)
  if (tags.length === 0) return []

  tags.sort((a, b) => a.range[0] - b.range[0])

  const groups = mergeTagsIntoGroups(tags, html)

  return groups.map((group, idx) => {
    const targetSelector = group.diffIds && group.diffIds.length > 0
      ? `[data-diff-id="${group.diffIds[0]}"]`
      : `[data-diff-field="${field}"]`

    return {
      id: `diff-html-${field}-${idx}`,
      type: 'html',
      field,
      fieldLabel: FIELD_LABELS[field] || field,
      position: idx + 1,
      changeType: group.changeType,
      oldValue: group.oldValue ? group.oldValue.substring(0, 200) : '',
      newValue: group.newValue ? group.newValue.substring(0, 200) : '',
      targetSelector,
      range: group.range,
      diffIds: group.diffIds
    }
  })
}

/**
 * 收集 HTML 中所有差异标签
 */
function collectDiffTags(html) {
  const pattern = /<(ins|del|difftext)([^>]*)>([\s\S]*?)<\/\1>/gi
  const tags = []
  let match

  while ((match = pattern.exec(html)) !== null) {
    const attrsStr = match[2]
    const idMatch = attrsStr.match(/data-diff-id="([^"]+)"/)
    const typeMatch = attrsStr.match(/data-diff="([^"]+)"/)
    const diffId = idMatch ? idMatch[1] : null
    const diffType = typeMatch ? typeMatch[1] : null

    tags.push({
      type: diffType || (match[1].toLowerCase() === 'ins' ? 'add' : 'del'),
      attrs: attrsStr,
      content: match[3],
      range: [match.index, match.index + match[0].length],
      diffId
    })
  }

  return tags
}

/**
 * 合并相邻标签为组
 */
function mergeTagsIntoGroups(tags, html) {
  const groups = []
  let i = 0

  while (i < tags.length) {
    const current = tags[i]
    const group = {
      type: current.type,
      range: [...current.range],
      oldValue: current.type === 'del' ? current.content : '',
      newValue: current.type === 'add' || current.type === 'ins' ? current.content : '',
      changeType: null,
      diffIds: current.diffId ? [current.diffId] : []
    }

    while (i + 1 < tags.length) {
      const next = tags[i + 1]
      const gap = html.substring(group.range[1], next.range[0])

      if (!/^\s*$/.test(gap)) break

      if (group.type === 'del' && (next.type === 'add' || next.type === 'ins')) {
        group.changeType = 'modify'
        group.newValue = next.content
        group.range[1] = next.range[1]
        group.type = 'mod'
        if (next.diffId) group.diffIds.push(next.diffId)
        i++
        break
      }

      if (group.type === next.type) {
        if (next.type === 'del') {
          group.oldValue += next.content
        } else {
          group.newValue += next.content
        }
        group.range[1] = next.range[1]
        if (next.diffId) group.diffIds.push(next.diffId)
        i++
        continue
      }

      break
    }

    if (!group.changeType) {
      group.changeType = group.type === 'del' ? 'del' : 'add'
    }

    groups.push(group)
    i++
  }

  return groups
}

export default { extractHTMLMarkers }