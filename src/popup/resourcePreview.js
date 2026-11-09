/**
 * 资源预览弹窗
 */

// 弹窗实例
let previewInstance = null

// 样式
const PREVIEW_STYLES = `
  .resource-preview-popup {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.8);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 99999;
    opacity: 0;
    visibility: hidden;
    transition: opacity 0.2s, visibility 0.2s;
  }

  .resource-preview-popup.active {
    opacity: 1;
    visibility: visible;
  }

  .resource-preview-content {
    position: relative;
    max-width: 90vw;
    max-height: 90vh;
    background: #fff;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
  }

  .resource-preview-close {
    position: absolute;
    top: 10px;
    right: 10px;
    width: 36px;
    height: 36px;
    border: none;
    background: rgba(0, 0, 0, 0.5);
    color: white;
    border-radius: 50%;
    cursor: pointer;
    font-size: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1;
    transition: background 0.2s;
  }

  .resource-preview-close:hover {
    background: rgba(0, 0, 0, 0.7);
  }

  .resource-preview-image {
    max-width: 90vw;
    max-height: 90vh;
    display: block;
  }

  .resource-preview-video {
    max-width: 90vw;
    max-height: 80vh;
    display: block;
  }

  .resource-preview-nav {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 48px;
    height: 48px;
    border: none;
    background: rgba(0, 0, 0, 0.5);
    color: white;
    border-radius: 50%;
    cursor: pointer;
    font-size: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: background 0.2s;
  }

  .resource-preview-nav:hover {
    background: rgba(0, 0, 0, 0.7);
  }

  .resource-preview-nav.prev {
    left: 20px;
  }

  .resource-preview-nav.next {
    right: 20px;
  }

  .resource-preview-counter {
    position: absolute;
    bottom: 20px;
    left: 50%;
    transform: translateX(-50%);
    background: rgba(0, 0, 0, 0.6);
    color: white;
    padding: 6px 16px;
    border-radius: 20px;
    font-size: 14px;
  }
`

/**
 * 创建预览弹窗实例
 */
export function createResourcePreview() {
  if (previewInstance) {
    return previewInstance
  }

  // 注入样式
  const styleId = 'resource-preview-styles'
  if (!document.getElementById(styleId)) {
    const style = document.createElement('style')
    style.id = styleId
    style.textContent = PREVIEW_STYLES
    document.head.appendChild(style)
  }

  // 创建弹窗 DOM
  const popup = document.createElement('div')
  popup.className = 'resource-preview-popup'
  popup.innerHTML = `
    <div class="resource-preview-content">
      <button class="resource-preview-close" title="关闭">×</button>
      <button class="resource-preview-nav prev" style="display: none;">‹</button>
      <button class="resource-preview-nav next" style="display: none;">›</button>
      <div class="resource-preview-body"></div>
      <div class="resource-preview-counter" style="display: none;"></div>
    </div>
  `

  document.body.appendChild(popup)

  // 状态
  let currentUrls = []
  let currentIndex = 0
  let currentType = 'image'

  // 获取元素
  const closeBtn = popup.querySelector('.resource-preview-close')
  const prevBtn = popup.querySelector('.resource-preview-nav.prev')
  const nextBtn = popup.querySelector('.resource-preview-nav.next')
  const body = popup.querySelector('.resource-preview-body')
  const counter = popup.querySelector('.resource-preview-counter')

  // 关闭弹窗
  const close = () => {
    popup.classList.remove('active')
    // 停止视频播放
    const video = body.querySelector('video')
    if (video) {
      video.pause()
    }
  }

  // 显示指定索引的资源
  const showResource = (index) => {
    if (index < 0 || index >= currentUrls.length) return
    currentIndex = index

    const url = currentUrls[index]

    if (currentType === 'image') {
      body.innerHTML = `<img class="resource-preview-image" src="${escapeAttr(url)}" alt="预览图片" />`
    } else if (currentType === 'video') {
      body.innerHTML = `<video class="resource-preview-video" src="${escapeAttr(url)}" controls autoplay></video>`
    }

    // 更新计数器
    if (currentUrls.length > 1) {
      counter.textContent = `${index + 1} / ${currentUrls.length}`
      counter.style.display = 'block'
    } else {
      counter.style.display = 'none'
    }

    // 更新导航按钮
    prevBtn.style.display = currentUrls.length > 1 ? 'flex' : 'none'
    nextBtn.style.display = currentUrls.length > 1 ? 'flex' : 'none'

    prevBtn.disabled = index === 0
    nextBtn.disabled = index === currentUrls.length - 1
  }

  // 事件绑定
  closeBtn.addEventListener('click', close)
  prevBtn.addEventListener('click', () => showResource(currentIndex - 1))
  nextBtn.addEventListener('click', () => showResource(currentIndex + 1))

  // 点击背景关闭
  popup.addEventListener('click', (e) => {
    if (e.target === popup) {
      close()
    }
  })

  // 键盘控制
  const handleKeydown = (e) => {
    if (!popup.classList.contains('active')) return

    switch (e.key) {
      case 'Escape':
        close()
        break
      case 'ArrowLeft':
        showResource(currentIndex - 1)
        break
      case 'ArrowRight':
        showResource(currentIndex + 1)
        break
    }
  }
  document.addEventListener('keydown', handleKeydown)

  // 实例方法
  const instance = {
    /**
     * 显示预览
     * @param {string|string[]} urls - 资源 URL 或 URL 数组
     * @param {string} type - 资源类型: 'image' | 'video'
     * @param {number} startIndex - 初始显示索引
     */
    show(urls, type = 'image', startIndex = 0) {
      currentType = type
      currentUrls = Array.isArray(urls) ? urls : [urls]
      currentIndex = Math.max(0, Math.min(startIndex, currentUrls.length - 1))

      showResource(currentIndex)
      popup.classList.add('active')
    },

    /**
     * 关闭预览
     */
    hide() {
      close()
    },

    /**
     * 销毁实例
     */
    destroy() {
      document.removeEventListener('keydown', handleKeydown)
      popup.remove()
      previewInstance = null
    }
  }

  previewInstance = instance
  return instance
}

/**
 * 获取预览实例
 */
export function getResourcePreview() {
  if (!previewInstance) {
    return createResourcePreview()
  }
  return previewInstance
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
  createResourcePreview,
  getResourcePreview
}