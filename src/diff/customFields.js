/**
 * 自定义字段对比工具
 */
import { diffText, diffHTML } from '../adapters/index.js'

/**
 * 对比自定义字段数组
 * @param {Array} oldVal - 旧值数组，格式: [{ field, type, label, value }]
 * @param {Array} newVal - 新值数组，格式: [{ field, type, label, value }]
 * @param {string} fieldName - 字段名称
 * @returns {Object} { items, markers, hasDiff }
 */
export function diffCustomFields(oldVal, newVal, fieldName) {
  const oldArr = normalizeArray(oldVal)
  const newArr = normalizeArray(newVal)

  // 校验数据格式
  if (!isValidCustomFieldArray(oldArr) || !isValidCustomFieldArray(newArr)) {
    console.warn('[rich-diff] 自定义字段数据格式不正确，跳过对比')
    return { items: [], markers: [], hasDiff: false }
  }

  // 按 label 匹配对比
  return diffCustomFieldItems(oldArr, newArr, fieldName)
}

/**
 * 校验自定义字段数组格式
 * @param {Array} arr - 数组
 * @returns {boolean}
 */
function isValidCustomFieldArray(arr) {
  if (!Array.isArray(arr)) return false
  if (arr.length === 0) return true

  return arr.every(item =>
    item &&
    typeof item === 'object' &&
    // label 必须存在且为字符串（允许空字符串）
    'label' in item &&
    typeof item.label === 'string' &&
    // value 必须存在
    'value' in item
  )
}

/**
 * 标准化数组
 */
function normalizeArray(val) {
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
 * 获取字段项的唯一标识
 * 优先使用 label，label 为空时使用 field
 * @param {Object} item - 字段项
 * @returns {string} 唯一标识
 */
function getItemKey(item) {
  if (!item) return ''
  // 优先使用 label，label 为空时使用 field
  const label = item.label?.trim() || ''
  if (label) return label
  return item.field || ''
}

/**
 * 对比自定义字段项
 */
function diffCustomFieldItems(oldArr, newArr, parentFieldName) {
  const items = []
  const markers = []

  // 按唯一标识建立索引
  const oldMap = new Map(
    oldArr
      .filter(item => item && (item.label !== undefined || item.field))
      .map(item => [getItemKey(item), item])
  )
  const newMap = new Map(
    newArr
      .filter(item => item && (item.label !== undefined || item.field))
      .map(item => [getItemKey(item), item])
  )

  // 获取所有标识
  const oldKeys = Array.from(oldMap.keys())
  const newKeys = Array.from(newMap.keys())
  const allKeys = new Set([...oldKeys, ...newKeys])

  let hasDiff = oldMap.size !== newMap.size

  allKeys.forEach(key => {
    const oldItem = oldMap.get(key)
    const newItem = newMap.get(key)

    // 显示标签：优先使用 label，否则使用 field
    const displayLabel = newItem?.label?.trim() || oldItem?.label?.trim() || key
    const itemFieldName = `${parentFieldName}_${key}`
    const type = newItem?.type || oldItem?.type || 'text'

    const processedItem = {
      label: displayLabel,
      type,
      field: newItem?.field || oldItem?.field || '',
      fieldName: itemFieldName,
      diffType: 'same',
      oldValue: null,
      newValue: null,
      diffHtml: '',
      hasDiff: false
    }

    if (!oldItem && newItem) {
      // 新增项
      processedItem.diffType = 'add'
      processedItem.newValue = newItem.value
      processedItem.hasDiff = true
      processedItem.diffHtml = generateValueHtml(newItem.value, type, itemFieldName, 'add')
      hasDiff = true
    } else if (oldItem && !newItem) {
      // 删除项
      processedItem.diffType = 'del'
      processedItem.oldValue = oldItem.value
      processedItem.hasDiff = true
      processedItem.diffHtml = generateValueHtml(oldItem.value, type, itemFieldName, 'del')
      hasDiff = true
    } else if (oldItem && newItem) {
      // 对比值
      processedItem.oldValue = oldItem.value
      processedItem.newValue = newItem.value

      const valueDiff = compareValues(oldItem.value, newItem.value, type, itemFieldName)
      processedItem.hasDiff = valueDiff.hasDiff
      processedItem.diffHtml = valueDiff.diffHtml

      if (valueDiff.hasDiff) {
        processedItem.diffType = 'change'
        markers.push(...valueDiff.markers)
        hasDiff = true
      }
    }

    items.push(processedItem)
  })

  return { items, markers, hasDiff }
}

/**
 * 对比值
 */
function compareValues(oldVal, newVal, type, fieldName) {
  const oldValues = toArray(oldVal)
  const newValues = toArray(newVal)

  // 如果都是单值
  if (oldValues.length === 1 && newValues.length === 1) {
    // 使用 isValueEqual 判断值是否相等（支持对象格式）
    if (isValueEqual(oldValues[0], newValues[0])) {
      return {
        hasDiff: false,
        diffHtml: generateResourceHtml(newValues[0], type),
        markers: []
      }
    }

    // 文本类型使用 diffText
    if (type === 'text') {
      // 检查是否包含 HTML
      const isHtml = String(oldVal).includes('<') || String(newVal).includes('<')
      if (isHtml) {
        const result = diffHTML(String(oldVal || ''), String(newVal || ''), fieldName)
        return {
          hasDiff: true,
          diffHtml: result.html,
          markers: result.markers || []
        }
      }
      const result = diffText(String(oldVal || ''), String(newVal || ''), fieldName)
      return {
        hasDiff: true,
        diffHtml: result.html,
        markers: result.markers || []
      }
    }

    // 资源类型
    return {
      hasDiff: true,
      diffHtml: generateResourceDiffHtml(oldValues[0], newValues[0], type, fieldName),
      markers: []
    }
  }

  // 数组对比
  return compareArrays(oldValues, newValues, type, fieldName)
}

/**
 * 转换为数组
 * 支持：字符串、对象、数组
 */
function toArray(val) {
  if (!val) return []
  if (Array.isArray(val)) return val
  return [val]
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
    // 优先使用 label，其次用 url 提取文件名
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
 * 判断两个值是否相等
 * 支持字符串和对象格式
 */
function isValueEqual(val1, val2) {
  const url1 = extractUrl(val1)
  const url2 = extractUrl(val2)
  return url1 === url2
}

/**
 * 对比数组
 * 支持字符串和对象格式的值
 */
function compareArrays(oldArr, newArr, type, fieldName) {
  // 确保参数是数组
  oldArr = Array.isArray(oldArr) ? oldArr : []
  newArr = Array.isArray(newArr) ? newArr : []

  // 提取 URL 用于对比
  const oldUrls = oldArr.map(v => extractUrl(v))
  const newUrls = newArr.map(v => extractUrl(v))

  const oldUrlSet = new Set(oldUrls)
  const newUrlSet = new Set(newUrls)

  // 检查是否完全相同
  if (oldUrlSet.size === newUrlSet.size) {
    const allSame = oldUrls.every(url => newUrlSet.has(url))
    if (allSame) {
      return {
        hasDiff: false,
        diffHtml: newArr.map(v => generateResourceHtml(v, type)).join(''),
        markers: []
      }
    }
  }

  // 有差异，按 URL 合并所有项
  const allItems = [...oldArr, ...newArr]
  const seenUrls = new Set()
  const result = []

  allItems.forEach(item => {
    const url = extractUrl(item)
    if (!url || seenUrls.has(url)) return
    seenUrls.add(url)

    const inOld = oldUrlSet.has(url)
    const inNew = newUrlSet.has(url)

    if (!inOld && inNew) {
      result.push(generateDiffTag(item, 'add', fieldName, type))
    } else if (inOld && !inNew) {
      result.push(generateDiffTag(item, 'del', fieldName, type))
    } else {
      result.push(generateResourceHtml(item, type))
    }
  })

  return {
    hasDiff: true,
    diffHtml: result.join(''),
    markers: []
  }
}

/**
 * 生成值的 HTML（带差异标记）
 * 支持字符串和对象格式
 */
function generateValueHtml(value, type, fieldName, diffType) {
  const values = toArray(value)
  return values.map(v => generateDiffTag(v, diffType, fieldName, type)).join('')
}

/**
 * 生成资源 HTML
 * 支持字符串和对象格式的值
 */
function generateResourceHtml(value, type) {
  if (!value) return ''

  // 提取 URL、标签、target
  const url = extractUrl(value)
  const label = extractLabel(value)
  const target = extractTarget(value)

  if (!url) return ''

  switch (type) {
    case 'image':
      return `<span class="resource-preview resource-image" data-type="image" data-url="${escapeAttr(url)}" title="点击预览">
        <img src="${escapeAttr(url)}" alt="${escapeAttr(label)}" />
      </span>`
    case 'video':
      return `<span class="resource-preview resource-video" data-type="video" data-url="${escapeAttr(url)}" title="点击播放">
        <span class="resource-icon">🎬</span>
        <span class="resource-name">${escapeHtml(label)}</span>
      </span>`
    case 'file': {
      // target 支持：_blank（新页签）、_self（当前页）、_preview（预览弹窗）、_inline（内联显示）
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
 */
function generateDiffTag(value, diffType, fieldName, type) {
  const tag = diffType === 'add' ? 'ins' : 'del'
  const color = diffType === 'add' ? '#1878E8' : '#D32F2F'
  const diffId = `${fieldName}_${diffType}_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`

  const content = generateResourceHtml(value, type)

  return `<${tag} style="color: ${color};" data-diff="${diffType}" data-diff-id="${diffId}" data-diff-field="${fieldName}">${content}</${tag}>`
}

/**
 * 生成资源对比 HTML
 * @param {string|Object} oldVal - 旧值
 * @param {string|Object} newVal - 新值
 * @param {string} type - 资源类型
 * @param {string} fieldName - 字段名
 */
function generateResourceDiffHtml(oldVal, newVal, type, fieldName) {
  const oldHtml = oldVal ? generateDiffTag(oldVal, 'del', fieldName, type) : ''
  const newHtml = newVal ? generateDiffTag(newVal, 'add', fieldName, type) : ''

  return oldHtml + newHtml
}

/**
 * 获取文件名
 * 支持字符串和对象格式
 */
function getFileName(value) {
  const url = extractUrl(value)
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

export default {
  diffCustomFields
}