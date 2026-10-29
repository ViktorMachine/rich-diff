/**
 * 默认渲染器
 * 支持多字段对比和表单布局展示
 */
import { diffHTML, diffText } from '../adapters/index.js'
import { generateMarkers } from '../markers/index.js'
import { createConnector, clearConnectors } from '../leader-line/index.js'

// 默认样式
const DEFAULT_STYLES = `
  .rich-diff-container {
    display: flex;
    height: 100%;
    min-height: 400px;
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
    background: #fff;
    border-right: 1px solid #e9ecef;
    overflow-y: auto;
    padding: 16px;
  }

  .rich-diff-markers-panel h3 {
    font-size: 14px;
    color: #666;
    margin: 0 0 12px 0;
    padding-bottom: 8px;
    border-bottom: 1px solid #eee;
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

  /* 右侧内容面板 */
  .rich-diff-content-panel {
    flex: 1;
    background: #fff;
    overflow-y: auto;
    padding: 20px;
  }

  .rich-diff-content-panel h3 {
    font-size: 14px;
    color: #666;
    margin: 0 0 12px 0;
    padding-bottom: 8px;
    border-bottom: 1px solid #eee;
  }

  /* 表单布局 */
  .rich-diff-form {
    max-width: 800px;
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
  .rich-diff-field-content ins,
  .rich-diff-field-content .diff-add,
  .rich-diff-field-content difftext[data-diff="add"] {
    color: #1878E8;
    background: #E8F4FF;
    text-decoration: none;
    padding: 1px 3px;
    border-radius: 2px;
  }

  .rich-diff-field-content del,
  .rich-diff-field-content .diff-del,
  .rich-diff-field-content difftext[data-diff="del"] {
    color: #D32F2F;
    background: #FFEBEE;
    text-decoration: line-through;
    padding: 1px 3px;
    border-radius: 2px;
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
      config = {}
    } = options

    // 新增：支持多字段对比
    const {
      oldData,       // 旧数据对象 { title, content, subtitle }
      newData,       // 新数据对象
      fields         // 字段配置 [{ label, field, sort }]
    } = options

    if (!container) {
      return diffResult || null
    }

    // 判断使用哪种模式
    if (oldData && newData && fields) {
      // 多字段对比模式
      return this.renderMultiFields(container, oldData, newData, fields, config)
    } else {
      // 单字段模式（兼容旧 API）
      return this.renderSingleField(container, oldContent, newContent, fieldName, diffResult, config)
    }
  },

  /**
   * 多字段对比渲染
   */
  renderMultiFields(container, oldData, newData, fields, config) {
    // 注入样式
    injectStyles(container)

    // 排序字段
    const sortedFields = [...fields].sort((a, b) => (a.sort || 0) - (b.sort || 0))

    // 对比所有字段
    const fieldResults = []
    const allMarkers = []

    sortedFields.forEach((fieldConfig, index) => {
      const { field, label } = fieldConfig
      const oldValue = oldData[field] || ''
      const newValue = newData[field] || ''

      // 判断是否为 HTML 内容（简单判断）
      const isHtml = isHtmlContent(oldValue) || isHtmlContent(newValue)

      // 执行对比
      const result = isHtml
        ? diffHTML(String(oldValue), String(newValue), field)
        : diffText(String(oldValue), String(newValue), field)

      // 直接生成标记（不依赖预定义字段），并获取带 ID 的 HTML
      const markers = createFieldMarkers(result.html, field, label, index)

      // 使用修改后的 HTML（带有 marker-id）
      const markedHtml = markers.html || result.html

      fieldResults.push({
        field,
        label,
        result: { ...result, html: markedHtml },
        markers,
        hasDiff: hasDifference(result.html, oldValue, newValue)
      })

      allMarkers.push(...markers)
    })

    // 渲染 UI
    const elements = renderFormLayout(container, fieldResults, allMarkers, config)

    // 绑定交互
    const state = bindInteractions(elements, allMarkers)

    return {
      container,
      fieldResults,
      markers: allMarkers,
      destroy: () => destroyRenderer(state)
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

    // 解析属性
    const diffTypeMatch = attrs.match(/data-diff="([^"]+)"/)
    const diffType = diffTypeMatch ? diffTypeMatch[1] : (tagType === 'ins' ? 'add' : 'del')

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

    const oldText = escapeHtml(marker.oldValue || '')
    const newText = escapeHtml(marker.newValue || '')

    return `
      <div class="rich-diff-marker-item ${typeClass}" data-marker-index="${index}" data-marker-id="${marker.id}" data-marker-field="${marker.field}">
        <div class="rich-diff-marker-header">
          <span class="rich-diff-marker-type ${typeClass}">${typeText}</span>
          <span class="rich-diff-marker-field">${marker.fieldLabel || marker.field}</span>
        </div>
        <div class="rich-diff-marker-content">
          ${oldText ? `<div class="old">- ${truncate(oldText, 60)}</div>` : ''}
          ${newText ? `<div class="new">+ ${truncate(newText, 60)}</div>` : ''}
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
function bindInteractions(elements, markers) {
  const state = {
    currentConnector: null,
    activeMarker: null
  }

  // 鼠标进入标记项
  elements.markersList.addEventListener('mouseenter', (e) => {
    const item = e.target.closest('.rich-diff-marker-item')
    if (!item) return

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
  }, true)

  // 鼠标离开标记项
  elements.markersList.addEventListener('mouseleave', (e) => {
    const item = e.target.closest('.rich-diff-marker-item')
    if (!item) return
    clearHighlight(elements, state)
  }, true)

  return state
}

/**
 * 高亮标记
 */
function highlightMarker(elements, markerItem, targetEl, state) {
  clearHighlight(elements, state)

  markerItem.classList.add('active')
  state.activeMarker = markerItem

  if (targetEl) {
    targetEl.classList.add('highlight')

    // 创建连线
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

    // 滚动到目标
    targetEl.scrollIntoView({ behavior: 'smooth', block: 'center' })
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
function destroyRenderer(state) {
  if (state.currentConnector) {
    try {
      state.currentConnector.line.remove()
    } catch (e) {}
  }
  clearConnectors()
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

export default defaultRenderer