# gpower-rich-diff

可扩展的富文本对比框架，支持 HTML、文本、媒体资源的差异对比与可视化。

## 特性

- **多引擎支持**：内置 `htmldiff` 和 `diffdom` 两种对比引擎
- **ShadowDOM 兼容**：自动降级兼容不支持 ShadowDOM 的浏览器
- **结构化标记**：提取差异标记，便于可视化展示
- **LeaderLine 连线**：内置连线功能，支持标记与内容的关联展示
- **自定义渲染器**：可替换默认渲染模板
- **多字段对比**：支持表单布局的多字段对比展示

## 安装

```bash
npm install gpower-rich-diff
```

## 使用方式

本库提供 **ESM** 和 **UMD** 两种格式，适应不同的使用场景：

### 方式一：ESM 格式（推荐）

适用于现代打包工具（Webpack、Vite、Rollup 等）和浏览器原生模块：

```javascript
// 使用打包工具（Webpack/Vite 等）
import { render, diffHTML, diffText } from 'gpower-rich-diff'

// 浏览器原生模块
<script type="module">
  import { render } from './node_modules/gpower-rich-diff/dist/rich-diff.esm.js'
  render({ ... })
</script>
```

**特点**：

- 支持 tree-shaking（已配置 `sideEffects: true`，确保 LeaderLine 正常初始化）
- 更小的最终打包体积
- 现代浏览器原生支持
- 构建产物：`dist/rich-diff.esm.js`（压缩版）、`dist/rich-diff.dev.js`（调试版）

### 方式二：UMD 格式

适用于传统 `<script>` 标签引入或旧环境：

```html
<!-- 直接引入 UMD 文件 -->
<script src="./node_modules/gpower-rich-diff/dist/rich-diff.umd.js"></script>
<script>
  // 全局变量 RichDiff
  const result = RichDiff.render({ ... })
</script>
```

**特点**：

- 暴露全局变量 `RichDiff`
- 兼容 AMD、CommonJS 和浏览器全局变量
- 无需构建工具即可使用
- 构建产物：`dist/rich-diff.umd.js`

### CDN 引入（推荐用于演示）

```html
<!-- 使用 unpkg CDN -->
<script src="https://unpkg.com/gpower-rich-diff/dist/rich-diff.umd.js"></script>
<script>
  const result = RichDiff.render({ ... })
</script>

<!-- 或使用 ESM 模块 -->
<script type="module">
  import { render } from 'https://unpkg.com/gpower-rich-diff/dist/rich-diff.esm.js'
  render({ ... })
</script>
```

### 注意事项

1. **Tree-shaking 配置**：本库已在 `package.json` 中设置 `sideEffects: true`，确保 LeaderLine 等副作用代码不被错误移除。无需额外配置。

2. **依赖内置**：所有依赖（`@lionad/leader-line`、`diff-dom`、`htmldiff-js`）已打包进产物，无需额外安装依赖。

3. **调试版本**：开发时可使用 `dist/rich-diff.dev.js`（未压缩，保留调试信息）：

   ```javascript
   import { render } from 'gpower-rich-diff/dist/rich-diff.dev.js'
   ```

## 快速开始

### 纯文本对比

```javascript
import { diffText } from 'rich-diff'

const result = diffText('旧标题', '新标题', 'title')
console.log(result.html)  // '<del>旧</del><ins>新</ins>标题'
console.log(result.useShadowDOM)  // true/false
console.log(result.markers)  // []
```

### HTML/富文本对比

```javascript
import { diffHTML } from 'rich-diff'

const oldHtml = '<p>这是<strong>旧内容</strong></p>'
const newHtml = '<p>这是<em>新内容</em></p>'

const result = diffHTML(oldHtml, newHtml, 'content')
console.log(result.html)
```

### 媒体资源对比

```javascript
import { diffMediaList } from 'rich-diff'

const oldMedia = [
  { fileValue: 'img1.jpg', title: '图片1' },
  { fileValue: 'img2.jpg', title: '图片2' }
]

const newMedia = [
  { fileValue: 'img1.jpg', title: '图片1已修改' },
  { fileValue: 'img3.jpg', title: '新图片' }
]

const { newList, oldList } = diffMediaList(oldMedia, newMedia, 'fileValue')

// newList 中每项带有 diffType: 'add' | 'del' | 'alter' | 'same'
newList.forEach(item => {
  console.log(item.fileValue, item.diffType)
})
```

### 使用渲染器

```javascript
import { render } from 'rich-diff'

// 方式一：多字段对比（推荐）
// 传入数据对象和字段配置，自动渲染表单布局
const result = render({
  container: document.getElementById('diffContainer'),
  oldData: {
    title: '旧标题',
    subtitle: '旧副标题',
    content: '<p>旧内容</p>'
  },
  newData: {
    title: '新标题',
    subtitle: '新副标题',
    content: '<p>新内容</p>'
  },
  fields: [
    { label: '标题', field: 'title', sort: 1 },
    { label: '副标题', field: 'subtitle', sort: 2 },
    { label: '内容', field: 'content', sort: 3 }
  ]
})

// 返回值包含：
// - container: 渲染容器
// - fieldResults: 各字段的对比结果
// - markers: 所有变更标记
// - destroy: 销毁方法

// 方式二：单字段对比（兼容旧 API）
const result = render({
  container: document.getElementById('diffContainer'),
  oldContent: '<p>旧内容</p>',
  newContent: '<p>新内容</p>',
  fieldName: 'content'
})

// 不传容器返回原始数据
const rawData = render({
  oldContent: '<p>旧内容</p>',
  newContent: '<p>新内容</p>'
})
```

### 多字段对比特性

- **表单布局**：以左侧标签、右侧内容的形式展示各字段
- **自动排序**：按 `fields` 中的 `sort` 属性排序
- **智能检测**：自动判断字段内容是否为 HTML（使用 `diffHTML` 或 `diffText`）
- **标记合并**：相邻的 add/del 标记自动合并为 modify 类型
- **精准定位**：LeaderLine 连线指向具体的 `<ins>`/`<del>` 节点，而非字段容器
- **交互反馈**：悬停标记时自动高亮对应字段并显示连线

### 提取变更标记

```javascript
import { diffHTML, generateMarkers } from 'rich-diff'

const result = diffHTML(oldHtml, newHtml, 'content')

const markers = generateMarkers({
  diffed: { content: result.html },
  current: { content: newHtml },
  last: { content: oldHtml }
})

markers.forEach(marker => {
  console.log(marker.field)       // 字段名
  console.log(marker.changeType)  // 'add' | 'del' | 'modify'
  console.log(marker.oldValue)    // 旧值
  console.log(marker.newValue)    // 新值
})
```

### LeaderLine 连线

```javascript
import { createConnector, clearConnectors } from 'rich-diff'

// 创建连线
const connector = createConnector(startElement, endElement, {
  color: '#1878E8',
  size: 2,
  path: 'fluid'
})

// 清除所有连线
clearConnectors()
```

## API 文档

### 核心方法

| 方法 | 说明 | 参数 | 返回值 |
|------|------|------|--------|
| `diffText(oldText, newText, fieldName)` | 纯文本对比 | `oldText`: 旧文本<br>`newText`: 新文本<br>`fieldName`: 字段名 | `{ html, useShadowDOM, markers }` |
| `diffHTML(oldHtml, newHtml, fieldName)` | HTML 对比 | `oldHtml`: 旧 HTML<br>`newHtml`: 新 HTML<br>`fieldName`: 字段名 | `{ html, useShadowDOM, markers }` |
| `diffMediaList(oldList, newList, idField)` | 媒体对比 | `oldList`: 旧列表<br>`newList`: 新列表<br>`idField`: 标识字段 | `{ newList, oldList }` |
| `generateMarkers(options)` | 提取标记 | `options.diffed`: 差异结果<br>`options.current`: 当前数据<br>`options.last`: 旧数据 | `Marker[]` |

### 引擎控制

| 方法 | 说明 | 参数 |
|------|------|------|
| `setEngine(engine)` | 切换引擎 | `'htmldiff'` 或 `'diffdom'` |
| `getEngineName()` | 获取当前引擎名 | - |
| `getAvailableEngines()` | 获取可用引擎列表 | - |

### 渲染器

| 方法 | 说明 | 参数 |
|------|------|------|
| `render(options)` | 渲染差异 | `container`: 容器元素<br>`oldContent`: 旧内容<br>`newContent`: 新内容<br>`fieldName`: 字段名 |
| `setRenderer(renderer)` | 设置自定义渲染器 | 渲染器对象 |
| `getRenderer()` | 获取当前渲染器 | - |

### LeaderLine

| 方法 | 说明 |
|------|------|
| `createConnector(start, end, options)` | 创建连线 |
| `removeConnector(id)` | 移除指定连线 |
| `clearConnectors()` | 清除所有连线 |
| `updateConnector(id)` | 更新连线位置 |
| `updateAllConnectors()` | 更新所有连线位置 |
| `getConnectorCount()` | 获取连线数量 |
| `isLeaderLineAvailable()` | 检查 LeaderLine 是否可用 |

## 自定义渲染器

```javascript
import { setRenderer } from 'rich-diff'

const myRenderer = {
  render({ container, oldContent, newContent, diffResult, config }) {
    // 自定义渲染逻辑
    container.innerHTML = diffResult.html
    return { success: true }
  }
}

setRenderer(myRenderer)
```

## 自定义对比引擎

```javascript
import { setEngine } from 'rich-diff'

// 使用内置引擎
setEngine('htmldiff')  // 默认，基于 htmldiff-js
setEngine('diffdom')   // 基于 diff-dom

// 或注册自定义引擎（需实现 Engine 接口）
```

## 浏览器支持

- Chrome 60+
- Firefox 63+
- Safari 13+
- Edge 79+

不支持 ShadowDOM 的浏览器会自动降级为 `<difftext>` 标签。

## 依赖说明

- `htmldiff-js` - HTML 对比引擎
- `diff-dom` - DOM 对比引擎
- `@lionad/leader-line` - SVG 连线库

## 开发

```bash
# 安装依赖
npm install

# 构建
npm run build

# 构建产物
# - dist/rich-diff.esm.js  (ESM 格式)
# - dist/rich-diff.umd.js  (UMD 格式)
# - dist/rich-diff.dev.js  (未压缩，调试用)
```

## License

MIT