在 npm scripts 中我们可以通过包名直接引用本地安装的 npm 包的二进制版本，而无需编写包的整个路径。

`$ ./node_modules/.bin/webpack --config webpack.config.js # '--config` 制定 webpack 的配置文件，默认是 `webpack.config.js'`


[browserslist 目标浏览器配置表](https://www.jianshu.com/p/bd9cb7861b85)


style-loader 通过插入 <style> 标签将 CSS 加入到 DOM 中，css-loader 会像解释 import/require() 一样解释 @import 和 url()。