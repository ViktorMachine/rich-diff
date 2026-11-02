/**
 * 字段对比工具
 */
import { diffHTML, diffText } from '../adapters/index.js'

/**
 * 对比单个字段
 * @param {string|Array} oldVal - 旧值
 * @param {string|Array} newVal - 新值
 * @param {string} fieldName - 字段名称
 * @param {Object} options - 配置选项
 * @param {string} options.type - 字段类型: 'normal' | 'dynamic' | 'file' | 'files' | 'image' | 'images' | 'video' | 'videos'
 * @param {boolean} options.mayContainHtml - 是否可能包含 HTML
 * @returns {Object} { html, useShadowDOM, markers, hasDiff }
 */
export function diffField(oldVal, newVal, fieldName, options = {}) {
  const { type = 'normal', mayContainHtml = false } = options

  // 根据 type 选择对比方式
  if (type === 'dynamic') {
    return diffDynamicField(oldVal, newVal, fieldName)
  }

  // 资源类型：file, image, video（单数）
  if (type === 'file' || type === 'image' || type === 'video') {
    return diffResourceField(oldVal, newVal, fieldName, type)
  }

  // 资源类型：files, images, videos（复数）
  if (type === 'files' || type === 'images' || type === 'videos') {
    return diffResourcesField(oldVal, newVal, fieldName, type)
  }

  // normal 类型：快速相等判断
  if (oldVal === newVal) {
    return { html: newVal, useShadowDOM: false, markers: [], hasDiff: false }
  }

  const oldStr = String(oldVal || '')
  const newStr = String(newVal || '')

  // 判断是否包含 HTML
  if (mayContainHtml && (oldStr.includes('<') || newStr.includes('<'))) {
    return diffHTML(oldStr, newStr, fieldName)
  }

  return diffText(oldStr, newStr, fieldName)
}

/**
 * 对比单个资源字段
 * @param {string} oldVal - 旧值（资源地址）
 * @param {string} newVal - 新值（资源地址）
 * @param {string} fieldName - 字段名称
 * @param {string} resourceType - 资源类型: 'file' | 'image' | 'video'
 * @returns {Object} { html, useShadowDOM, markers, hasDiff }
 */
function diffResourceField(oldVal, newVal, fieldName, resourceType) {
  const oldUrl = String(oldVal || '')
  const newUrl = String(newVal || '')

  // 快速判断
  if (oldUrl === newUrl) {
    return {
      html: newUrl,
      useShadowDOM: false,
      markers: [],
      hasDiff: false,
      resourceType,
      oldResource: oldUrl ? { url: oldUrl, diffType: 'same' } : null,
      newResource: newUrl ? { url: newUrl, diffType: 'same' } : null
    }
  }

  const result = {
    html: newUrl,
    useShadowDOM: false,
    markers: [],
    hasDiff: true,
    resourceType,
    oldResource: null,
    newResource: null
  }

  if (!oldUrl && newUrl) {
    // 新增资源
    result.newResource = { url: newUrl, diffType: 'add' }
    result.html = wrapWithDiffTag(newUrl, 'add', fieldName)
  } else if (oldUrl && !newUrl) {
    // 删除资源
    result.oldResource = { url: oldUrl, diffType: 'del' }
    result.html = wrapWithDiffTag(oldUrl, 'del', fieldName)
  } else {
    // 资源变更
    result.oldResource = { url: oldUrl, diffType: 'del' }
    result.newResource = { url: newUrl, diffType: 'add' }
    const diffResult = diffText(oldUrl, newUrl, fieldName)
    result.html = diffResult.html
    result.markers = diffResult.markers
  }

  return result
}

/**
 * 对比资源数组字段
 * @param {Array|string} oldVal - 旧值（资源地址数组）
 * @param {Array|string} newVal - 新值（资源地址数组）
 * @param {string} fieldName - 字段名称
 * @param {string} resourceType - 资源类型: 'files' | 'images' | 'videos'
 * @returns {Object} { html, useShadowDOM, markers, hasDiff }
 */
function diffResourcesField(oldVal, newVal, fieldName, resourceType) {
  const oldArr = normalizeArray(oldVal)
  const newArr = normalizeArray(newVal)

  // 快速判断
  if (arraysEqual(oldArr, newArr)) {
    return {
      html: newArr,
      useShadowDOM: false,
      markers: [],
      hasDiff: false,
      resourceType,
      oldResources: oldArr.map(url => ({ url, diffType: 'same' })),
      newResources: newArr.map(url => ({ url, diffType: 'same' }))
    }
  }

  return diffResourceArrays(oldArr, newArr, fieldName, resourceType)
}

/**
 * 标准化数组
 * @param {Array|string} val - 输入值
 * @returns {Array} 标准化后的数组
 */
function normalizeArray(val) {
  if (!val) return []
  if (typeof val === 'string') {
    try {
      const parsed = JSON.parse(val)
      return Array.isArray(parsed) ? parsed : []
    } catch {
      // 如果不是 JSON，尝试按逗号分割
      return val.split(',').map(s => s.trim()).filter(Boolean)
    }
  }
  return Array.isArray(val) ? val : []
}

/**
 * 判断两个数组是否相等
 * @param {Array} a - 数组 a
 * @param {Array} b - 数组 b
 * @returns {boolean}
 */
function arraysEqual(a, b) {
  if (a.length !== b.length) return false
  for (let i = 0; i < a.length; i++) {
    if (a[i] !== b[i]) return false
  }
  return true
}

/**
 * 对比资源数组
 * @param {Array} oldArr - 旧数组
 * @param {Array} newArr - 新数组
 * @param {string} fieldName - 字段名称
 * @param {string} resourceType - 资源类型
 * @returns {Object} { html, useShadowDOM, markers, hasDiff }
 */
function diffResourceArrays(oldArr, newArr, fieldName, resourceType) {
  const result = []
  const markers = []

  // 建立索引映射
  const oldSet = new Set(oldArr)
  const newSet = new Set(newArr)

  // 处理旧资源
  const oldResources = oldArr.map(url => {
    const exists = newSet.has(url)
    return {
      url,
      diffType: exists ? 'same' : 'del'
    }
  })

  // 处理新资源
  const newResources = newArr.map(url => {
    const exists = oldSet.has(url)
    return {
      url,
      diffType: exists ? 'same' : 'add'
    }
  })

  // 生成差异结果
  const allUrls = new Set([...oldArr, ...newArr])
  let hasDiff = false

  allUrls.forEach(url => {
    const inOld = oldSet.has(url)
    const inNew = newSet.has(url)

    const item = { url, diffType: 'same', diffHtml: '' }

    if (!inOld && inNew) {
      item.diffType = 'add'
      item.diffHtml = wrapWithDiffTag(url, 'add', fieldName)
      hasDiff = true
    } else if (inOld && !inNew) {
      item.diffType = 'del'
      item.diffHtml = wrapWithDiffTag(url, 'del', fieldName)
      hasDiff = true
    } else {
      item.diffHtml = url
    }

    result.push(item)
  })

  // 按 diffType 排序：del > add > same
  const typeOrder = { del: 0, add: 1, same: 2 }
  result.sort((a, b) => typeOrder[a.diffType] - typeOrder[b.diffType])

  return {
    html: result,
    useShadowDOM: false,
    markers,
    hasDiff,
    resourceType,
    oldResources,
    newResources
  }
}

/**
 * 对比动态字段（数组对象）
 * @param {Array} oldVal - 旧值数组，格式: [{ label, value, sort }]
 * @param {Array} newVal - 新值数组，格式: [{ label, value, sort }]
 * @param {string} fieldName - 字段名称
 * @returns {Object} { html, useShadowDOM, markers, hasDiff }
 */
export function diffDynamicField(oldVal, newVal, fieldName) {
  const oldArr = normalizeDynamicArray(oldVal)
  const newArr = normalizeDynamicArray(newVal)

  // 对比并生成差异结果
  const result = diffDynamicArrays(oldArr, newArr, fieldName)
  return result
}

/**
 * 标准化动态字段数组
 * @param {Array|string} val - 输入值
 * @returns {Array} 标准化后的数组
 */
function normalizeDynamicArray(val) {
  if (!val) return []
  if (typeof val === 'string') {
    try {
      const parsed = JSON.parse(val)
      return Array.isArray(parsed) ? parsed : []
    } catch {
      return []
    }
  }
  return Array.isArray(val) ? val : []
}

/**
 * 对比两个动态字段数组
 * @param {Array} oldArr - 旧数组
 * @param {Array} newArr - 新数组
 * @param {string} fieldName - 字段名称
 * @returns {Object} { html, useShadowDOM, markers, hasDiff }
 */
function diffDynamicArrays(oldArr, newArr, fieldName) {
  const result = []
  const markers = []

  // 建立索引映射（过滤掉没有 label 的项）
  const oldMap = new Map(oldArr.filter(item => item && item.label).map(item => [item.label, item]))
  const newMap = new Map(newArr.filter(item => item && item.label).map(item => [item.label, item]))

  // 获取所有标签
  const oldLabels = Array.from(oldMap.keys())
  const newLabels = Array.from(newMap.keys())
  const allLabels = new Set([...oldLabels, ...newLabels])

  // 快速判断：如果标签集合相同且所有值相同，则无差异
  let hasDiff = oldMap.size !== newMap.size

  allLabels.forEach(label => {
    const oldItem = oldMap.get(label)
    const newItem = newMap.get(label)

    const processedItem = {
      label,
      value: '',
      sort: newItem?.sort ?? oldItem?.sort ?? 0,
      diffType: 'same',
      diffHtml: ''
    }

    if (!oldItem && newItem) {
      // 新增项
      processedItem.value = newItem.value ?? ''
      processedItem.diffType = 'add'
      processedItem.diffHtml = wrapWithDiffTag(newItem.value ?? '', 'add', fieldName)
      hasDiff = true
    } else if (oldItem && !newItem) {
      // 删除项
      processedItem.value = oldItem.value ?? ''
      processedItem.diffType = 'del'
      processedItem.diffHtml = wrapWithDiffTag(oldItem.value ?? '', 'del', fieldName)
      hasDiff = true
    } else if (oldItem && newItem) {
      if (oldItem.value !== newItem.value) {
        // 值变更
        processedItem.value = newItem.value ?? ''
        processedItem.diffType = 'change'
        const diffResult = diffText(String(oldItem.value || ''), String(newItem.value || ''), fieldName)
        processedItem.diffHtml = diffResult.html
        markers.push(...diffResult.markers)
        hasDiff = true
      } else {
        // 无变化
        processedItem.value = newItem.value ?? ''
        processedItem.diffType = 'same'
        processedItem.diffHtml = newItem.value ?? ''
      }
    }

    result.push(processedItem)
  })

  // 按 sort 重新排序
  result.sort((a, b) => a.sort - b.sort)

  return {
    html: result,
    useShadowDOM: false,
    markers,
    hasDiff
  }
}

/**
 * 用差异标签包裹内容
 * @param {string} content - 内容
 * @param {string} type - 差异类型: 'add' | 'del'
 * @param {string} fieldName - 字段名称
 * @returns {string}
 */
function wrapWithDiffTag(content, type, fieldName) {
  const tag = type === 'add' ? 'ins' : 'del'
  const color = type === 'add' ? '#1878E8' : 'red'
  const diffId = `${fieldName}_${type}_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`
  return `<${tag} style="color: ${color};" data-diff="${type}" data-diff-id="${diffId}" data-diff-field="${fieldName}">${content}</${tag}>`
}

/**
 * 对比优先级字段
 * @param {number} oldPriority - 旧优先级
 * @param {number} newPriority - 新优先级
 * @returns {Object} { html, useShadowDOM, markers }
 */
export function diffPriority(oldPriority, newPriority) {
  const priorityMap = { 0: '低', 1: '高' }
  const oldText = priorityMap[oldPriority] ?? '未设置'
  const newText = priorityMap[newPriority] ?? '未设置'
  return diffText(oldText, newText, 'priority')
}

/**
 * 批量对比固定字段
 * @param {Object} current - 当前版本数据
 * @param {Object} last - 历史版本数据
 * @param {string[]} fields - 要对比的字段列表
 * @returns {Object} { diffed, hasDiff }
 */
export function diffFixedFields(current, last, fields = []) {
  const defaultFields = ['title', 'subtitle', 'digest', 'task', 'siteName', 'channelName']
  const targetFields = fields.length > 0 ? fields : defaultFields

  const diffed = {}
  let hasDiff = false

  targetFields.forEach(field => {
    if (current[field] !== last[field]) {
      const mayContainHtml = field === 'title'
      diffed[field] = diffField(
        String(last[field] || ''),
        String(current[field] || ''),
        field,
        { mayContainHtml }
      )
      hasDiff = true
    }
  })

  // 对比优先级
  if (current.priority !== last.priority) {
    diffed.priority = diffPriority(last.priority, current.priority)
    hasDiff = true
  }

  return { diffed, hasDiff }
}

export default {
  diffField,
  diffPriority,
  diffFixedFields
}