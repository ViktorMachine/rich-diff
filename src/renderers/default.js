/**
 * 默认渲染器
 * 支持多字段对比和表单布局展示
 */
import { diffHTML, diffText } from '../adapters/index.js'
import { diffField } from '../diff/field.js'
import { generateMarkers } from '../markers/index.js'
import { createConnector, clearConnectors } from '../leader-line/index.js'
import { createPopup } from '../popup/index.js'
import { extractStyleMarkers } from '../markers/styleExtractor.js'
import { diffCustomFields } from '../diff/customFields.js'
import { getResourcePreview } from '../popup/resourcePreview.js'

// 弹窗实例
let popupInstance = null
// 资源预览实例
let resourcePreviewInstance = null
// marker 数据存储
let markerStore = new Map()

// 默认样式
const DEFAULT_STYLES = `
  .rich-diff-container {
    display: flex;
    height: 600px;
    max-height: 80vh;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    font-size: 14px;
    line-height: 1.6;
    color: #333;
    background: #f5f7fa;
  }

  /* 左侧变更标记面板 */
  .rich-diff-markers-panel {
    width: 320px;
    min-width: 280px;
    max-width: 400px;
    height: 100%;
    background: #fff;
    border-right: 1px solid #e9ecef;
    overflow-y: auto;
    overflow-x: hidden;
    padding: 0 16px;
    box-sizing: border-box;
    flex-shrink: 0;
  }

  .rich-diff-markers-panel h3 {
    font-size: 14px;
    color: #666;
    margin: 0 0 12px 0;
    padding-bottom: 8px;
    border-bottom: 1px solid #eee;
    position: sticky;
    top: 0;
    background: #fff;
    z-index: 1;
  }

  .rich-diff-stats {
    display: flex;
    gap: 12px;
    padding: 8px 12px;
    background: #f8f9fa;
    border-radius: 6px;
    margin-bottom: 12px;
  }

  .rich-diff-stat {
    display: flex;
    align-items: center;
    gap: 4px;
    font-size: 12px;
  }

  .rich-diff-stat-dot {
    width: 8px;
    height: 8px;
    border-radius: 50%;
  }

  .rich-diff-stat-dot.add { background: #1878E8; }
  .rich-diff-stat-dot.del { background: #D32F2F; }
  .rich-diff-stat-dot.modify { background: #E65100; }

  .rich-diff-marker-item {
    padding: 10px 12px;
    margin-bottom: 6px;
    background: #f8f9fa;
    border-radius: 6px;
    cursor: pointer;
    transition: all 0.2s;
    border-left: 3px solid transparent;
  }

  .rich-diff-marker-item:hover {
    background: #e9ecef;
    transform: translateX(2px);
  }

  .rich-diff-marker-item.active {
    background: #e8f4ff;
    border-left-color: #1878E8;
  }

  .rich-diff-marker-item.add { border-left-color: #1878E8; }
  .rich-diff-marker-item.del { border-left-color: #D32F2F; }
  .rich-diff-marker-item.modify { border-left-color: #E65100; }

  .rich-diff-marker-header {
    display: flex;
    align-items: center;
    gap: 6px;
    margin-bottom: 4px;
  }

  .rich-diff-marker-type {
    display: inline-block;
    padding: 1px 6px;
    border-radius: 3px;
    font-size: 11px;
    font-weight: 600;
  }

  .rich-diff-marker-type.add { background: #E8F4FF; color: #1878E8; }
  .rich-diff-marker-type.del { background: #FFEBEE; color: #D32F2F; }
  .rich-diff-marker-type.modify { background: #FFF3E0; color: #E65100; }

  .rich-diff-marker-field {
    font-weight: 600;
    font-size: 12px;
  }

  .rich-diff-marker-content {
    font-size: 11px;
    color: #666;
    margin-top: 4px;
    word-break: break-all;
  }

  .rich-diff-marker-content .old { color: #D32F2F; }
  .rich-diff-marker-content .new { color: #1878E8; }

  .rich-diff-marker-content .marker-prefix {
    font-weight: bold;
    font-family: monospace;
  }

  /* 左侧 marker 区域图片自适应 */
  .rich-diff-markers-panel img {
    max-width: 120px;
    height: auto;
    display: block;
  }

  /* 右侧内容面板 */
  .rich-diff-content-panel {
    flex: 1;
    height: 100%;
    background: #fff;
    overflow-y: auto;
    overflow-x: hidden;
    padding: 0 20px;
    box-sizing: border-box;
  }

  .rich-diff-content-panel h3 {
    font-size: 14px;
    color: #666;
    margin: 0 0 12px 0;
    padding-bottom: 8px;
    border-bottom: 1px solid #eee;
    position: sticky;
    top: 0;
    background: #fff;
    z-index: 1;
  }

  /* 表单布局 */
  .rich-diff-form {
    max-width: 800px;
  }

  /* 防止内容溢出 */
  .rich-diff-form *,
  .rich-diff-form *::before,
  .rich-diff-form *::after {
    max-width: 100%;
    box-sizing: border-box;
  }

  /* 图片/视频自适应 */
  .rich-diff-form img,
  .rich-diff-form video,
  .rich-diff-form audio,
  .rich-diff-form iframe,
  .rich-diff-form embed,
  .rich-diff-form object {
    max-width: 100%;
    height: auto;
    display: block;
  }

  /* 长文本/URL 自动换行 */
  .rich-diff-form pre,
  .rich-diff-form code,
  .rich-diff-form a {
    word-break: break-word;
    overflow-wrap: break-word;
  }

  /* 表格溢出处理 */
  .rich-diff-form table {
    width: 100%;
    table-layout: fixed;
    overflow-x: auto;
    display: block;
  }

  /* 代码块横向滚动 */
  .rich-diff-form pre {
    overflow-x: auto;
    white-space: pre-wrap;
    word-wrap: break-word;
  }

  .rich-diff-field {
    display: flex;
    margin-bottom: 16px;
    padding: 12px;
    background: #fafafa;
    border-radius: 6px;
    border: 1px solid #eee;
    transition: all 0.2s;
  }

  .rich-diff-field:hover {
    background: #f5f5f5;
  }

  .rich-diff-field.highlight {
    background: #e8f4ff;
    border-color: #1878E8;
    box-shadow: 0 0 0 2px rgba(24, 120, 232, 0.2);
  }

  .rich-diff-field-label {
    width: 100px;
    min-width: 100px;
    font-weight: 600;
    color: #555;
    padding-right: 12px;
    border-right: 1px solid #ddd;
    display: flex;
    align-items: flex-start;
  }

  .rich-diff-field-content {
    flex: 1;
    padding-left: 12px;
    line-height: 1.8;
    word-break: break-word;
  }

  /* 差异样式 */
  .rich-diff-field-content ins[data-diff],
  .rich-diff-field-content .diff-add,
  .rich-diff-field-content difftext[data-diff="add"] {
    color: #1878E8;
    background: #E8F4FF;
    text-decoration: none;
    padding: 1px 3px;
    border-radius: 2px;
    display: inline-block;
  }
  .rich-diff-field-content del[data-diff],
  .rich-diff-field-content .diff-del,
  .rich-diff-field-content difftext[data-diff="del"] {
    color: #D32F2F;
    background: #FFEBEE;
    text-decoration: line-through;
    padding: 1px 3px;
    border-radius: 2px;
    display: inline-block;
  }

  .rich-diff-empty {
    text-align: center;
    color: #999;
    padding: 40px 20px;
  }

  .rich-diff-no-change {
    color: #999;
    font-style: italic;
  }

  /* 资源预览样式 */
  .resource-preview {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    padding: 4px 8px;
    background: #f5f5f5;
    border-radius: 4px;
    cursor: pointer;
    margin: 2px 0;
    transition: background 0.2s;
  }

  .resource-preview:hover {
    background: #e9ecef;
  }

  .resource-preview.resource-image {
    padding: 2px;
  }

  .resource-preview.resource-image img {
    max-width: 100px;
    max-height: 60px;
    border-radius: 3px;
    object-fit: cover;
  }

  .resource-preview.resource-file {
    text-decoration: none;
    color: inherit;
  }

  .resource-preview.resource-file:hover {
    background: #e8f4ff;
  }

  .resource-icon {
    font-size: 16px;
  }

  .resource-name {
    font-size: 12px;
    color: inherit;
    max-width: 150px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  /* 左侧 marker 区域图片自适应 */
  .rich-diff-markers-panel img {
    max-width: 100%;
    height: auto;
    display: block;
  }

  /* LeaderLine 连线样式 */
  svg.leader-line {
    z-index: 99999 !important;
    pointer-events: none !important;
  }
`

/**
 * 默认渲染器
 */
export const defaultRenderer = {
  /**
   * 渲染对比结果
   * @param {Object} options - 渲染选项
   * @returns {Object} { html, markers, container, destroy }
   */
  render(options = {}) {
    const {
      container,
      // 兼容旧 API
      oldContent = '',
      newContent = '',
      fieldName = 'content',
      diffResult,
      config = {},
      // 样式检测选项（支持顶层传入或 config 中传入）
      detectStyle,
      styleDiffConfig
    } = options

    // 新增：支持多字段对比
    const {
      oldData,       // 旧数据对象 { title, content, subtitle }
      newData,       // 新数据对象
      fields         // 字段配置 [{ label, field, sort, type }]
    } = options

    if (!container) {
      return diffResult || null
    }

    // 合并样式检测配置（优先使用顶层参数）
    const mergedConfig = {
      ...config,
      detectStyle: detectStyle !== undefined ? detectStyle : config.detectStyle,
      styleDiffConfig: styleDiffConfig || config.styleDiffConfig || {}
    }

    // 判断使用哪种模式
    if (oldData && newData && fields) {
      // 多字段对比模式
      return this.renderMultiFields(container, oldData, newData, fields, mergedConfig)
    } else {
      // 单字段模式（兼容旧 API）
      return this.renderSingleField(container, oldContent, newContent, fieldName, diffResult, mergedConfig)
    }
  },

  /**
   * 多字段对比渲染
   */
  renderMultiFields(container, oldData, newData, fields, config = {}) {
    // 注入样式
    injectStyles(container)

    // 排序字段
    const sortedFields = [...fields].sort((a, b) => (a.sort || 0) - (b.sort || 0))

    // 对比所有字段
    const fieldResults = []
    const allMarkers = []

    // 获取样式检测配置
    const { detectStyle = false, styleDiffConfig = {} } = config

    sortedFields.forEach((fieldConfig, index) => {
      const { field, label, type, mayContainHtml } = fieldConfig
      const oldValue = oldData[field] || ''
      const newValue = newData[field] || ''

      // dynamic 类型特殊处理
      if (type === 'dynamic') {
        // 校验数据格式
        if (!Array.isArray(oldValue) && !Array.isArray(newValue)) {
          return // 跳过非数组类型
        }

        // 对比自定义字段
        const customResult = diffCustomFields(oldValue || [], newValue || [], field)

        // 将每个项作为独立字段处理
        customResult.items.forEach((item, itemIndex) => {
          const itemField = item.fieldName
          const itemLabel = `${label} - ${item.label}`

          // 生成标记，并获取带有 marker-id 的 HTML
          const markers = createFieldMarkers(item.diffHtml, itemField, itemLabel, fieldResults.length + itemIndex)
          const markedHtml = markers.html || item.diffHtml

          fieldResults.push({
            field: itemField,
            label: itemLabel,
            result: { html: markedHtml, hasDiff: item.hasDiff },
            markers,
            hasDiff: item.hasDiff,
            isCustomField: true,
            customType: item.type,
            customData: item
          })

          allMarkers.push(...markers)
        })
        return
      }

      // 执行对比
      let result
      if (type) {
        // 指定了字段类型，使用 diffField
        result = diffField(oldValue, newValue, field, { type, mayContainHtml })
      } else {
        // 未指定类型，自动判断
        const isHtml = isHtmlContent(oldValue) || isHtmlContent(newValue)
        result = isHtml
          ? diffHTML(String(oldValue), String(newValue), field)
          : diffText(String(oldValue), String(newValue), field)
      }

      // 直接生成标记（不依赖预定义字段），并获取带 ID 的 HTML
      const markers = createFieldMarkers(result.html, field, label, index)

      // 使用修改后的 HTML（带有 marker-id）
      const markedHtml = markers.html || result.html

      // 优先使用 result.hasDiff，否则使用 hasDifference 判断
      const fieldHasDiff = result.hasDiff !== undefined ? result.hasDiff : hasDifference(result.html, oldValue, newValue)

      fieldResults.push({
        field,
        label,
        result: { ...result, html: markedHtml },
        markers,
        hasDiff: fieldHasDiff
      })

      allMarkers.push(...markers)
    })

    // 样式检测：提取纯样式变更的 markers
    if (detectStyle) {
      const diffResult = {
        diffed: {},
        last: oldData,
        current: newData
      }

      // 构建 diffed 对象
      fieldResults.forEach(({ field, result }) => {
        diffResult.diffed[field] = result.html
      })

      // 直接调用 extractStyleMarkers 处理 allMarkers
      // 这会：1. 为现有 marker 附加 styleChanges  2. 为纯样式变更创建新 marker（添加到 allMarkers）
      extractStyleMarkers(diffResult.diffed, diffResult.last, diffResult.current, allMarkers, { detectStyle, styleDiffConfig })
    }

    // 渲染 UI
    const elements = renderFormLayout(container, fieldResults, allMarkers, config)

    // 绑定交互
    const state = bindInteractions(elements, allMarkers, config)

    return {
      container,
      fieldResults,
      markers: allMarkers,
      destroy: () => destroyRenderer(state, elements.container)
    }
  },

  /**
   * 单字段对比渲染（兼容旧 API）
   */
  renderSingleField(container, oldContent, newContent, fieldName, diffResult, config) {
    const result = diffResult || diffHTML(oldContent, newContent, fieldName)
    if (!result) {
      container.innerHTML = '<div class="rich-diff-empty">无对比结果</div>'
      return { container, html: '', markers: [] }
    }

    const markers = generateMarkers({
      diffed: { [fieldName]: result.html },
      last: { [fieldName]: oldContent },
      current: { [fieldName]: newContent }
    })

    injectStyles(container)
    const elements = renderUI(container, result, markers, fieldName, config)
    const state = bindInteractions(elements, markers)

    return {
      container,
      html: result.html,
      markers,
      destroy: () => destroyRenderer(state)
    }
  }
}

/**
 * 判断是否为 HTML 内容
 */
function isHtmlContent(content) {
  if (!content) return false
  const str = String(content)
  return str.includes('<') && str.includes('>')
}

/**
 * 从差异 HTML 中创建字段标记，并给差异标签添加 ID
 */
function createFieldMarkers(html, field, label, index) {
  if (!html || typeof html !== 'string') return []

  const markers = []
  const parts = []
  let lastIndex = 0
  let markerIndex = 0

  // 匹配差异标签
  const pattern = /<(ins|del|difftext)([^>]*)>([\s\S]*?)<\/\1>/gi
  let match

  while ((match = pattern.exec(html)) !== null) {
    const tagType = match[1].toLowerCase()
    const attrs = match[2]
    const content = match[3]

    // 解析属性：必须有 data-diff 属性才识别为差异标记
    const diffTypeMatch = attrs.match(/data-diff="([^"]+)"/)

    // 如果没有 data-diff 属性，说明是原内容的原生标签，跳过不处理
    if (!diffTypeMatch) {
      continue
    }

    const diffType = diffTypeMatch[1]

    // 检查是否已有 data-diff-id 或 data-marker-id
    const diffIdMatch = attrs.match(/data-diff-id="([^"]+)"/)
    const markerIdMatch = attrs.match(/data-marker-id="([^"]+)"/)

    // 使用已有的 ID 或生成新 ID
    const markerId = markerIdMatch ? markerIdMatch[1] :
                     diffIdMatch ? diffIdMatch[1] :
                     `diff-${field}-${markerIndex}`

    // 添加前面的内容
    if (match.index > lastIndex) {
      parts.push(html.substring(lastIndex, match.index))
    }

    // 检查是否需要添加 marker-id
    let newAttrs = attrs
    if (!markerIdMatch) {
      // 添加 data-marker-id（使用 diffId 或生成的新 ID）
      newAttrs += ` data-marker-id="${markerId}"`
    }

    // 添加标签
    parts.push(`<${tagType}${newAttrs}>${content}</${tagType}>`)

    markers.push({
      id: markerId,
      type: 'field',
      field,
      fieldLabel: label,
      position: index + 1,
      changeType: diffType,
      oldValue: diffType === 'del' ? content : '',
      newValue: diffType === 'add' ? content : '',
      targetSelector: `[data-marker-id="${markerId}"]`,
      range: [match.index, match.index + match[0].length]
    })

    lastIndex = match.index + match[0].length
    markerIndex++
  }

  // 添加剩余内容
  if (lastIndex < html.length) {
    parts.push(html.substring(lastIndex))
  }

  // 返回标记和修改后的 HTML
  markers.html = parts.length > 0 ? parts.join('') : html

  // 合并相邻的 add/del 为 modify
  return mergeMarkers(markers)
}

/**
 * 合并相邻标记
 */
function mergeMarkers(markers) {
  // 保存 html 属性
  const html = markers.html

  if (markers.length < 2) {
    markers.html = html
    return markers
  }

  const merged = []
  let i = 0

  while (i < markers.length) {
    const current = markers[i]

    // 检查是否可以合并为 modify
    if (current.changeType === 'del' && i + 1 < markers.length && markers[i + 1].changeType === 'add') {
      const next = markers[i + 1]
      merged.push({
        ...current,
        id: current.id + '-merged',
        changeType: 'modify',
        newValue: next.newValue,
        oldValue: current.oldValue,
        // 保存所有关联的 marker ID，用于查找目标元素
        targetIds: [current.id, next.id]
      })
      i += 2
    } else {
      merged.push(current)
      i++
    }
  }

  // 恢复 html 属性
  merged.html = html
  return merged
}

/**
 * 判断是否有差异
 */
function hasDifference(html, oldValue, newValue) {
  if (!html) return false
  // 检查是否包含差异标签
  if (/<(ins|del|difftext)[^>]*>/i.test(html)) return true
  // 检查值是否不同
  return String(oldValue) !== String(newValue)
}

/**
 * 注入样式
 */
function injectStyles(container) {
  const styleId = 'rich-diff-default-styles'
  if (document.getElementById(styleId)) return

  const style = document.createElement('style')
  style.id = styleId
  style.textContent = DEFAULT_STYLES
  document.head.appendChild(style)
}

/**
 * 渲染表单布局
 */
function renderFormLayout(container, fieldResults, markers, config) {
  container.innerHTML = ''
  container.className = 'rich-diff-container'

  // 左侧标记面板
  const markersPanel = document.createElement('div')
  markersPanel.className = 'rich-diff-markers-panel'
  markersPanel.innerHTML = `
    <h3>变更标记</h3>
    <div class="rich-diff-stats">
      <div class="rich-diff-stat"><span class="rich-diff-stat-dot add"></span><span class="add-count">0</span> 新增</div>
      <div class="rich-diff-stat"><span class="rich-diff-stat-dot del"></span><span class="del-count">0</span> 删除</div>
      <div class="rich-diff-stat"><span class="rich-diff-stat-dot modify"></span><span class="modify-count">0</span> 修改</div>
    </div>
    <div class="rich-diff-markers-list"></div>
  `

  // 右侧表单面板
  const contentPanel = document.createElement('div')
  contentPanel.className = 'rich-diff-content-panel'
  contentPanel.innerHTML = `
    <h3>对比结果</h3>
    <div class="rich-diff-form"></div>
  `

  container.appendChild(markersPanel)
  container.appendChild(contentPanel)

  // 渲染字段
  const formEl = contentPanel.querySelector('.rich-diff-form')
  renderFields(formEl, fieldResults)

  // 渲染标记列表
  renderMarkersList(markersPanel.querySelector('.rich-diff-markers-list'), markers)

  // 更新统计
  updateStats(markersPanel, markers)

  return {
    container,
    markersPanel,
    contentPanel,
    markersList: markersPanel.querySelector('.rich-diff-markers-list'),
    formEl
  }
}

/**
 * 渲染字段列表
 */
function renderFields(formEl, fieldResults) {
  formEl.innerHTML = ''

  fieldResults.forEach(({ field, label, result, hasDiff }) => {
    const fieldEl = document.createElement('div')
    fieldEl.className = 'rich-diff-field'
    fieldEl.dataset.field = field

    const contentEl = document.createElement('div')
    contentEl.className = 'rich-diff-field-content'
    contentEl.dataset.field = field

    if (hasDiff && result.html) {
      // 有差异，直接渲染 HTML（浏览器会正确解析）
      contentEl.innerHTML = result.html
    } else {
      // 无差异，显示纯文本
      const plainText = result.html
        ? result.html.replace(/<[^>]*>/g, '')
        : '无内容'
      contentEl.innerHTML = `<span class="rich-diff-no-change">${escapeHtml(plainText)}</span>`
    }

    // 创建标签
    const labelEl = document.createElement('div')
    labelEl.className = 'rich-diff-field-label'
    labelEl.textContent = label

    fieldEl.appendChild(labelEl)
    fieldEl.appendChild(contentEl)
    formEl.appendChild(fieldEl)
  })
}

/**
 * 渲染标记列表
 */
function renderMarkersList(listEl, markers) {
  if (!markers || markers.length === 0) {
    listEl.innerHTML = '<div class="rich-diff-empty">无变更标记</div>'
    return
  }

  listEl.innerHTML = markers.map((marker, index) => {
    const typeClass = marker.changeType || 'modify'
    const typeText = { add: '新增', del: '删除', modify: '修改' }[typeClass] || typeClass

    // 渲染 HTML 内容而非源代码
    const oldContent = marker.oldValue || ''
    const newContent = marker.newValue || ''

    return `
      <div class="rich-diff-marker-item ${typeClass}" data-marker-index="${index}" data-marker-id="${marker.id}" data-marker-field="${marker.field}">
        <div class="rich-diff-marker-header">
          <span class="rich-diff-marker-type ${typeClass}">${typeText}</span>
          <span class="rich-diff-marker-field">${marker.fieldLabel || marker.field}</span>
        </div>
        <div class="rich-diff-marker-content">
          ${oldContent ? `<div class="old"><span class="marker-prefix">- </span>${truncateHtml(oldContent, 60)}</div>` : ''}
          ${newContent ? `<div class="new"><span class="marker-prefix">+ </span>${truncateHtml(newContent, 60)}</div>` : ''}
        </div>
      </div>
    `
  }).join('')
}

/**
 * 更新统计
 */
function updateStats(panel, markers) {
  const counts = { add: 0, del: 0, modify: 0 }
  markers.forEach(m => {
    const type = m.changeType || 'modify'
    counts[type] = (counts[type] || 0) + 1
  })

  panel.querySelector('.add-count').textContent = counts.add
  panel.querySelector('.del-count').textContent = counts.del
  panel.querySelector('.modify-count').textContent = counts.modify
}

/**
 * 渲染单字段 UI（兼容旧 API）
 */
function renderUI(container, result, markers, fieldName, config) {
  container.innerHTML = ''
  container.className = 'rich-diff-container'

  const markersPanel = document.createElement('div')
  markersPanel.className = 'rich-diff-markers-panel'
  markersPanel.innerHTML = `
    <h3>变更标记</h3>
    <div class="rich-diff-stats">
      <div class="rich-diff-stat"><span class="rich-diff-stat-dot add"></span><span class="add-count">0</span> 新增</div>
      <div class="rich-diff-stat"><span class="rich-diff-stat-dot del"></span><span class="del-count">0</span> 删除</div>
      <div class="rich-diff-stat"><span class="rich-diff-stat-dot modify"></span><span class="modify-count">0</span> 修改</div>
    </div>
    <div class="rich-diff-markers-list"></div>
  `

  const contentPanel = document.createElement('div')
  contentPanel.className = 'rich-diff-content-panel'
  contentPanel.innerHTML = `
    <h3>对比结果</h3>
    <div class="rich-diff-content">${result.html || '<div class="rich-diff-empty">无差异</div>'}</div>
  `

  container.appendChild(markersPanel)
  container.appendChild(contentPanel)

  renderMarkersList(markersPanel.querySelector('.rich-diff-markers-list'), markers)
  updateStats(markersPanel, markers)

  return {
    container,
    markersPanel,
    contentPanel,
    markersList: markersPanel.querySelector('.rich-diff-markers-list'),
    contentEl: contentPanel.querySelector('.rich-diff-content')
  }
}

/**
 * 绑定交互事件
 */
function bindInteractions(elements, markers, config = {}) {
  const state = {
    currentConnector: null,
    activeMarker: null,
    pendingTargetEl: null,
    scrollTimeout: null,
    isScrolling: false
  }

  const { detectStyle = false } = config

  // 滚动监听（只监听右侧内容面板）
  const handleContentScroll = () => {
    // 滚动时清除连线
    if (state.currentConnector) {
      try {
        state.currentConnector.line.remove()
      } catch (e) {}
      state.currentConnector = null
    }
    clearConnectors()

    // 标记滚动状态
    state.isScrolling = true

    // 防抖：滚动结束后重置状态
    if (state.scrollTimeout) {
      clearTimeout(state.scrollTimeout)
    }
    state.scrollTimeout = setTimeout(() => {
      state.isScrolling = false
    }, 150)
  }

  // 只监听右侧内容面板的滚动
  elements.contentPanel?.addEventListener('scroll', handleContentScroll, { passive: true })

  // 鼠标进入标记项
  elements.markersList.addEventListener('mouseenter', (e) => {
    const item = e.target.closest('.rich-diff-marker-item')
    if (!item) return

    // 如果已经激活了同一个 marker，跳过
    if (state.activeMarker === item) return

    const markerId = item.dataset.markerId
    const markerIndex = parseInt(item.dataset.markerIndex, 10)
    const marker = markers[markerIndex]

    // 查找目标元素
    let targetEl = null
    if (marker && marker.targetIds && marker.targetIds.length > 0) {
      // 合并的标记：找到第一个存在的目标元素
      for (const tid of marker.targetIds) {
        const el = elements.formEl?.querySelector(`[data-marker-id="${tid}"]`)
        if (el) {
          targetEl = el
          break
        }
      }
    } else if (markerId) {
      // 单个标记：直接查找
      targetEl = elements.formEl?.querySelector(`[data-marker-id="${markerId}"]`)
    }

    highlightMarker(elements, item, targetEl, state)

    // 样式变更弹窗
    if (detectStyle && marker && marker.styleChanges) {
      if (!popupInstance) {
        popupInstance = createPopup()
      }
      popupInstance.show(item, marker)
    }
  }, true)

  // 鼠标离开标记项（使用 mouseout 检查是否真正离开）
  elements.markersList.addEventListener('mouseout', (e) => {
    const item = e.target.closest('.rich-diff-marker-item')
    if (!item) return

    // 检查鼠标是否移动到了 marker 项内部的其他子元素
    // relatedTarget 是鼠标移动到的目标元素
    const relatedTarget = e.relatedTarget

    // 如果 relatedTarget 仍然在当前 marker 项内，则不清除高亮
    if (relatedTarget && item.contains(relatedTarget)) {
      return
    }

    // 如果 relatedTarget 是另一个 marker 项，也不清除（由 mouseenter 处理切换）
    if (relatedTarget) {
      const relatedItem = relatedTarget.closest('.rich-diff-marker-item')
      if (relatedItem && relatedItem !== item) {
        // 鼠标移动到另一个 marker 项，由那个项的 mouseenter 处理
        return
      }
    }

    // 鼠标真正离开了 marker 列表区域
    clearHighlight(elements, state)

    // 隐藏弹窗
    if (popupInstance) {
      popupInstance.hide()
    }
  }, true)

  // 资源预览点击事件
  elements.formEl?.addEventListener('click', (e) => {
    const previewEl = e.target.closest('.resource-preview[data-type]')
    if (!previewEl) return

    const type = previewEl.dataset.type
    const url = previewEl.dataset.url

    if (!url || type === 'file') return // file 类型由 a 标签处理

    // 获取预览实例
    if (!resourcePreviewInstance) {
      resourcePreviewInstance = getResourcePreview()
    }

    // 收集同一字段内的所有同类型资源
    const fieldEl = previewEl.closest('.rich-diff-field')
    const allResources = fieldEl?.querySelectorAll(`.resource-preview[data-type="${type}"]`) || []
    const urls = [...allResources].map(el => el.dataset.url)
    const currentIndex = urls.indexOf(url)

    resourcePreviewInstance.show(urls, type, currentIndex)
  })

  return state
}

/**
 * 高亮标记
 */
function highlightMarker(elements, markerItem, targetEl, state) {
  clearHighlight(elements, state)

  markerItem.classList.add('active')
  state.activeMarker = markerItem
  state.pendingTargetEl = targetEl

  if (targetEl) {
    targetEl.classList.add('highlight')

    // 滚动右侧内容面板到目标元素
    scrollContentToTarget(elements, targetEl, state, () => {
      // 滚动结束后渲染连线
      if (state.activeMarker === markerItem && state.pendingTargetEl === targetEl) {
        renderLeaderLine(markerItem, targetEl, state)
      }
    })
  }
}

/**
 * 滚动内容面板到目标元素
 */
function scrollContentToTarget(elements, targetEl, state, callback) {
  const contentPanel = elements.contentPanel
  if (!contentPanel) {
    callback?.()
    return
  }

  // 计算目标元素相对于内容面板的位置
  const targetRect = targetEl.getBoundingClientRect()
  const panelRect = contentPanel.getBoundingClientRect()

  // 判断目标是否在可视区域内
  const isFullyVisible = (
    targetRect.top >= panelRect.top &&
    targetRect.bottom <= panelRect.bottom
  )

  if (isFullyVisible) {
    // 已经在可视区域，直接渲染连线
    callback?.()
    return
  }

  // 标记正在滚动
  state.isScrolling = true

  // 计算滚动位置
  const targetTop = targetEl.offsetTop
  const panelHeight = contentPanel.clientHeight
  const targetHeight = targetEl.offsetHeight

  // 居中显示
  const scrollTop = targetTop - (panelHeight / 2) + (targetHeight / 2)

  // 监听滚动结束
  const onScrollEnd = () => {
    state.isScrolling = false
    contentPanel.removeEventListener('scrollend', onScrollEnd)
    callback?.()
  }

  // 使用 scrollend 事件（现代浏览器支持）
  if ('onscrollend' in contentPanel) {
    contentPanel.addEventListener('scrollend', onScrollEnd, { once: true })
  } else {
    // 降级：使用防抖
    let scrollTimer = null
    const onScroll = () => {
      if (scrollTimer) clearTimeout(scrollTimer)
      scrollTimer = setTimeout(() => {
        state.isScrolling = false
        contentPanel.removeEventListener('scroll', onScroll)
        callback?.()
      }, 150)
    }
    contentPanel.addEventListener('scroll', onScroll, { passive: true })
  }

  // 执行滚动
  contentPanel.scrollTo({
    top: Math.max(0, scrollTop),
    behavior: 'smooth'
  })
}

/**
 * 渲染 LeaderLine 连线
 */
function renderLeaderLine(markerItem, targetEl, state) {
  // 如果正在滚动，跳过渲染
  if (state.isScrolling) return

  // 清除旧连线
  if (state.currentConnector) {
    try {
      state.currentConnector.line.remove()
    } catch (e) {}
    state.currentConnector = null
  }
  clearConnectors()

  // 创建新连线
  if (typeof window !== 'undefined' && window.LeaderLine) {
    try {
      const changeType = markerItem.classList.contains('add') ? 'add' :
                        markerItem.classList.contains('del') ? 'del' : 'modify'

      const color = changeType === 'add' ? '#1878E8' :
                   changeType === 'del' ? '#D32F2F' : '#E65100'

      state.currentConnector = createConnector(markerItem, targetEl, {
        color,
        size: 2,
        path: 'fluid',
        startPlug: 'disc',
        endPlug: 'arrow2'
      })
    } catch (e) {
      // 忽略连线创建错误
    }
  }
}

/**
 * 清除高亮
 */
function clearHighlight(elements, state) {
  elements.markersList.querySelectorAll('.active').forEach(el => {
    el.classList.remove('active')
  })

  const formEl = elements.formEl || elements.contentEl
  if (formEl) {
    formEl.querySelectorAll('.highlight').forEach(el => {
      el.classList.remove('highlight')
    })
  }

  if (state.currentConnector) {
    try {
      state.currentConnector.line.remove()
    } catch (e) {}
    state.currentConnector = null
  }
  clearConnectors()

  state.activeMarker = null
}

/**
 * 销毁渲染器
 */
function destroyRenderer(state, container) {
  // 清理定时器
  if (state.scrollTimeout) {
    clearTimeout(state.scrollTimeout)
    state.scrollTimeout = null
  }

  if (state.currentConnector) {
    try {
      state.currentConnector.line.remove()
    } catch (e) {}
  }
  clearConnectors()

  // 销毁弹窗
  if (popupInstance) {
    popupInstance.destroy()
    popupInstance = null
  }

  // 销毁资源预览
  if (resourcePreviewInstance) {
    resourcePreviewInstance.destroy()
    resourcePreviewInstance = null
  }

  // 清理 marker 存储
  if (container) {
    const markerElements = container.querySelectorAll('[data-style-diff]')
    markerElements.forEach(el => {
      el.removeEventListener('mouseenter', null)
      el.removeEventListener('mouseleave', null)
    })
  }

  markerStore.clear()
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
 * 截断文本
 */
function truncate(str, maxLen) {
  if (!str || str.length <= maxLen) return str
  return str.substring(0, maxLen) + '...'
}

/**
 * 截断 HTML 内容（保留标签结构）
 * @param {string} html - HTML 字符串
 * @param {number} maxLen - 最大文本长度
 * @returns {string}
 */
function truncateHtml(html, maxLen) {
  if (!html) return ''

  // 创建临时容器解析 HTML
  const temp = document.createElement('div')
  temp.innerHTML = html

  // 获取纯文本内容
  const text = temp.textContent || temp.innerText || ''

  // 如果文本长度在限制内，直接返回原 HTML
  if (text.length <= maxLen) {
    return html
  }

  // 截断文本并添加省略号
  const truncatedText = text.substring(0, maxLen) + '...'

  // 返回截断后的纯文本（保留差异标签样式）
  return `<span>${escapeHtml(truncatedText)}</span>`
}

export default defaultRenderer