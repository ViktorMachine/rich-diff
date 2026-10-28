/**
 * Rollup 配置
 * 将 diff-dom、htmldiff-js、leader-line 等依赖打包进去
 */
import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import terser from '@rollup/plugin-terser'

export default {
  input: 'src/index.js',
  output: [
    {
      // ESM 格式（现代浏览器）
      file: 'dist/rich-diff.esm.js',
      format: 'esm',
      sourcemap: true,
      plugins: [terser()],
      // 确保全局变量正确处理
      globals: {
        'leader-line': 'LeaderLine'
      }
    },
    {
      // UMD 格式（兼容旧环境）
      file: 'dist/rich-diff.umd.js',
      format: 'umd',
      name: 'RichDiff',
      sourcemap: true,
      plugins: [terser()],
      globals: {
        'leader-line': 'LeaderLine'
      }
    },
    {
      // 未压缩的 ESM（调试用）
      file: 'dist/rich-diff.dev.js',
      format: 'esm',
      sourcemap: true,
      globals: {
        'leader-line': 'LeaderLine'
      }
    }
  ],
  plugins: [
    resolve({
      browser: true,
      preferBuiltins: false
    }),
    commonjs({
      // 处理 leader-line 的全局变量导出
      transformMixedEsModules: true,
      // 强制将 leader-line 视为 CommonJS
      requireReturnsDefault: 'auto'
    })
  ],
  // 外部依赖（不打包的）
  external: []
}