#!/usr/bin/env node
/**
 * 检查打包产物是否兼容 ES5（Vue2 可用）
 * 检测现代语法：可选链(?.)、空值合并(??)、async/await 等
 */

import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const distDir = path.join(__dirname, '..', 'dist')
const files = ['rich-diff.esm.js', 'rich-diff.umd.js']

// 需要检测的现代语法模式
const modernSyntaxPatterns = [
  // 可选链操作符: obj?.prop 或 obj?.[key] 或 obj?.()
  // 注意排除三元运算符中的数字如 w?.2:.1 (实际上是 w ? .2 : .1)
  { name: '可选链操作符 (?.)', pattern: /[a-zA-Z_$][a-zA-Z0-9_$]*\?\.([a-zA-Z_$\[\(])/g, example: 'obj?.prop' },
  // 空值合并运算符: 需要排除字符串中的 ? 和数字模式
  { name: '空值合并运算符 (??)', pattern: /[a-zA-Z_$][a-zA-Z0-9_$]*\s*\?\?/g, example: 'value ?? default' },
  { name: 'async 函数', pattern: /\basync\s+function\b/g, example: 'async function' },
  { name: 'await 表达式', pattern: /\bawait\s+/g, example: 'await promise()' },
  { name: '箭头函数', pattern: /=>[^=]/g, example: '() => {}' },
]

let hasIssues = false

console.log('='.repeat(60))
console.log('ES5 兼容性检查')
console.log('='.repeat(60))

for (const file of files) {
  const filePath = path.join(distDir, file)

  if (!fs.existsSync(filePath)) {
    console.log(`\n⚠️  文件不存在: ${file}`)
    continue
  }

  const content = fs.readFileSync(filePath, 'utf-8')
  console.log(`\n📄 ${file}`)
  console.log('-'.repeat(60))

  for (const { name, pattern, example } of modernSyntaxPatterns) {
    const matches = content.match(pattern)
    const count = matches ? matches.length : 0

    if (count > 0) {
      // 箭头函数是 ES6 语法，Vue2 通常支持，仅作警告
      if (name === '箭头函数') {
        console.log(`⚠️  ${name}: 发现 ${count} 处（ES6，通常可接受）`)
      } else {
        console.log(`❌ ${name}: 发现 ${count} 处（需转译）`)
        hasIssues = true
      }
    } else {
      console.log(`✅ ${name}: 未发现`)
    }
  }
}

console.log('\n' + '='.repeat(60))

if (hasIssues) {
  console.log('❌ 打包产物包含 ES6+ 语法，Vue2 项目可能无法使用')
  console.log('   请检查 Babel 配置是否正确')
  process.exit(1)
} else {
  console.log('✅ 打包产物兼容 ES5，Vue2 项目可以使用')
  process.exit(0)
}