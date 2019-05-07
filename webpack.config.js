const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack'); // 引入 webpack 便于调用其内置插件

module.exports = {
  devtool: 'inline-source-map', // 控制是否生成以及如何生成 source map
  devServer: { // 检测代码变化并自动重新编译并自动刷新浏览器
    contentBase: path.resolve(__dirname, 'dist'), // 设置静态资源的根目录
    hot: true, // 告诉 dev-server 我们在用 HMR
    hotOnly: true // 指定如果热加载失败了禁止刷新页面 (这是 webpack 的默认行为)，这样便于我们知道失败是因为何种错误
  },
  entry: {
    app: './src/index.js',
    vendor: [ // 第三方库可以统一放在这个入口一起合并
      'lodash'
    ]
    // print: './src/print.js'
    // anothor: './src/anothor.js'
  }, // 入口起点，可以指定多个入口起点
  output: { // 输出，只可指定一个输出配置
    filename: '[name].[chunkhash].js',
    chunkFilename: '[name].bundle.js', // 指定非入口块文件输出的名字
    path: path.resolve(__dirname, 'dist') // 输出文件所在的目录
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'webpack demo',  // 生成 HTML 文档的标题
      filename: 'index.html' // 写入 HTML 文件的文件名，默认 `index.html`
    }),
    new webpack.ProvidePlugin({ // 设置全局变量
      $: 'jquery',
      jQuery: 'jquery'
    }),
    new webpack.HashedModuleIdsPlugin(), // 替换掉原来的`module.id`
    new CleanWebpackPlugin(),
    // new webpack.HotModuleReplacementPlugin(), // 启用 HMR
    // new webpack.NamedModulesPlugin(), // 打印日志信息时 webpack 默认使用模块的数字 ID 指代模块，不便于 debug，这个插件可以将其替换为模块的真实路径
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor' // 将 vendor 入口处的代码放入 vendor 模块
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'runtime' // 将 webpack 自身的运行时代码放在 runtime 模块, 包含 vendor 的 CommonsChunkPlugin 实例必须在包含 runtime 的之前，否则会报错。
    })
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.(png|svg|jpg|gif|woff|woff2|eot|ttf|otf)$/,
        use: [
          'file-loader'
        ]
      }
    ]
  }
};