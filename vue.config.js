module.exports = {
  lintOnSave: false, // 关闭语法检查
  devServer: {
    proxy: {
      '/dev': {
        // 请求前缀
        target: 'http://82.156.236.118:8888', pathRewrite: { '^/dev': '' }, changeOrigin: true // 用于控制请求头中的host值
      }
    }
  }
}
