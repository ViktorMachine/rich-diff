/**
 * 弹窗组件
 * 用于展示样式变更的新旧版本对比
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

    // 计算位置（优先级：左侧 > 下方 > 右侧 > 上方）
    const positions = [
      { name: 'left', x: targetRect.left - popupRect.width - 10, y: targetRect.top },
      { name: 'bottom', x: targetRect.left, y: targetRect.bottom + 10 },
      { name: 'right', x: targetRect.right + 10, y: targetRect.top },
      { name: 'top', x: targetRect.left, y: targetRect.top - popupRect.height - 10 }
    ]

    let selectedPosition = positions[0]

    for (const pos of positions) {
      if (isInViewport(pos, popupRect, viewport)) {
        selectedPosition = pos
        break
      }
    }

    let finalX = selectedPosition.x + viewport.scrollX
    let finalY = selectedPosition.y + viewport.scrollY

    const maxX = viewport.width - popupRect.width
    const maxY = viewport.height - popupRect.height

    if (finalX > maxX + viewport.scrollX) finalX = maxX + viewport.scrollX
    if (finalX < viewport.scrollX) finalX = viewport.scrollX
    if (finalY > maxY + viewport.scrollY) finalY = maxY + viewport.scrollY
    if (finalY < viewport.scrollY) finalY = viewport.scrollY

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

    content.innerHTML = `
      <div class="rich-diff-popup-panels">
        <div class="rich-diff-popup-panel">
          <div class="rich-diff-popup-panel-title old-version">旧版本</div>
          <div class="rich-diff-popup-panel-content" id="popup-old-panel"></div>
        </div>
        <div class="rich-diff-popup-panel">
          <div class="rich-diff-popup-panel-title new-version">新版本</div>
          <div class="rich-diff-popup-panel-content" id="popup-new-panel"></div>
        </div>
      </div>
    `

    // 渲染面板内容
    if (styleChanges.elements && styleChanges.elements.length > 0) {
      renderPanelContent('popup-old-panel', styleChanges.elements, 'oldHtml')
      renderPanelContent('popup-new-panel', styleChanges.elements, 'newHtml')
    }
  }

  /**
   * 渲染面板内容
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
    get isVisible() { return isVisible }
  }
}

/**
 * 创建弹窗 DOM 元素
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

  injectStyles()
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
.rich-diff-popup {
  position: absolute;
  z-index: 10000;
  background: #fff;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  box-shadow: 0 4px 20px rgba(0,0,0,.15);
  max-width: 600px;
  min-width: 320px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  font-size: 14px;
  opacity: 0;
  transition: opacity .15s ease-in-out;
  pointer-events: none;
}
.rich-diff-popup.visible {
  opacity: 1;
  pointer-events: auto;
}
.rich-diff-popup-header {
  padding: 10px 14px;
  border-bottom: 1px solid #e0e0e0;
  font-weight: 600;
  color: #333;
  background: #fafafa;
  border-radius: 8px 8px 0 0;
}
.rich-diff-popup-content {
  padding: 12px;
}
/* 样式对比面板 */
.rich-diff-popup-panels {
  display: flex;
  gap: 12px;
}
.rich-diff-popup-panel {
  flex: 1;
  border: 1px solid #e0e0e0;
  border-radius: 6px;
  overflow: hidden;
}
.rich-diff-popup-panel-title {
  padding: 6px 10px;
  font-size: 12px;
  font-weight: 600;
  text-align: center;
}
.rich-diff-popup-panel-title.old-version {
  background: #ffebee;
  color: #c62828;
}
.rich-diff-popup-panel-title.new-version {
  background: #e3f2fd;
  color: #1565c0;
}
.rich-diff-popup-panel-content {
  padding: 12px;
  min-height: 50px;
  max-height: 200px;
  overflow-y: auto;
  background: #fafafa;
}
/* 响应式 */
@media (max-width: 600px) {
  .rich-diff-popup {
    max-width: 90vw;
    min-width: 280px;
  }
  .rich-diff-popup-panels {
    flex-direction: column;
  }
}
`

  const style = document.createElement('style')
  style.textContent = styleText
  document.head.appendChild(style)

  stylesInjected = true
}

export default { createPopup }