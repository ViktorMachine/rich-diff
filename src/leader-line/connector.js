/**
 * LeaderLine 连接器封装
 * 用于在差异标记和原文之间绘制连线
 */
import './leader-line.min.js'

// LeaderLine 全局引用
const LeaderLine = window.LeaderLine

/**
 * 连接器实例存储
 */
const connectors = new Map()

/**
 * 创建连线
 * @param {Element} startElement - 起始元素
 * @param {Element} endElement - 结束元素
 * @param {Object} options - 配置选项
 * @returns {Object} 连接器实例
 */
export function createConnector(startElement, endElement, options = {}) {
  if (!LeaderLine) {
    console.warn('[rich-diff] LeaderLine 未加载')
    return null
  }

  if (!startElement || !endElement) {
    console.warn('[rich-diff] 起始或结束元素不存在')
    return null
  }

  const defaultOptions = {
    color: '#1878E8',
    size: 2,
    path: 'fluid',
    startPlug: 'disc',
    endPlug: 'disc',
    startPlugSize: 1.5,
    endPlugSize: 1.5,
    outline: false,
    dash: false
  }

  const mergedOptions = { ...defaultOptions, ...options }

  try {
    const line = new LeaderLine(startElement, endElement, mergedOptions)

    // 存储实例
    const id = `connector-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`
    connectors.set(id, line)

    return { id, line }
  } catch (error) {
    console.warn('[rich-diff] 创建连线失败:', error)
    return null
  }
}

/**
 * 根据标记创建连线
 * @param {Marker} marker - 变更标记
 * @param {Element} container - 容器元素
 * @param {Object} options - 配置选项
 * @returns {Object|null}
 */
export function createConnectorFromMarker(marker, container, options = {}) {
  if (!marker || !marker.targetSelector) {
    return null
  }

  // 查找目标元素
  const targetElement = container.querySelector(marker.targetSelector)
  if (!targetElement) {
    console.warn(`[rich-diff] 未找到目标元素: ${marker.targetSelector}`)
    return null
  }

  // 查找对应的标记面板元素（假设有 data-marker-id 属性）
  const panelElement = container.querySelector(`[data-marker-id="${marker.id}"]`)
  if (!panelElement) {
    return null
  }

  return createConnector(panelElement, targetElement, options)
}

/**
 * 批量创建连线
 * @param {Marker[]} markers - 标记列表
 * @param {Element} container - 容器元素
 * @param {Object} options - 配置选项
 * @returns {Object[]} 连接器列表
 */
export function createConnectors(markers, container, options = {}) {
  const results = []

  markers.forEach(marker => {
    const connector = createConnectorFromMarker(marker, container, options)
    if (connector) {
      results.push(connector)
    }
  })

  return results
}

/**
 * 移除连线
 * @param {string} id - 连接器 ID
 */
export function removeConnector(id) {
  const line = connectors.get(id)
  if (line) {
    try {
      line.remove()
    } catch (e) {
      // 忽略移除错误
    }
    connectors.delete(id)
  }
}

/**
 * 清除所有连线
 */
export function clearConnectors() {
  connectors.forEach((line, id) => {
    try {
      line.remove()
    } catch (e) {
      // 忽略移除错误
    }
  })
  connectors.clear()
}

/**
 * 更新连线位置
 * @param {string} id - 连接器 ID
 */
export function updateConnector(id) {
  const line = connectors.get(id)
  if (line && line.position) {
    try {
      line.position()
    } catch (e) {
      // 忽略更新错误
    }
  }
}

/**
 * 更新所有连线位置
 */
export function updateAllConnectors() {
  connectors.forEach((line, id) => {
    updateConnector(id)
  })
}

/**
 * 获取连接器数量
 * @returns {number}
 */
export function getConnectorCount() {
  return connectors.size
}

/**
 * 检查 LeaderLine 是否可用
 * @returns {boolean}
 */
export function isLeaderLineAvailable() {
  return !!LeaderLine
}

export default {
  createConnector,
  createConnectorFromMarker,
  createConnectors,
  removeConnector,
  clearConnectors,
  updateConnector,
  updateAllConnectors,
  getConnectorCount,
  isLeaderLineAvailable
}