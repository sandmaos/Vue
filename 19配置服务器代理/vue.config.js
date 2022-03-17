module.exports={
    pages:{
        index:{
            entry:'src/main.js',
        },
    },
    lintOnSave:false,
    //1开启代理服务器
    // devServer:{
    //     proxy:'http://localhost:8000'
    // }

    //2开启代理服务器
    devServer: {
        proxy: {
          '/myRequest': {
            target: 'http://localhost:8000',
            pathRewrite:{'^/myRequest':''}, //去掉前端route请求头部指令
            ws: true, //websocket
            changeOrigin: true //
          },
        //   '/foo': {
        //     target: '<other_url>'
        //   }
        }
      }

}