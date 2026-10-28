/**
 * 工具层入口
 */
import { diffField, diffPriority, diffFixedFields } from './field.js'
import { diffMediaList, diffDocFile, parseDocFile, extractMediaChanges } from './media.js'
import { diffCustomFields, diffCustomField } from './custom.js'
import { diffHTML } from '../adapters/index.js'

export {
  diffField,
  diffPriority,
  diffFixedFields,
  diffMediaList,
  diffDocFile,
  parseDocFile,
  extractMediaChanges,
  diffCustomFields,
  diffCustomField
}

/**
 * 计算文章所有字段的差异
 * @param {Object} current - 当前版本数据
 * @param {Object} last - 历史版本数据
 * @param {Object} options - 配置选项
 * @returns {Object} { diffed, last: lastCopy, hasDiff }
 */
export function computeArticleDiff(current, last, options = {}) {
  if (!last) {
    return { diffed: { ...current }, last: null, hasDiff: false }
  }

  const { siteEssayType = 0 } = options

  // 深拷贝避免污染原数据
  const diffed = JSON.parse(JSON.stringify(current))
  const lastCopy = JSON.parse(JSON.stringify(last))

  let hasDiff = false

  // 1. 固定字段对比
  const fixedResult = diffFixedFields(current, last)
  Object.keys(fixedResult.diffed).forEach(key => {
    diffed[key] = fixedResult.diffed[key].html
  })
  hasDiff = hasDiff || fixedResult.hasDiff

  // 2. 根据文章类型对比内容
  switch (siteEssayType) {
    case 0: // 文本文章
      if (current.content !== last.content) {
        const result = diffHTML(last.content || '', current.content || '', 'content')
        diffed.content = result.html
        hasDiff = true
      }
      break

    case 1: // 图集文章
    case 2: // 视频文章
      if (current.cmsFileList || last.cmsFileList) {
        const { newList, oldList } = diffMediaList(last.cmsFileList, current.cmsFileList)
        diffed.cmsFileList = newList
        lastCopy.cmsFileList = oldList
        if (newList.some(item => item.diffType !== 'same')) {
          hasDiff = true
        }
      }
      break

    case 3: // 链接文章
      if (current.content !== last.content) {
        const result = diffHTML(last.content || '', current.content || '', 'content')
        diffed.content = result.html
        hasDiff = true
      }
      break

    case 4: // 文档文章
      const docDiff = diffDocFile(parseDocFile(last.content), parseDocFile(current.content))
      if (docDiff.diffType !== 'same') {
        diffed._docFile = docDiff.newFile
        lastCopy._docFile = docDiff.oldFile
        hasDiff = true
      }
      break
  }

  // 3. 自定义字段对比
  if (current.customFieldMap && last.customFieldMap) {
    const customResult = diffCustomFields(last.customFieldMap, current.customFieldMap)
    diffed.customFieldMap = customResult
    hasDiff = true
  }

  return { diffed, last: lastCopy, hasDiff }
}

export default {
  computeArticleDiff,
  diffField,
  diffMediaList,
  diffCustomFields
}