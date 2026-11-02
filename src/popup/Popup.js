/**
 * 弹窗组件
 * 用于展示样式变更的新旧对比
 */

/**
 * 创建弹窗实例
 * @param {Object} options - 配置选项
 * @returns {Object} 弹窗实例
 */
export function createPopup(options = {}) {
  const popupElement = createPopupElement()
  let isVisible = false
  let currentMarker = null

  /**
   * 显示弹窗
   * @param {HTMLElement} targetElement - 目标元素（marker）
   * @param {Object} marker - marker 数据
   */
  function show(targetElement, marker) {
    if (!marker.styleChanges) return

    currentMarker = marker
    renderContent(marker.styleChanges)
    positionPopup(targetElement)
    popupElement.classList.add('visible')
    isVisible = true
  }

  /**
   * 隐藏弹窗
   */
  function hide() {
    popupElement.classList.remove('visible')
    isVisible = false
    currentMarker = null
  }

  /**
   * 定位弹窗
   * @param {HTMLElement} targetElement - 目标元素
   */
  function positionPopup(targetElement) {
    const targetRect = targetElement.getBoundingClientRect()
    const popupRect = popupElement.getBoundingClientRect()
    const viewport = {
      width: window.innerWidth,
      height: window.innerHeight,
      scrollX: window.scrollX,
      scrollY: window.scrollY
    }

    // 计算位置（优先级：右侧 > 左侧 > 上方 > 下方）
    const positions = [
      {
        name: 'right',
        x: targetRect.right + 10,
        y: targetRect.top
      },
      {
        name: 'left',
        x: targetRect.left - popupRect.width - 10,
        y: targetRect.top
      },
      {
        name: 'top',
        x: targetRect.left,
        y: targetRect.top - popupRect.height - 10
      },
      {
        name: 'bottom',
        x: targetRect.left,
        y: targetRect.bottom + 10
      }
    ]

    let selectedPosition = positions[0]

    // 选择第一个不超出视口的位置
    for (const pos of positions) {
      if (isInViewport(pos, popupRect, viewport)) {
        selectedPosition = pos
        break
      }
    }

    // 应用位置
    let finalX = selectedPosition.x + viewport.scrollX
    let finalY = selectedPosition.y + viewport.scrollY

    // 确保不超出视口
    const maxX = viewport.width - popupRect.width
    const maxY = viewport.height - popupRect.height

    if (finalX > maxX + viewport.scrollX) {
      finalX = maxX + viewport.scrollX
    }
    if (finalX < viewport.scrollX) {
      finalX = viewport.scrollX
    }
    if (finalY > maxY + viewport.scrollY) {
      finalY = maxY + viewport.scrollY
    }
    if (finalY < viewport.scrollY) {
      finalY = viewport.scrollY
    }

    popupElement.style.left = `${finalX}px`
    popupElement.style.top = `${finalY}px`
  }

  /**
   * 检查位置是否在视口内
   */
  function isInViewport(pos, popupRect, viewport) {
    return pos.x >= 0 &&
           pos.x + popupRect.width <= viewport.width &&
           pos.y >= 0 &&
           pos.y + popupRect.height <= viewport.height
  }

  /**
   * 渲染弹窗内容
   * @param {Object} styleChanges - 样式变更数据
   */
  function renderContent(styleChanges) {
    const content = popupElement.querySelector('.rich-diff-popup-content')

    // 创建双面板
    const panelsHTML = `
      <div class="rich-diff-popup-panels">
        <div class="rich-diff-popup-panel">
          <div class="rich-diff-popup-panel-title">旧版本</div>
          <div class="rich-diff-popup-panel-content" id="popup-old-panel"></div>
        </div>
        <div class="rich-diff-popup-panel">
          <div class="rich-diff-popup-panel-title">新版本</div>
          <div class="rich-diff-popup-panel-content" id="popup-new-panel"></div>
        </div>
      </div>
    `

    // 创建差异详情
    const detailsHTML = renderDiffDetails(styleChanges.diffDetails)

    content.innerHTML = panelsHTML + detailsHTML

    // 渲染双面板内容
    renderPanelContent('popup-old-panel', styleChanges.elements, 'oldHtml')
    renderPanelContent('popup-new-panel', styleChanges.elements, 'newHtml')
  }

  /**
   * 渲染面板内容
   * @param {string} panelId - 面板 ID
   * @param {Array} elements - 元素列表
   * @param {string} htmlKey - HTML 字段名
   */
  function renderPanelContent(panelId, elements, htmlKey) {
    const panel = document.getElementById(panelId)
    if (!panel) return

    panel.innerHTML = ''

    for (const element of elements) {
      const container = document.createElement('div')
      container.style.marginBottom = '8px'

      // 使用 ShadowDOM 隔离样式
      const shadow = container.attachShadow({ mode: 'open' })
      shadow.innerHTML = element[htmlKey]

      panel.appendChild(container)
    }
  }

  /**
   * 渲染差异详情
   * @param {Object} diffDetails - 差异详情
   * @returns {string} HTML 字符串
   */
  function renderDiffDetails(diffDetails) {
    if (!diffDetails) return ''

    const items = []

    // 新增属性
    for (const item of diffDetails.added) {
      items.push(`
        <li class="rich-diff-popup-details-item added">
          <span class="rich-diff-popup-property">${item.property}</span>
          <span class="rich-diff-popup-arrow">+</span>
          <span>${item.value}</span>
        </li>
      `)
    }

    // 删除属性
    for (const item of diffDetails.removed) {
      items.push(`
        <li class="rich-diff-popup-details-item removed">
          <span class="rich-diff-popup-property">${item.property}</span>
          <span class="rich-diff-popup-arrow">-</span>
          <span>${item.value}</span>
        </li>
      `)
    }

    // 修改属性
    for (const item of diffDetails.changed) {
      items.push(`
        <li class="rich-diff-popup-details-item changed">
          <span class="rich-diff-popup-property">${item.property}</span>
          <span>${item.oldValue}</span>
          <span class="rich-diff-popup-arrow">→</span>
          <span>${item.newValue}</span>
        </li>
      `)
    }

    if (items.length === 0) return ''

    return `
      <div class="rich-diff-popup-details">
        <div class="rich-diff-popup-details-title">变更详情</div>
        <ul class="rich-diff-popup-details-list">
          ${items.join('')}
        </ul>
      </div>
    `
  }

  /**
   * 销毁弹窗
   */
  function destroy() {
    if (popupElement.parentElement) {
      popupElement.parentElement.removeChild(popupElement)
    }
  }

  return {
    element: popupElement,
    show,
    hide,
    destroy,
    get isVisible() {
      return isVisible
    }
  }
}

/**
 * 创建弹窗 DOM 元素
 * @returns {HTMLElement}
 */
function createPopupElement() {
  const popup = document.createElement('div')
  popup.className = 'rich-diff-popup'
  popup.innerHTML = `
    <div class="rich-diff-popup-header">
      <span class="rich-diff-popup-title">样式变更</span>
    </div>
    <div class="rich-diff-popup-content"></div>
  `

  // 注入样式
  injectStyles()

  // 添加到 body
  document.body.appendChild(popup)

  return popup
}

/**
 * 注入弹窗样式
 */
let stylesInjected = false
function injectStyles() {
  if (stylesInjected) return

  const styleText = `
.rich-diff-popup{position:absolute;z-index:10000;background:#fff;border:1px solid #e0e0e0;border-radius:8px;box-shadow:0 4px 20px rgba(0,0,0,.15);max-width:800px;min-width:400px;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,sans-serif;font-size:14px;opacity:0;transition:opacity .2s ease-in-out;pointer-events:none}.rich-diff-popup.visible{opacity:1;pointer-events:auto}.rich-diff-popup-header{padding:12px 16px;border-bottom:1px solid #e0e0e0;font-weight:600;color:#333}.rich-diff-popup-content{padding:16px;max-height:400px;overflow-y:auto}.rich-diff-popup-panels{display:flex;gap:16px;margin-bottom:16px}.rich-diff-popup-panel{flex:1;border:1px solid #e0e0e0;border-radius:4px;overflow:hidden}.rich-diff-popup-panel-title{padding:8px 12px;background:#f5f5f5;font-size:12px;font-weight:600;color:#666;text-transform:uppercase}.rich-diff-popup-panel-content{padding:12px;min-height:60px;max-height:200px;overflow-y:auto;background:#fafafa}.rich-diff-popup-details{border-top:1px solid #e0e0e0;padding-top:12px}.rich-diff-popup-details-title{font-size:12px;font-weight:600;color:#666;margin-bottom:8px}.rich-diff-popup-details-list{list-style:none;padding:0;margin:0}.rich-diff-popup-details-item{padding:6px 0;font-size:13px;color:#333;display:flex;align-items:center;gap:8px}.rich-diff-popup-details-item.added{color:#1878E8}.rich-diff-popup-details-item.removed{color:#D32F2F}.rich-diff-popup-details-item.changed{color:#F5A623}.rich-diff-popup-property{font-weight:600;min-width:80px}.rich-diff-popup-arrow{color:#999}@media (max-width:600px){.rich-diff-popup{max-width:90vw;min-width:280px}.rich-diff-popup-panels{flex-direction:column}}
`

  const style = document.createElement('style')
  style.textContent = styleText
  document.head.appendChild(style)

  stylesInjected = true
}

export default {
  createPopup
}