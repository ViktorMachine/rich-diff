/**
 * Rollup 配置
 * 将 diff-dom、htmldiff-js 等依赖打包进去
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
      plugins: [terser()]
    },
    {
      // UMD 格式（兼容旧环境）
      file: 'dist/rich-diff.umd.js',
      format: 'umd',
      name: 'RichDiff',
      sourcemap: true,
      plugins: [terser()]
    },
    {
      // 未压缩的 ESM（调试用）
      file: 'dist/rich-diff.dev.js',
      format: 'esm',
      sourcemap: true
    }
  ],
  plugins: [
    resolve({
      browser: true,
      preferBuiltins: false
    }),
    commonjs()
  ],
  // 外部依赖（不打包的）
  external: []
}