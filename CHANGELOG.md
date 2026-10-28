# 更新日志

## 2026-10-28

### 改进

- **依赖优化**：将 `leader-line` 替换为 `@lionad/leader-line`，支持 ESM 模块导入
- **代码简化**：移除动态加载逻辑，LeaderLine 现在直接打包进 bundle
- **依赖调整**：将 `diff-dom` 和 `htmldiff-js` 从 devDependencies 移至 dependencies

### 文档

- 新增 `README.md` - 完整的使用指南
- 新增 `docs/API.md` - 详细 API 文档

### 清理

- 移除 `src/leader-line/leader-line.min.js`（已通过 npm 安装）
- 移除 `initLeaderLine` 和 `setLeaderLine` 函数（不再需要手动初始化）
- 清理示例文件中的过时代码