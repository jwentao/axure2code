module.exports = {
  proxy: {
    '/axshare': {
      // target: 'http://172.28.20.33:80/',  // niuting本地
      // target: 'http://172.20.50.3',
      target: 'http://6qfaaa.axshare.com',
      // target: 'http://test-bizinfo.huya.com',
      secure: false,  // 如果是https接口，需要配置这个参数
      changeOrigin: true,  //是否跨域
      pathRewrite: {
        '^/axshare': ''   //需要rewrite的,
      }
    }
  }
};
