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
    typeof item.label === 'string' &&
    item.label.trim() !== '' &&
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
 * 对比自定义字段项
 */
function diffCustomFieldItems(oldArr, newArr, parentFieldName) {
  const items = []
  const markers = []

  // 按 label 建立索引
  const oldMap = new Map(
    oldArr
      .filter(item => item && item.label)
      .map(item => [item.label, item])
  )
  const newMap = new Map(
    newArr
      .filter(item => item && item.label)
      .map(item => [item.label, item])
  )

  // 获取所有 label
  const oldLabels = Array.from(oldMap.keys())
  const newLabels = Array.from(newMap.keys())
  const allLabels = new Set([...oldLabels, ...newLabels])

  let hasDiff = oldMap.size !== newMap.size

  allLabels.forEach(label => {
    const oldItem = oldMap.get(label)
    const newItem = newMap.get(label)

    const itemFieldName = `${parentFieldName}_${label}`
    const type = newItem?.type || oldItem?.type || 'text'

    const processedItem = {
      label,
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
    if (oldValues[0] === newValues[0]) {
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
 */
function toArray(val) {
  if (!val) return []
  return Array.isArray(val) ? val : [val]
}

/**
 * 对比数组
 */
function compareArrays(oldArr, newArr, type, fieldName) {
  // 确保参数是数组
  oldArr = Array.isArray(oldArr) ? oldArr : []
  newArr = Array.isArray(newArr) ? newArr : []

  const oldSet = new Set(oldArr)
  const newSet = new Set(newArr)

  if (oldSet.size === newSet.size) {
    const allSame = Array.from(oldSet).every(v => newSet.has(v))
    if (allSame) {
      return {
        hasDiff: false,
        diffHtml: newArr.map(v => generateResourceHtml(v, type)).join(''),
        markers: []
      }
    }
  }

  // 有差异
  const result = []
  const allUrls = Array.from(new Set(oldArr.concat(newArr)))

  allUrls.forEach(url => {
    // 确保 url 是字符串
    if (typeof url !== 'string') return

    const inOld = oldSet.has(url)
    const inNew = newSet.has(url)

    if (!inOld && inNew) {
      result.push(generateDiffTag(url, 'add', fieldName, type))
    } else if (inOld && !inNew) {
      result.push(generateDiffTag(url, 'del', fieldName, type))
    } else {
      result.push(generateResourceHtml(url, type))
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
 */
function generateValueHtml(value, type, fieldName, diffType) {
  const values = toArray(value)
  return values.map(v => generateDiffTag(v, diffType, fieldName, type)).join('')
}

/**
 * 生成资源 HTML
 */
function generateResourceHtml(url, type) {
  // 确保 url 是字符串
  if (!url || typeof url !== 'string') return ''

  switch (type) {
    case 'image':
      return `<span class="resource-preview resource-image" data-type="image" data-url="${escapeAttr(url)}" title="点击预览">
        <img src="${escapeAttr(url)}" alt="图片" />
      </span>`
    case 'video':
      return `<span class="resource-preview resource-video" data-type="video" data-url="${escapeAttr(url)}" title="点击播放">
        <span class="resource-icon">🎬</span>
        <span class="resource-name">${getFileName(url)}</span>
      </span>`
    case 'file':
      return `<a class="resource-preview resource-file" href="${escapeAttr(url)}" download="${getFileName(url)}" target="_blank">
        <span class="resource-icon">📎</span>
        <span class="resource-name">${getFileName(url)}</span>
      </a>`
    default:
      return escapeHtml(url)
  }
}

/**
 * 生成带差异标记的资源 HTML
 */
function generateDiffTag(url, diffType, fieldName, type) {
  const tag = diffType === 'add' ? 'ins' : 'del'
  const color = diffType === 'add' ? '#1878E8' : '#D32F2F'
  const diffId = `${fieldName}_${diffType}_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`

  const content = generateResourceHtml(url, type)

  return `<${tag} style="color: ${color};" data-diff="${diffType}" data-diff-id="${diffId}" data-diff-field="${fieldName}">${content}</${tag}>`
}

/**
 * 生成资源对比 HTML
 */
function generateResourceDiffHtml(oldVal, newVal, type, fieldName) {
  const oldHtml = oldVal ? generateDiffTag(oldVal, 'del', fieldName, type) : ''
  const newHtml = newVal ? generateDiffTag(newVal, 'add', fieldName, type) : ''

  return oldHtml + newHtml
}

/**
 * 获取文件名
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

export default {
  diffCustomFields
}