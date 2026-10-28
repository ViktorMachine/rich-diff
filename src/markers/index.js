/**
 * 展示层入口
 */
import { generateMarkers, sortMarkers } from './generator.js'
import {
  getDiffRanges,
  hasDiffMarkers,
  detectChangeType,
  extractDiffMarkers,
  findElementById,
  cleanContent
} from './parser.js'
import { extractTextMarkers } from './textExtractor.js'
import { extractHTMLMarkers } from './htmlExtractor.js'
import { extractMediaMarkers } from './mediaExtractor.js'
import { extractCustomMarkers } from './customExtractor.js'

export {
  generateMarkers,
  sortMarkers,
  getDiffRanges,
  hasDiffMarkers,
  detectChangeType,
  extractDiffMarkers,
  findElementById,
  cleanContent,
  extractTextMarkers,
  extractHTMLMarkers,
  extractMediaMarkers,
  extractCustomMarkers
}

export default {
  generateMarkers,
  sortMarkers,
  getDiffRanges,
  hasDiffMarkers,
  detectChangeType
}