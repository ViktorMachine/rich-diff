/**
 * 引擎管理模块
 * 支持多引擎切换
 */
import * as htmldiffEngine from './htmldiff.js'
import * as diffdomEngine from './diffdom.js'

// 引擎注册表
const engines = {
  'htmldiff': htmldiffEngine,
  'diffdom': diffdomEngine
}

// 当前使用的引擎
let currentEngine = 'htmldiff'

/**
 * 设置当前使用的对比引擎
 * @param {string} engine - 引擎名称
 */
export function setEngine(engine) {
  if (!engines[engine]) {
    const available = Object.keys(engines).join(', ')
    console.warn(`[rich-diff] 不支持的引擎: ${engine}，可用引擎: ${available}`)
    return false
  }
  currentEngine = engine
  console.log(`[rich-diff] 已切换到 ${engine} 引擎`)
  return true
}

/**
 * 获取当前引擎名称
 * @returns {string}
 */
export function getEngineName() {
  return currentEngine
}

/**
 * 获取当前引擎实例
 * @returns {Object}
 */
export function getEngine() {
  return engines[currentEngine]
}

/**
 * 获取所有可用引擎
 * @returns {string[]}
 */
export function getAvailableEngines() {
  return Object.keys(engines)
}

/**
 * 检查引擎是否存在
 * @param {string} engine - 引擎名称
 * @returns {boolean}
 */
export function hasEngine(engine) {
  return !!engines[engine]
}

export default {
  setEngine,
  getEngineName,
  getEngine,
  getAvailableEngines,
  hasEngine
}