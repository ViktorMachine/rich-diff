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
 * @param {string} options.type - 字段类型: 'text' | 'dynamic' | 'file' | 'image' | 'video'
 * @param {boolean} options.mayContainHtml - 是否可能包含 HTML
 * @returns {Object} { html, useShadowDOM, markers, hasDiff }
 */
export function diffField(oldVal, newVal, fieldName, options = {}) {
  const { type = 'text', mayContainHtml = false } = options

  // 根据 type 选择对比方式
  if (type === 'dynamic') {
    return diffDynamicField(oldVal, newVal, fieldName)
  }

  // 资源类型：file, image, video（根据 value 类型自动判断单个/数组）
  if (type === 'file' || type === 'image' || type === 'video') {
    // 判断是否为数组
    const isOldArray = Array.isArray(oldVal) || (typeof oldVal === 'string' && isJsonArray(oldVal))
    const isNewArray = Array.isArray(newVal) || (typeof newVal === 'string' && isJsonArray(newVal))

    if (isOldArray || isNewArray) {
      // 数组模式
      return diffResourcesField(oldVal, newVal, fieldName, type)
    }
    // 单个模式
    return diffResourceField(oldVal, newVal, fieldName, type)
  }

  // text 类型：快速相等判断
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
 * 判断字符串是否为 JSON 数组
 * @param {string} str - 字符串
 * @returns {boolean}
 */
function isJsonArray(str) {
  if (!str || typeof str !== 'string') return false
  try {
    const parsed = JSON.parse(str)
    return Array.isArray(parsed)
  } catch {
    return false
  }
}

/**
 * 对比单个资源字段
 * @param {string|Object} oldVal - 旧值（资源地址或对象）
 * @param {string|Object} newVal - 新值（资源地址或对象）
 * @param {string} fieldName - 字段名称
 * @param {string} resourceType - 资源类型: 'file' | 'image' | 'video'
 * @returns {Object} { html, useShadowDOM, markers, hasDiff }
 */
function diffResourceField(oldVal, newVal, fieldName, resourceType) {
  // 支持字符串和对象格式
  const oldUrl = extractUrl(oldVal)
  const newUrl = extractUrl(newVal)

  // 快速判断
  if (oldUrl === newUrl) {
    return {
      html: newUrl ? generateResourceHtml(newVal, resourceType) : '',
      useShadowDOM: false,
      markers: [],
      hasDiff: false,
      resourceType,
      oldResource: oldUrl ? { url: oldUrl, diffType: 'same' } : null,
      newResource: newUrl ? { url: newUrl, diffType: 'same' } : null
    }
  }

  const result = {
    html: '',
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
    result.html = generateDiffTag(newVal, 'add', fieldName, resourceType)
  } else if (oldUrl && !newUrl) {
    // 删除资源
    result.oldResource = { url: oldUrl, diffType: 'del' }
    result.html = generateDiffTag(oldVal, 'del', fieldName, resourceType)
  } else {
    // 资源变更
    result.oldResource = { url: oldUrl, diffType: 'del' }
    result.newResource = { url: newUrl, diffType: 'add' }
    result.html = generateDiffTag(oldVal, 'del', fieldName, resourceType) + generateDiffTag(newVal, 'add', fieldName, resourceType)
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

  // 提取 URL 用于对比
  const oldUrls = oldArr.map(v => extractUrl(v))
  const newUrls = newArr.map(v => extractUrl(v))

  // 快速判断
  if (arraysEqual(oldUrls, newUrls)) {
    return {
      html: newArr.map(v => generateResourceHtml(v, resourceType)).join(''),
      useShadowDOM: false,
      markers: [],
      hasDiff: false,
      resourceType,
      oldResources: oldUrls.map(url => ({ url, diffType: 'same' })),
      newResources: newUrls.map(url => ({ url, diffType: 'same' }))
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

  // 提取 URL 用于对比
  const oldUrls = oldArr.map(v => extractUrl(v))
  const newUrls = newArr.map(v => extractUrl(v))

  // 建立索引映射
  const oldSet = new Set(oldUrls)
  const newSet = new Set(newUrls)

  // 处理旧资源
  const oldResources = oldUrls.map(url => {
    const exists = newSet.has(url)
    return {
      url,
      diffType: exists ? 'same' : 'del'
    }
  })

  // 处理新资源
  const newResources = newUrls.map(url => {
    const exists = oldSet.has(url)
    return {
      url,
      diffType: exists ? 'same' : 'add'
    }
  })

  // 合并所有项（用于生成 HTML）
  const allItems = [...oldArr, ...newArr]
  const seenUrls = new Set()
  let hasDiff = false

  allItems.forEach(item => {
    const url = extractUrl(item)
    if (!url || seenUrls.has(url)) return
    seenUrls.add(url)

    const inOld = oldSet.has(url)
    const inNew = newSet.has(url)

    if (!inOld && inNew) {
      result.push(generateDiffTag(item, 'add', fieldName, resourceType))
      hasDiff = true
    } else if (inOld && !inNew) {
      result.push(generateDiffTag(item, 'del', fieldName, resourceType))
      hasDiff = true
    } else {
      result.push(generateResourceHtml(item, resourceType))
    }
  })

  return {
    html: result.join(''),
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
 * 从值中提取 URL
 * 支持字符串和对象格式
 * @param {string|Object} value - 值
 * @returns {string} URL
 */
function extractUrl(value) {
  if (!value) return ''
  if (typeof value === 'string') return value
  if (typeof value === 'object' && value.url) return value.url
  return ''
}

/**
 * 从值中提取标签
 * @param {string|Object} value - 值
 * @returns {string} 标签
 */
function extractLabel(value) {
  if (!value) return ''
  if (typeof value === 'string') return getFileName(value)
  if (typeof value === 'object') {
    if (value.label) return value.label
    if (value.url) return getFileName(value.url)
  }
  return ''
}

/**
 * 从值中提取 target
 * @param {string|Object} value - 值
 * @returns {string} target ('_blank' | '_self' | '_preview' | '_inline')
 */
function extractTarget(value) {
  if (!value || typeof value !== 'object') return '_blank'
  return value.target || '_blank'
}

/**
 * 生成资源 HTML
 * @param {string|Object} value - 值（字符串或对象）
 * @param {string} type - 资源类型
 * @returns {string}
 */
function generateResourceHtml(value, type) {
  if (!value) return ''

  const url = extractUrl(value)
  const label = extractLabel(value)
  const target = extractTarget(value)

  if (!url) return ''

  switch (type) {
    case 'image':
    case 'images':
      return `<span class="resource-preview resource-image" data-type="image" data-url="${escapeAttr(url)}" title="点击预览">
        <img src="${escapeAttr(url)}" alt="${escapeAttr(label)}" />
      </span>`
    case 'video':
    case 'videos':
      return `<span class="resource-preview resource-video" data-type="video" data-url="${escapeAttr(url)}" title="点击播放">
        <span class="resource-icon">🎬</span>
        <span class="resource-name">${escapeHtml(label)}</span>
      </span>`
    case 'file':
    case 'files': {
      const linkTarget = target === '_self' ? '' : `target="${target}"`
      return `<span class="resource-preview resource-file" data-type="file" data-url="${escapeAttr(url)}" data-target="${escapeAttr(target)}">
        <span class="resource-icon">📎</span>
        <a href="${escapeAttr(url)}" ${linkTarget} class="resource-link">${escapeHtml(label)}</a>
      </span>`
    }
    default:
      return escapeHtml(url)
  }
}

/**
 * 生成带差异标记的资源 HTML
 * @param {string|Object} value - 值（字符串或对象）
 * @param {string} diffType - 差异类型 ('add' | 'del')
 * @param {string} fieldName - 字段名
 * @param {string} type - 资源类型
 * @returns {string}
 */
function generateDiffTag(value, diffType, fieldName, type) {
  const tag = diffType === 'add' ? 'ins' : 'del'
  const color = diffType === 'add' ? '#1878E8' : '#D32F2F'
  const diffId = `${fieldName}_${diffType}_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`

  const content = generateResourceHtml(value, type)

  return `<${tag} style="color: ${color};" data-diff="${diffType}" data-diff-id="${diffId}" data-diff-field="${fieldName}">${content}</${tag}>`
}

/**
 * 获取文件名
 * @param {string} url - URL
 * @returns {string} 文件名
 */
function getFileName(url) {
  if (!url || typeof url !== 'string') return ''
  try {
    const pathname = new URL(url).pathname
    return pathname.split('/').pop() || url
  } catch {
    return url.split('/').pop() || url
  }
}

/**
 * HTML 转义
 */
function escapeHtml(str) {
  if (!str) return ''
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
}

/**
 * 属性转义
 */
function escapeAttr(str) {
  if (!str) return ''
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
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