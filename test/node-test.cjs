/**
 * Node.js 环境下的测试脚本
 * 用于验证 rich-diff 核心功能
 */
const fs = require('fs');
const path = require('path');

// 简单的模块加载测试
console.log('=== rich-diff 核心模块测试 ===\n');

// 1. 测试模块导入 - 检查代码语法和结构
console.log('1. 模块结构检查:');
const srcFiles = [
  'src/index.js',
  'src/engines/index.js',
  'src/engines/htmldiff.js',
  'src/engines/diffdom.js',
  'src/adapters/index.js',
  'src/adapters/html.js',
  'src/adapters/text.js',
  'src/diff/index.js',
  'src/diff/field.js',
  'src/diff/media.js',
  'src/diff/custom.js',
  'src/markers/index.js',
  'src/markers/generator.js',
  'src/markers/parser.js',
  'src/utils/constants.js',
  'src/utils/dom.js'
];

let allFilesExist = true;
srcFiles.forEach(file => {
  const fullPath = path.join(__dirname, '..', file);
  const exists = fs.existsSync(fullPath);
  if (!exists) {
    console.log(`  [FAIL] ${file} 不存在`);
    allFilesExist = false;
  }
});

if (allFilesExist) {
  console.log(`  [PASS] 所有 ${srcFiles.length} 个源文件存在`);
}

// 2. package.json 检查
console.log('\n2. package.json 检查:');
const pkgPath = path.join(__dirname, '..', 'package.json');
const pkg = JSON.parse(fs.readFileSync(pkgPath, 'utf-8'));

const checks = [
  { name: 'name', value: pkg.name === 'rich-diff' },
  { name: 'main', value: pkg.main === 'src/index.js' },
  { name: 'type: module', value: pkg.type === 'module' },
  { name: 'exports', value: !!pkg.exports },
  { name: 'dependencies', value: !!pkg.dependencies && !!pkg.dependencies['htmldiff-js'] && !!pkg.dependencies['diff-dom'] }
];

checks.forEach(c => {
  console.log(`  [${c.value ? 'PASS' : 'FAIL'}] ${c.name}`);
});

// 3. 导出检查
console.log('\n3. 导出 API 检查:');
const mainExport = fs.readFileSync(path.join(__dirname, '..', 'src/index.js'), 'utf-8');
const expectedExports = [
  'setEngine',
  'getEngineName',
  'getAvailableEngines',
  'diffHTML',
  'diffText',
  'generateMarkers',
  'sortMarkers',
  'diffMediaList',
  'diffCustomFields',
  'computeArticleDiff',
  'hasDiffMarkers',
  'detectChangeType'
];

expectedExports.forEach(exp => {
  const found = mainExport.includes(`export`) && mainExport.includes(exp);
  console.log(`  [${found ? 'PASS' : 'FAIL'}] ${exp}`);
});

// 4. 代码规范检查 - 统计文件行数和函数
console.log('\n4. 代码规范初步检查:');

function countLines(filePath) {
  const content = fs.readFileSync(filePath, 'utf-8');
  return content.split('\n').length;
}

srcFiles.forEach(file => {
  const fullPath = path.join(__dirname, '..', file);
  const lines = countLines(fullPath);
  const status = lines <= 300 ? 'PASS' : 'WARN';
  console.log(`  [${status}] ${file}: ${lines} 行 ${lines > 300 ? '(超过300行)' : ''}`);
});

// 5. 依赖检查
console.log('\n5. 依赖文件检查:');
const deps = ['htmldiff-js', 'diff-dom'];
deps.forEach(dep => {
  const depPath = path.join(__dirname, '..', 'node_modules', dep);
  const exists = fs.existsSync(depPath);
  console.log(`  [${exists ? 'PASS' : 'FAIL'}] ${dep}`);
});

console.log('\n=== 测试完成 ===');
console.log('注意: 完整功能测试需要在浏览器环境中运行 test/index.html');
