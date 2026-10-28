/**
 * 媒体资源变更提取器
 */
import { hasDiffMarkers } from './parser.js'

/**
 * 提取媒体资源变更
 */
export function extractMediaMarkers(diffed, last, markers) {
  if (!diffed.cmsFileList) return

  const mediaList = Array.isArray(diffed.cmsFileList) ? diffed.cmsFileList : []
  const oldMediaList = last?.cmsFileList || []

  mediaList.forEach((item, index) => {
    if (item.diffType && item.diffType !== 'same') {
      const oldItem = oldMediaList.find(m => m.fileValue === item.fileValue)
      let oldValue = ''
      let newValue = ''

      if (item.diffType === 'add') {
        newValue = item.title || item.describes || ''
      } else if (item.diffType === 'del') {
        oldValue = oldItem?.title || oldItem?.describes || ''
      } else {
        oldValue = oldItem?.title || oldItem?.describes || ''
        newValue = item.title || item.describes || ''
      }

      markers.push({
        id: `diff-media-${index}`,
        type: 'media',
        field: 'cmsFileList',
        fieldLabel: '媒体资源',
        position: index + 1,
        changeType: item.diffType === 'add' ? 'add' : item.diffType === 'alter' ? 'modify' : 'del',
        mediaType: item.type || 'image',
        mediaIndex: index,
        targetSelector: `[data-media-index="${index}"]`,
        oldValue,
        newValue,
        changes: extractMediaChanges(item, oldItem)
      })
    }
  })
}

/**
 * 提取媒体项的具体变更
 */
function extractMediaChanges(newItem, oldItem) {
  const changes = []
  const compareFields = ['title', 'describes', 'coverAddress']

  compareFields.forEach(field => {
    if (oldItem && newItem[field] !== oldItem[field]) {
      changes.push({
        field,
        oldValue: oldItem[field] || '',
        newValue: newItem[field] || ''
      })
    }
  })

  return changes
}

export default { extractMediaMarkers }