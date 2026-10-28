# 更新日志

## [1.1.0] - 2026-10-28

### 新功能

- **多字段对比 API**：支持传入数据对象和字段配置，自动渲染表单布局
  - `render({ oldData, newData, fields })` - 多字段对比模式
  - 自动判断字段内容类型（HTML/纯文本）
  - 按字段配置的 `sort` 属性自动排序
  - 标记自动合并：相邻 add/del 合并为 modify 类型

- **精准元素定位**：
  - 为所有差异标签添加 `data-marker-id` 属性
  - LeaderLine 连线指向具体的 `<ins>`/`<del>` 节点
  - 合并标记支持 `targetIds` 数组，正确查找多个目标元素

### 改进

- **依赖优化**：将 `leader-line` 替换为 `@lionad/leader-line`，支持 ESM 模块导入
- **代码简化**：移除动态加载逻辑，LeaderLine 现在直接打包进 bundle
- **依赖调整**：将 `diff-dom` 和 `htmldiff-js` 从 devDependencies 移至 dependencies
- **单字段模式修复**：`renderSingleField` 使用 `createFieldMarkers` 支持任意字段名

### 文档

- 更新 `README.md` - 添加多字段对比使用说明
- 更新 `docs/API.md` - 详细说明多字段 API 参数和返回值
- 新增 `example/multi-field-demo.html` - 多字段对比演示

### 清理

- 移除 `src/leader-line/leader-line.min.js`（已通过 npm 安装）
- 移除 `initLeaderLine` 和 `setLeaderLine` 函数（不再需要手动初始化）
- 清理示例文件中的过时代码

---

## [1.0.1] - 2026-10-27

### 新增

- 初始版本发布
- 支持 HTML 和纯文本对比
- 支持 ShadowDOM 降级
- 内置渲染器和 LeaderLine 连线

### 文档

- 新增 `README.md` - 完整的使用指南
- 新增 `docs/API.md` - 详细 API 文档