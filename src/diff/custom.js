/**
 * 自定义字段对比工具
 */
import { diffText, diffHTML } from '../adapters/index.js'

/**
 * 对比自定义字段
 * @param {Object} oldFields - 旧自定义字段
 * @param {Object} newFields - 新自定义字段
 * @param {Object} options - 配置选项
 * @returns {Object} 带差异标记的字段对象
 */
export function diffCustomFields(oldFields = {}, newFields = {}, options = {}) {
  const result = {}
  const allKeys = new Set([...Object.keys(oldFields), ...Object.keys(newFields)])

  allKeys.forEach(key => {
    const oldVal = oldFields[key] || ''
    const newVal = newFields[key] || ''

    if (oldVal === newVal) {
      result[key] = newVal
      return
    }

    // 根据选项判断对比方式
    const { fieldTypeMap = {} } = options
    const fieldType = fieldTypeMap[key]

    if (fieldType === 'file') {
      result[key] = diffFileField(oldVal, newVal)
    } else if (fieldType === 'html' || String(oldVal).includes('<') || String(newVal).includes('<')) {
      result[key] = diffHTML(String(oldVal), String(newVal), key)
    } else {
      result[key] = diffText(String(oldVal), String(newVal), key)
    }
  })

  return result
}

/**
 * 对比单个自定义字段
 * @param {string} oldVal - 旧值
 * @param {string} newVal - 新值
 * @param {string} fieldName - 字段名称
 * @param {string} fieldType - 字段类型
 * @returns {Object} { html, useShadowDOM, markers }
 */
export function diffCustomField(oldVal, newVal, fieldName, fieldType = 'text') {
  if (oldVal === newVal) {
    return { html: newVal, useShadowDOM: false, markers: [] }
  }

  const oldStr = String(oldVal || '')
  const newStr = String(newVal || '')

  if (fieldType === 'file') {
    return { html: diffFileField(oldStr, newStr), useShadowDOM: false, markers: [] }
  }

  if (fieldType === 'html' || oldStr.includes('<') || newStr.includes('<')) {
    return diffHTML(oldStr, newStr, fieldName)
  }

  return diffText(oldStr, newStr, fieldName)
}

/**
 * 对比文件字段内容
 * @param {string} oldFile - 旧文件名
 * @param {string} newFile - 新文件名
 * @returns {string} 带差异标记的字符串
 */
function diffFileField(oldFile, newFile) {
  if (newFile) {
    if (newFile !== oldFile) {
      return `<ins style="color: #1878E8;" data-diff="add" data-diff-field="file">${newFile}</ins>`
    }
    return newFile
  }

  if (oldFile) {
    return `<del style="color: red;" data-diff="del" data-diff-field="file">${oldFile}</del>`
  }

  return ''
}

export default {
  diffCustomFields,
  diffCustomField
}