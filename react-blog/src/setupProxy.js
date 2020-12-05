const { createProxyMiddleware } = require('http-proxy-middleware');
module.exports = function (app) {
  app.use(createProxyMiddleware('/api/', {
    target: 'http://47.96.156.191:80/',
    changeOrigin: true,
    ws: true,
    headers: {'X-Real-IP': '127.0.0.1'},
    pathRewrite: {
      '^/api': ''
    }
  }))
};
