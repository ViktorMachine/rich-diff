/**
 * 标记生成器
 * 从差异结果中提取变更标记
 */
import { DefaultConfig } from '../utils/constants.js'
import { extractTextMarkers } from './textExtractor.js'
import { extractHTMLMarkers } from './htmlExtractor.js'
import { extractMediaMarkers } from './mediaExtractor.js'
import { extractCustomMarkers } from './customExtractor.js'

const GROUP_PRIORITY = DefaultConfig.groupPriority

/**
 * 生成变更标记列表
 * @param {Object} diffResult - 差异结果 { diffed, last, current }
 * @param {Object} options - 配置选项
 * @returns {Marker[]}
 */
export function generateMarkers(diffResult, options = {}) {
  if (!diffResult || !diffResult.diffed) {
    return []
  }

  const markers = []
  const { diffed, last, current } = diffResult

  // 1. 提取基础字段变更
  extractTextMarkers(diffed, last, current, markers)

  // 2. 提取 HTML 内容变更
  extractHTMLMarkers(diffed, last, current, markers)

  // 3. 提取媒体资源变更
  extractMediaMarkers(diffed, last, markers)

  // 4. 提取自定义字段变更
  extractCustomMarkers(diffed, last, current, markers)

  // 排序
  return sortMarkers(markers)
}

/**
 * 排序标记
 */
export function sortMarkers(markers) {
  return markers.sort((a, b) => {
    const priorityDiff = (GROUP_PRIORITY[a.type] || 99) - (GROUP_PRIORITY[b.type] || 99)
    if (priorityDiff !== 0) return priorityDiff
    return (a.position || 99) - (b.position || 99)
  })
}

export default {
  generateMarkers,
  sortMarkers
}