/**
 * 使用 Node.js 原生 ESM 测试 rich-diff 核心功能
 */
import htmldiffModule from 'htmldiff-js'
import { DiffDOM } from 'diff-dom'

// 处理 htmldiff-js 的 CommonJS 导出
const HtmlDiff = htmldiffModule.default || htmldiffModule

// 挂载到 window 以模拟浏览器环境
global.window = {
  HtmlDiff,
  DiffDOM
}

// 直接导入各模块
import { setEngine, getEngineName, getAvailableEngines } from '../src/engines/index.js'
import { diffHTML, diffText } from '../src/adapters/index.js'
import { generateMarkers, sortMarkers, hasDiffMarkers, detectChangeType } from '../src/markers/index.js'
import { diffMediaList } from '../src/diff/media.js'

console.log('=== rich-diff 功能测试 ===\n')

let passCount = 0
let failCount = 0

function test(name, fn) {
  try {
    const result = fn()
    if (result) {
      console.log(`[PASS] ${name}`)
      passCount++
    } else {
      console.log(`[FAIL] ${name}`)
      failCount++
    }
  } catch (e) {
    console.log(`[FAIL] ${name}: ${e.message}`)
    failCount++
  }
}

// 1. 模块导入测试
console.log('\n--- 模块导入测试 ---')
test('导入 setEngine', () => typeof setEngine === 'function')
test('导入 getEngineName', () => typeof getEngineName === 'function')
test('导入 getAvailableEngines', () => typeof getAvailableEngines === 'function')
test('导入 diffHTML', () => typeof diffHTML === 'function')
test('导入 diffText', () => typeof diffText === 'function')
test('导入 generateMarkers', () => typeof generateMarkers === 'function')
test('导入 diffMediaList', () => typeof diffMediaList === 'function')
test('导入 hasDiffMarkers', () => typeof hasDiffMarkers === 'function')
test('导入 detectChangeType', () => typeof detectChangeType === 'function')

// 2. 纯文本对比测试
console.log('\n--- 纯文本对比测试 ---')
test('diffText - 基本文本对比', () => {
  const result = diffText('旧标题', '新标题', 'title')
  return result.html.length > 0
})

test('diffText - 返回 markers', () => {
  const result = diffText('旧标题', '新标题', 'title')
  return Array.isArray(result.markers) && result.markers.length > 0
})

test('diffText - 返回 useShadowDOM', () => {
  const result = diffText('旧标题', '新标题', 'title')
  return typeof result.useShadowDOM === 'boolean'
})

test('diffText - 相同文本无差异', () => {
  const result = diffText('相同文本', '相同文本', 'title')
  return result.html === '相同文本' && result.markers.length === 0
})

test('diffText - 空旧值处理', () => {
  const result = diffText('', '新文本', 'title')
  return result.html.includes('新文本')
})

test('diffText - data-diff 属性', () => {
  const result = diffText('旧', '新', 'title')
  return result.html.includes('data-diff=') && result.html.includes('data-diff-id=')
})

// 3. HTML 对比测试
console.log('\n--- HTML 对比测试 ---')
test('diffHTML - 基本 HTML 对比', () => {
  const result = diffHTML('<p>旧内容</p>', '<p>新内容</p>', 'content')
  return result.html.length > 0
})

test('diffHTML - 返回 markers', () => {
  const result = diffHTML('<p>旧内容</p>', '<p>新内容</p>', 'content')
  return Array.isArray(result.markers)
})

test('diffHTML - 相同 HTML 无差异', () => {
  const result = diffHTML('<p>相同内容</p>', '<p>相同内容</p>', 'content')
  return result.html === '<p>相同内容</p>'
})

test('diffHTML - 复杂 HTML 对比', () => {
  const result = diffHTML(
    '<div><h1>旧标题</h1><p>旧段落</p></div>',
    '<div><h1>新标题</h1><p>新段落</p></div>',
    'content'
  )
  return result.html.length > 0
})

test('diffHTML - data-diff 属性', () => {
  const result = diffHTML('<p>旧</p>', '<p>新</p>', 'content')
  return result.html.includes('data-diff=') && result.html.includes('data-diff-id=')
})

// 4. 引擎切换测试
console.log('\n--- 引擎切换测试 ---')
test('getAvailableEngines - 返回引擎列表', () => {
  const engines = getAvailableEngines()
  return Array.isArray(engines) && engines.length >= 2
})

test('getEngineName - 默认引擎', () => {
  return getEngineName() === 'htmldiff'
})

test('setEngine - 切换引擎', () => {
  setEngine('diffdom')
  return getEngineName() === 'diffdom'
})

test('diffdom 引擎正常工作', () => {
  const result = diffText('测试', '修改', 'test')
  return result.html.length > 0
})

test('setEngine - 恢复默认引擎', () => {
  setEngine('htmldiff')
  return getEngineName() === 'htmldiff'
})

// 5. 标记提取测试
console.log('\n--- 标记提取测试 ---')
test('generateMarkers - 生成标记', () => {
  const diffed = {
    title: diffText('旧标题', '新标题', 'title').html,
    content: diffHTML('<p>旧内容</p>', '<p>新内容</p>', 'content').html
  }
  const last = { title: '旧标题', content: '<p>旧内容</p>' }
  const current = { title: '新标题', content: '<p>新内容</p>' }

  const markers = generateMarkers({ diffed, last, current })
  return Array.isArray(markers) && markers.length > 0
})

test('sortMarkers - 排序功能', () => {
  const markers = [{ type: 'text', position: 2 }, { type: 'html', position: 1 }]
  const sorted = sortMarkers(markers)
  // text(优先级1) 应该排在 html(优先级2) 前面
  return sorted[0].type === 'text'
})

test('hasDiffMarkers - 检测差异标记', () => {
  const diffedHtml = '<ins data-diff="add">新增</ins><del data-diff="del">删除</del>'
  const hasResult = hasDiffMarkers(diffedHtml)
  const noResult = hasDiffMarkers('普通文本')
  return hasResult && !noResult
})

// 6. 媒体对比测试
console.log('\n--- 媒体对比测试 ---')
test('diffMediaList - 基本对比', () => {
  const oldList = [
    { fileValue: 'img1.jpg', title: '图片1', type: 'image' },
    { fileValue: 'img2.jpg', title: '图片2', type: 'image' }
  ]
  const newList = [
    { fileValue: 'img1.jpg', title: '图片1修改', type: 'image' },
    { fileValue: 'img3.jpg', title: '图片3', type: 'image' }
  ]

  const result = diffMediaList(oldList, newList)
  return result && result.newList && result.oldList
})

test('diffMediaList - 变更类型标记', () => {
  const oldList = [{ fileValue: 'img1.jpg', title: '图片1', type: 'image' }]
  const newList = [{ fileValue: 'img1.jpg', title: '图片1修改', type: 'image' }]

  const result = diffMediaList(oldList, newList)
  return result.newList.every(item => item.diffType)
})

test('diffMediaList - 修改检测', () => {
  const oldList = [{ fileValue: 'img1.jpg', title: '图片1', type: 'image' }]
  const newList = [{ fileValue: 'img1.jpg', title: '图片1修改', type: 'image' }]

  const result = diffMediaList(oldList, newList)
  return result.newList.some(item => item.diffType === 'modify')
})

test('diffMediaList - 新增检测', () => {
  const oldList = [{ fileValue: 'img1.jpg', title: '图片1', type: 'image' }]
  const newList = [
    { fileValue: 'img1.jpg', title: '图片1', type: 'image' },
    { fileValue: 'img2.jpg', title: '图片2', type: 'image' }
  ]

  const result = diffMediaList(oldList, newList)
  return result.newList.some(item => item.diffType === 'add')
})

test('diffMediaList - 删除检测', () => {
  const oldList = [
    { fileValue: 'img1.jpg', title: '图片1', type: 'image' },
    { fileValue: 'img2.jpg', title: '图片2', type: 'image' }
  ]
  const newList = [{ fileValue: 'img1.jpg', title: '图片1', type: 'image' }]

  const result = diffMediaList(oldList, newList)
  return result.newList.some(item => item.diffType === 'del')
})

// 7. 输出格式验证
console.log('\n--- 输出格式验证 ---')
test('输出格式 - html 字符串', () => {
  const result = diffText('旧', '新', 'test')
  return typeof result.html === 'string'
})

test('输出格式 - useShadowDOM 布尔值', () => {
  const result = diffText('旧', '新', 'test')
  return typeof result.useShadowDOM === 'boolean'
})

test('输出格式 - markers 数组', () => {
  const result = diffText('旧', '新', 'test')
  return Array.isArray(result.markers)
})

test('detectChangeType - 变更类型检测 add', () => {
  return detectChangeType('<ins data-diff="add">新增</ins>') === 'add'
})

test('detectChangeType - 变更类型检测 del', () => {
  return detectChangeType('<del data-diff="del">删除</del>') === 'del'
})

test('detectChangeType - 变更类型检测 modify', () => {
  return detectChangeType('<del>旧</del><ins>新</ins>') === 'modify'
})

// 汇总
console.log('\n=== 测试结果 ===')
console.log(`通过: ${passCount}`)
console.log(`失败: ${failCount}`)

process.exit(failCount > 0 ? 1 : 0)
