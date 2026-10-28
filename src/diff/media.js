/**
 * 媒体资源对比工具
 */
import { ChangeTypes } from '../utils/constants.js'

/**
 * 对比图片/视频列表
 * @param {Array} oldList - 旧列表
 * @param {Array} newList - 新列表
 * @param {string} idField - 标识字段名
 * @returns {Object} { newList, oldList }
 */
export function diffMediaList(oldList = [], newList = [], idField = 'fileValue') {
  const processedNewList = newList.map(newItem => {
    const oldItem = oldList.find(item => item[idField] === newItem[idField])

    if (!oldItem) {
      return { ...newItem, diffType: ChangeTypes.ADD }
    }

    const hasChange = checkMediaItemChange(oldItem, newItem)
    if (hasChange) {
      return { ...newItem, diffType: ChangeTypes.MODIFY }
    }

    return { ...newItem, diffType: ChangeTypes.SAME }
  })

  // 找出被删除的项
  oldList.forEach(oldItem => {
    const newItem = newList.find(item => item[idField] === oldItem[idField])
    if (!newItem) {
      processedNewList.push({ ...oldItem, diffType: ChangeTypes.DEL })
    }
  })

  return {
    newList: processedNewList,
    oldList
  }
}

/**
 * 检查媒体项是否有变化
 * @param {Object} oldItem - 旧媒体项
 * @param {Object} newItem - 新媒体项
 * @returns {boolean}
 */
function checkMediaItemChange(oldItem, newItem) {
  const compareFields = ['title', 'describes', 'type', 'coverAddress']
  return compareFields.some(field => oldItem[field] !== newItem[field])
}

/**
 * 对比文档文件
 * @param {Object} oldFile - 旧文档
 * @param {Object} newFile - 新文档
 * @returns {Object} 带差异类型的文档信息
 */
export function diffDocFile(oldFile, newFile) {
  if (!oldFile && !newFile) {
    return { diffType: 'none', newFile: null, oldFile: null }
  }

  if (!oldFile) {
    return { diffType: ChangeTypes.ADD, newFile: { ...newFile, diffType: ChangeTypes.ADD }, oldFile: null }
  }

  if (!newFile) {
    return { diffType: ChangeTypes.DEL, newFile: null, oldFile }
  }

  if (oldFile.fileId === newFile.fileId) {
    return { diffType: ChangeTypes.SAME, newFile: { ...newFile, diffType: ChangeTypes.SAME }, oldFile }
  }

  return { diffType: ChangeTypes.MODIFY, newFile: { ...newFile, diffType: ChangeTypes.MODIFY }, oldFile }
}

/**
 * 解析文档文件信息
 * @param {string} content - 文档内容（JSON 字符串）
 * @returns {Object|null}
 */
export function parseDocFile(content) {
  if (!content) return null

  try {
    const docInfo = JSON.parse(content)
    if (docInfo && docInfo.fileId) {
      return { fileId: docInfo.fileId, fileName: docInfo.fileName || '' }
    }
  } catch (e) {
    // 不是 JSON 格式
  }

  return null
}

/**
 * 提取媒体项的具体变更
 * @param {Object} newItem - 新媒体项
 * @param {Object} oldItem - 旧媒体项
 * @returns {Array} 变更列表
 */
export function extractMediaChanges(newItem, oldItem) {
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

export default {
  diffMediaList,
  diffDocFile,
  parseDocFile,
  extractMediaChanges
}