const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
  // js 入口, 入口 js 文件
  entry: './src/main.js',
  // 编译出口
  output: {
    /**
     * 打包结果存放路径
     * 默认路径: path.resolve(__dirname, 'dist'); __dirname 是 node 内置上下文路径属性
     */
    path: path.resolve(__dirname, './dist'),
    // 打包名
    filename: 'bundle.js'
    // 在已有URL前面加入固定路径
    // publicPath: ''
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.less$/,
        use: [
          {
            loader: "style-loader"
          },
          {
            loader: "css-loader"
          },
          {
            loader: "less-loader"
          }
        ]
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      }
    ]
  },

  resolve: {
    // 可以省略的后缀名
    extensions: ['.js', '.css', '.vue'],
    alias: {
      // 配置指定选择的 vue 文件, 到 node_modules 的 vue 选择
      'vue$': 'vue/dist/vue.esm.js'
    }    
  },

  plugins: [
    //vue-loader v15 以上版本引起. 配置插件的节点，所有插件都要在这里配置
    new VueLoaderPlugin(),
    // 添加版权
    new webpack.BannerPlugin('最终解释权归 lei 所有'),
    // 动态生成 index.html
    new HtmlWebpackPlugin({
      template: 'index.html'
    }),
    // 压缩 js
    new UglifyJsPlugin()
  ],

  devServer: {
    // 内容目录
    contentBase: './dist',
    // 实时监听
    inline: true
    // 端口号
    // port: 80,
    // SPA 页面中, 依赖H5的 history 模式
    // historyApiFallback: history
  }

}