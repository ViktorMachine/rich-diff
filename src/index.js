/**
 * rich-diff - 可扩展的富文本对比框架
 *
 * API 分层：
 * - 引擎层：多引擎支持（htmldiff / diffdom）
 * - 适配器层：统一输出格式（ShadowDOM 降级兼容）
 * - 工具层：业务对比（字段、媒体、自定义字段）
 * - 展示层：标记提取、LeaderLine 连线
 */

// ── 引擎层 ──
import {
  setEngine,
  getEngineName,
  getEngine,
  getAvailableEngines,
  hasEngine
} from './engines/index.js'

// ── 适配器层 ──
import {
  diffHTML,
  diffText,
  resetAllCounters
} from './adapters/index.js'

// ── 工具层 ──
import {
  diffField,
  diffPriority,
  diffFixedFields,
  diffMediaList,
  diffDocFile,
  parseDocFile,
  extractMediaChanges,
  diffCustomFields,
  diffCustomField,
  computeArticleDiff
} from './diff/index.js'

// ── 展示层 ──
import {
  generateMarkers,
  sortMarkers,
  getDiffRanges,
  hasDiffMarkers,
  detectChangeType,
  extractDiffMarkers,
  findElementById,
  cleanContent
} from './markers/index.js'

// ── 渲染器 ──
import {
  render,
  setRenderer,
  getRenderer,
  defaultRenderer
} from './renderers/index.js'

// ── LeaderLine ──
import {
  createConnector,
  createConnectorFromMarker,
  createConnectors,
  removeConnector,
  clearConnectors,
  updateConnector,
  updateAllConnectors,
  getConnectorCount,
  isLeaderLineAvailable
} from './leader-line/index.js'

// ── 常量 ──
import {
  ErrorTypes,
  DefaultConfig,
  MediaTypes,
  ChangeTypes
} from './utils/constants.js'

// ── 导出 ──
export {
  // 引擎层
  setEngine,
  getEngineName,
  getEngine,
  getAvailableEngines,
  hasEngine,
  // 适配器层
  diffHTML,
  diffText,
  resetAllCounters,
  // 工具层
  diffField,
  diffPriority,
  diffFixedFields,
  diffMediaList,
  diffDocFile,
  parseDocFile,
  extractMediaChanges,
  diffCustomFields,
  diffCustomField,
  computeArticleDiff,
  // 展示层
  generateMarkers,
  sortMarkers,
  getDiffRanges,
  hasDiffMarkers,
  detectChangeType,
  extractDiffMarkers,
  findElementById,
  cleanContent,
  // 渲染器
  render,
  setRenderer,
  getRenderer,
  defaultRenderer,
  // LeaderLine
  createConnector,
  createConnectorFromMarker,
  createConnectors,
  removeConnector,
  clearConnectors,
  updateConnector,
  updateAllConnectors,
  getConnectorCount,
  isLeaderLineAvailable,
  // 常量
  ErrorTypes,
  DefaultConfig,
  MediaTypes,
  ChangeTypes
}

// ── 便捷方法 ──

/**
 * 使用指定引擎对比 HTML 内容
 * @param {string} engine - 引擎名称
 * @param {string} oldHtml - 旧 HTML
 * @param {string} newHtml - 新 HTML
 * @param {string} fieldName - 字段名称
 * @returns {Object} { html, useShadowDOM, markers }
 */
export function diffWithEngine(engine, oldHtml, newHtml, fieldName) {
  setEngine(engine)
  return diffHTML(oldHtml, newHtml, fieldName)
}

// 默认导出
export default {
  // 引擎层
  setEngine,
  getEngineName,
  getAvailableEngines,
  // 适配器层
  diffHTML,
  diffText,
  // 工具层
  computeArticleDiff,
  diffMediaList,
  diffCustomFields,
  // 展示层
  generateMarkers,
  sortMarkers,
  // 渲染器
  render,
  setRenderer,
  // LeaderLine
  createConnector,
  clearConnectors,
  // 便捷
  diffWithEngine
}