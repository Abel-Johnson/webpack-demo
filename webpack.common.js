const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack'); // 引入 webpack 便于调用其内置插件

module.exports = {
  entry: {
    app: './src/index.js',
    print: './src/print.js'
  }, // 入口起点，可以指定多个入口起点
  output: {
    path: path.resolve(__dirname, 'dist') // 输出文件所在的目录
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'webpack demo',  // 生成 HTML 文档的标题
      filename: 'index.html' // 写入 HTML 文件的文件名，默认 `index.html`
    }),
    new CleanWebpackPlugin(),
    // new webpack.HotModuleReplacementPlugin(), // 启用 HMR
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