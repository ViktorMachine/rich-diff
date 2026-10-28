/**
 * 渲染器模块
 * 提供默认渲染器和自定义渲染器支持
 */
import { defaultRenderer } from './default.js'

// 默认渲染器实例
let currentRenderer = defaultRenderer

/**
 * 设置自定义渲染器
 * @param {Object} renderer - 渲染器对象，需实现 render 方法
 */
export function setRenderer(renderer) {
  if (renderer && typeof renderer.render === 'function') {
    currentRenderer = renderer
  } else {
    console.warn('[rich-diff] 无效的渲染器，使用默认渲染器')
    currentRenderer = defaultRenderer
  }
}

/**
 * 获取当前渲染器
 * @returns {Object} 当前渲染器
 */
export function getRenderer() {
  return currentRenderer
}

/**
 * 渲染对比结果
 * @param {Object} options - 渲染选项
 * @param {HTMLElement} options.container - 渲染目标容器（可选）
 * @param {string} options.oldContent - 旧内容
 * @param {string} options.newContent - 新内容
 * @param {string} options.fieldName - 字段名称（默认 'content'）
 * @param {Object} options.diffResult - 已有的对比结果（可选，优先使用）
 * @param {Object} options.rendererConfig - 渲染器配置（可选）
 * @returns {Object} { html, markers, container } - 若传入容器则已渲染，否则返回原始数据
 */
export function render(options = {}) {
  const {
    container,
    oldContent,
    newContent,
    fieldName = 'content',
    diffResult,
    rendererConfig
  } = options

  // 如果不传容器，返回原始数据供用户自行渲染
  if (!container) {
    return diffResult || null
  }

  // 传了容器，使用渲染器渲染
  return currentRenderer.render({
    container,
    oldContent,
    newContent,
    fieldName,
    diffResult,
    config: rendererConfig
  })
}

export { defaultRenderer }
export default { render, setRenderer, getRenderer }