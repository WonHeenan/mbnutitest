MB(NU)TI 北师大人格测试网站（纯静态版）
========================================

本网站为纯静态站点，不包含任何后端统计/计数功能。

目录结构
--------
  public/          网站全部文件（index.html + images/ 图片）
  app.js           本地预览服务器（可选，零依赖）
  package.json     npm 启动脚本

本地预览
--------
  方式一：node app.js   然后访问 http://127.0.0.1:3000
  方式二：直接双击打开 public/index.html（分享卡片截图功能需联网加载CDN）

正式部署（任选其一）
--------
  · Vercel / Netlify：把 public/ 目录整体拖入或上传即可
  · GitHub Pages：把 public/ 内容推到仓库，开启 Pages
  · 云服务器 / 虚拟主机：把 public/ 内容上传到网站根目录

无需数据库、无需 Node 环境、无需任何环境变量，上传即用。
