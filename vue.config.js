module.exports = {
  // 项目部署的基础路径
  // 我们默认假设你的应用将会部署在域名的根部，比如 https://www.my-app.com/, 如果你的应用时部署在一个子路径下，那么你需要在这里指定子路径。
  // 比如，如果你的应用部署在 https://www.foobar.com/my-app/, 那么将这个值改为 `/my-app/`
  publicPath: process.env.NODE_ENV === 'production' ? './' : '/',  //development //根据环境配置前缀
  // 在npm run build时, 构建输出目录 type:string, default:'dist'
  outputDir: 'projectOutPutDir',
  // 静态资源目录 (js, css, img, fonts)
  assetsDir: 'assets',
  // 是否开启eslint保存检测，有效值：ture | false | 'error'
  lintOnSave: false,
  // 是否在构建生产包时生成 sourceMap 文件，false将提高构建速度
  productionSourceMap: false,
  // 构建时开启多进程处理babel编译
  parallel: require('os').cpus().length > 1,
  css: {
    loaderOptions: {
      scss: {
        prependData: `@import "~@/assets/css/styleUrl.scss";`
      },
    }
  },
  // 配置 webpack-dev-server 行为
  devServer: {
    port: 8888, // 端口号
    host: '0.0.0.0', // 域名
    https: false, // https:{type:Boolean}
    // open: true, //配置自动启动浏览器，可根据使用监测平台确定是否打开
    open: process.platform === 'win32',
    // 启动或保存的信息将会被隐藏
    noInfo: true,
    // 页面报404时返回的页面，可设置为 historyApiFallback: true, 默认为index.html，或
    historyApiFallback: {
      rewrites: [
        // { from: /^\/$/, to: '/views/landing.html' },
        // { from: /^\/subpage/, to: '/views/subpage.html' },
        // { from: /./, to: '/views/404.html' }
      ]
    },
    // 是否开启热更新
    hotOnly: false,
    // proxy: 'http://localhost:4000', //  string | Object 配置跨域处理,只有一个代理 
    proxy: { // 将请求服务器地址印射为/api, 配置多个代理
      '/api': {
        target: 'http://220.248.3.42:8088',  // 接口域名 正式地址
        // target: 'http://10.8.171.66:8088',  // 接口域名 测试地址
        changeOrigin: true,  //是否跨域，实际无影响
        secure: false,  // 如果是https接口，需要配置这个参数，当代理某些https服务报错时用
        pathRewrite: {
          '^/api': ''   //正则匹配/api，将/api重写为空
        }
      },
      '/api2': {
        target: '<other_url>'
      }
    },
    // vue-cli3.0启动使用vue-cli-service,而非webpack-dev-server，所以设置不起作用，mmp，害老子搞了大半夜才明白
    before: function (app) {
      // `app` 是一个 express 实例
      app.get('/test/get', function(req,res){
        res.json({ success: 200 , data: 'response getData' });
      });
      app.post('/test/post', function(req,res){
        res.json({ success: 200 , data: 'response postData' });
      })
    }
  },
  // 三方插件的选项
  pluginOptions: {
    // ...
  },
  pwa: {
    // 单页插件相关配置 https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-pwa
  },
}