const { chromium } = require('playwright');
const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 8765;
const PROJECT_DIR = path.join(__dirname, '..');
const TEST_DIR = __dirname;

// 简单 HTTP 服务器
function startServer() {
  return new Promise((resolve) => {
    const server = http.createServer((req, res) => {
      let filePath;

      // 处理 node_modules 中的模块
      if (req.url.startsWith('/node_modules/')) {
        filePath = path.join(PROJECT_DIR, req.url);
      }
      // 处理 src 目录的请求
      else if (req.url.startsWith('/src/')) {
        filePath = path.join(PROJECT_DIR, req.url);
      }
      // 默认请求 test 目录
      else {
        filePath = path.join(TEST_DIR, req.url === '/' ? 'index.html' : req.url);
      }

      const ext = path.extname(filePath);
      const contentTypes = {
        '.html': 'text/html',
        '.js': 'application/javascript',
        '.css': 'text/css',
        '.json': 'application/json',
        '.map': 'application/json'
      };

      fs.readFile(filePath, (err, data) => {
        if (err) {
          console.log(`404: ${req.url} -> ${filePath}`);
          res.writeHead(404);
          res.end('Not found: ' + req.url);
          return;
        }
        res.writeHead(200, { 'Content-Type': contentTypes[ext] || 'text/plain' });
        res.end(data);
      });
    });

    server.listen(PORT, () => {
      console.log(`Server started at http://localhost:${PORT}`);
      resolve(server);
    });
  });
}

async function runTests() {
  const server = await startServer();
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();

  // 监听控制台消息
  page.on('console', msg => {
    if (msg.type() === 'error') {
      console.log('PAGE ERROR:', msg.text());
    } else {
      console.log('PAGE LOG:', msg.text());
    }
  });
  page.on('pageerror', err => {
    console.log('PAGE ERROR:', err.message);
  });

  const url = `http://localhost:${PORT}/index.html`;
  console.log('Opening:', url);

  try {
    await page.goto(url, { waitUntil: 'networkidle', timeout: 60000 });
    console.log('Page loaded');

    // 等待测试完成
    await page.waitForFunction(() => {
      const el = document.getElementById('summary');
      return el && el.textContent.includes('测试完成');
    }, { timeout: 60000 });

    // 获取测试结果
    const summary = await page.evaluate(() => {
      return document.getElementById('summary').textContent;
    });

    console.log('\n=== 测试结果 ===');
    console.log(summary);

    // 获取详细的测试结果
    const testDetails = await page.evaluate(() => {
      const results = [];
      document.querySelectorAll('.test-case').forEach(tc => {
        const title = tc.querySelector('h3').textContent;
        const isPass = tc.classList.contains('pass');
        const result = tc.querySelector('.result').textContent;
        results.push({ title, passed: isPass, result: result.substring(0, 100) });
      });
      return results;
    });

    console.log('\n=== 详细测试结果 ===');
    let passCount = 0;
    let failCount = 0;
    testDetails.forEach((t, i) => {
      console.log(`[${t.passed ? 'PASS' : 'FAIL'}] ${t.title}`);
      if (t.passed) passCount++;
      else failCount++;
    });

    console.log(`\n总计: 通过 ${passCount}, 失败 ${failCount}`);

    await browser.close();
    server.close();

    process.exit(failCount > 0 ? 1 : 0);
  } catch (err) {
    console.log('Error:', err.message);
    await browser.close();
    server.close();
    process.exit(1);
  }
}

runTests().catch(err => {
  console.error('Test error:', err);
  process.exit(1);
});
