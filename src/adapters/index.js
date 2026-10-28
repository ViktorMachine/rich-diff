/**
 * 适配器层入口
 */
import { diffHTML, resetCounters as resetHtmlCounters } from './html.js'
import { diffText, resetCounters as resetTextCounters } from './text.js'

/**
 * 重置所有计数器
 */
export function resetAllCounters() {
  resetHtmlCounters()
  resetTextCounters()
}

export {
  diffHTML,
  diffText
}

export default {
  diffHTML,
  diffText,
  resetAllCounters
}