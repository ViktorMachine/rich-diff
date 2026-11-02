/**
 * Rollup 配置
 * 将 diff-dom、htmldiff-js、leader-line 等依赖打包进去
 * 支持 ES5 转译以兼容 Vue2 等旧环境
 */
import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import terser from '@rollup/plugin-terser'
import babel from '@rollup/plugin-babel'

export default {
  input: 'src/index.js',
  output: [
    {
      // ESM 格式（现代浏览器）
      file: 'dist/rich-diff.esm.js',
      format: 'esm',
      sourcemap: true,
      plugins: [terser({
        ecma: 2015,
        compress: {
          ecma: 2015,
          arrows: true
        },
        output: {
          ecma: 2015
        }
      })],
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
      plugins: [terser({
        ecma: 2015,
        compress: {
          ecma: 2015,
          arrows: true
        },
        output: {
          ecma: 2015
        }
      })],
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
      preferBuiltins: false,
      // 确保解析 .cjs 和 .mjs 文件
      extensions: ['.js', '.json', '.cjs', '.mjs']
    }),
    commonjs({
      // 处理 leader-line 的全局变量导出
      transformMixedEsModules: true,
      // 强制将 leader-line 视为 CommonJS
      requireReturnsDefault: 'auto',
      // 确保处理 .cjs 文件
      extensions: ['.js', '.cjs']
    }),
    babel({
      babelHelpers: 'bundled',
      // 不排除任何文件，让 Babel 处理所有代码（包括依赖）
      // 必须包含 .cjs 扩展名，因为 @lionad/leader-line 使用 .cjs 文件
      extensions: ['.js', '.cjs', '.mjs'],
      skipPreflightCheck: true,
      presets: [
        ['@babel/preset-env', {
          targets: {
            browsers: ['> 0.5%', 'last 2 versions', 'Firefox ESR', 'not dead', 'ie >= 11']
          },
          modules: false,
          loose: true
        }]
      ]
    })
  ],
  // 外部依赖（不打包的）
  external: []
}