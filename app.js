/**
 * MB(NU)TI 北师大人格测试 - 本地预览服务器（零依赖，纯静态）
 * 启动：node app.js（或 npm start）
 * 访问：http://127.0.0.1:3000
 *
 * 说明：网站为纯静态页面（public/ 目录），不含任何统计/计数后端。
 * 正式部署时直接把 public/ 目录整体上传到任意静态托管平台即可
 * （Vercel / Netlify / GitHub Pages / 云服务器均可），无需运行本文件。
 */
const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 3000;
const ROOT = path.join(__dirname, 'public');

const MIME = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.gif': 'image/gif',
  '.svg': 'image/svg+xml',
  '.webp': 'image/webp',
  '.ico': 'image/x-icon'
};

http.createServer((req, res) => {
  // 去掉查询串并解码，防止路径穿越
  let urlPath = decodeURIComponent(req.url.split('?')[0]);
  if (urlPath === '/') urlPath = '/index.html';

  const filePath = path.normalize(path.join(ROOT, urlPath));
  if (!filePath.startsWith(ROOT)) {
    res.writeHead(403);
    return res.end('Forbidden');
  }

  fs.readFile(filePath, (err, data) => {
    if (err) {
      res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
      return res.end('404 Not Found');
    }
    res.writeHead(200, { 'Content-Type': MIME[path.extname(filePath).toLowerCase()] || 'application/octet-stream' });
    res.end(data);
  });
}).listen(PORT, () => {
  console.log('====================================');
  console.log('  MB(NU)TI 测试网站已启动（纯静态）');
  console.log(`  访问地址: http://127.0.0.1:${PORT}`);
  console.log('  （部署时直接上传 public/ 目录即可）');
  console.log('====================================');
});
