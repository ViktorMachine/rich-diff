/**
 * 默认渲染器
 * 实现 marker-viewer.html 的展示效果
 */
import { diffHTML } from '../adapters/index.js'
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
  }

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

  .rich-diff-content {
    font-size: 14px;
    line-height: 1.8;
  }

  .rich-diff-content ins,
  .rich-diff-content .diff-add,
  .rich-diff-content difftext[data-diff="add"] {
    color: #1878E8;
    background: #E8F4FF;
    text-decoration: none;
    padding: 1px 3px;
    border-radius: 2px;
  }

  .rich-diff-content del,
  .rich-diff-content .diff-del,
  .rich-diff-content difftext[data-diff="del"] {
    color: #D32F2F;
    background: #FFEBEE;
    text-decoration: line-through;
    padding: 1px 3px;
    border-radius: 2px;
  }

  .rich-diff-content .highlight {
    box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.4);
  }

  .rich-diff-empty {
    text-align: center;
    color: #999;
    padding: 40px 20px;
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
      oldContent = '',
      newContent = '',
      fieldName = 'content',
      diffResult,
      config = {}
    } = options

    if (!container) {
      return diffResult || null
    }

    // 获取或创建对比结果
    const result = diffResult || diffHTML(oldContent, newContent, fieldName)
    if (!result) {
      container.innerHTML = '<div class="rich-diff-empty">无对比结果</div>'
      return { container, html: '', markers: [] }
    }

    // 生成标记
    const markers = generateMarkers({
      diffed: { [fieldName]: result.html },
      last: { [fieldName]: oldContent },
      current: { [fieldName]: newContent }
    })

    // 注入样式
    injectStyles(container)

    // 渲染 UI
    const elements = renderUI(container, result, markers, fieldName, config)

    // 绑定交互
    const state = bindInteractions(elements, markers, result.html)

    // 返回结果和销毁方法
    return {
      container,
      html: result.html,
      markers,
      destroy: () => destroyRenderer(state)
    }
  }
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
 * 渲染 UI 结构
 */
function renderUI(container, result, markers, fieldName, config) {
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

  // 右侧内容面板
  const contentPanel = document.createElement('div')
  contentPanel.className = 'rich-diff-content-panel'
  contentPanel.innerHTML = `
    <h3>对比结果</h3>
    <div class="rich-diff-content">${result.html || '<div class="rich-diff-empty">无差异</div>'}</div>
  `

  container.appendChild(markersPanel)
  container.appendChild(contentPanel)

  // 渲染标记列表
  renderMarkersList(markersPanel.querySelector('.rich-diff-markers-list'), markers)

  // 更新统计
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
      <div class="rich-diff-marker-item ${typeClass}" data-marker-index="${index}" data-marker-id="${marker.id}">
        <div class="rich-diff-marker-header">
          <span class="rich-diff-marker-type ${typeClass}">${typeText}</span>
          <span class="rich-diff-marker-field">${marker.fieldLabel || marker.field || '内容'}</span>
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
 * 绑定交互事件
 */
function bindInteractions(elements, markers, diffHtml) {
  const state = {
    currentConnector: null,
    activeMarker: null
  }

  // 鼠标进入标记项
  elements.markersList.addEventListener('mouseenter', (e) => {
    const item = e.target.closest('.rich-diff-marker-item')
    if (!item) return

    const index = parseInt(item.dataset.markerIndex, 10)
    const marker = markers[index]
    if (!marker) return

    highlightMarker(elements, item, marker, state)
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
function highlightMarker(elements, markerItem, marker, state) {
  clearHighlight(elements, state)

  markerItem.classList.add('active')
  state.activeMarker = markerItem

  // 查找目标元素
  const targetEl = findTargetElement(elements.contentEl, marker)
  if (!targetEl) return

  targetEl.classList.add('highlight')

  // 创建连线
  if (window.LeaderLine) {
    try {
      const color = marker.changeType === 'add' ? '#1878E8' :
                    marker.changeType === 'del' ? '#D32F2F' : '#E65100'

      state.currentConnector = createConnector(markerItem, targetEl, {
        color,
        size: 2,
        path: 'fluid',
        startPlug: 'disc',
        endPlug: 'arrow2'
      })
    } catch (e) {
      console.warn('[rich-diff] 创建连线失败:', e)
    }
  }

  // 滚动到目标
  targetEl.scrollIntoView({ behavior: 'smooth', block: 'center' })
}

/**
 * 清除高亮
 */
function clearHighlight(elements, state) {
  // 移除标记项高亮
  elements.markersList.querySelectorAll('.active').forEach(el => {
    el.classList.remove('active')
  })

  // 移除内容高亮
  elements.contentEl.querySelectorAll('.highlight').forEach(el => {
    el.classList.remove('highlight')
  })

  // 清除连线
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
 * 查找目标元素
 */
function findTargetElement(contentEl, marker) {
  // 优先通过选择器查找
  if (marker.targetSelector) {
    const el = contentEl.querySelector(marker.targetSelector)
    if (el) return el
  }

  // 通过 diff ID 查找
  if (marker.diffIds && marker.diffIds.length > 0) {
    const el = contentEl.querySelector(`[data-diff-id="${marker.diffIds[0]}"]`)
    if (el) return el
  }

  // 通过标记 ID 查找
  if (marker.id) {
    const el = contentEl.querySelector(`[data-diff-id="${marker.id}"]`)
    if (el) return el
  }

  return null
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