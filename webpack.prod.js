const path = require('path');
const Merge = require('webpack-merge');
const CommonConfig = require('./webpack.common.js')
const webpack = require('webpack'); // 引入 webpack 便于调用其内置插件

module.exports = Merge(CommonConfig, {
  devtool: 'cheap-module-source-map',
  output: { // 输出，只可指定一个输出配置
    filename: '[name].[chunkhash].js', // // 在配置文件中使用`process.env.NODE_ENV`
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production') // 在编译的代码里设置了`process.env.NODE_ENV`变量
    }),
    new webpack.optimize.UglifyJsPlugin()
  ],
});