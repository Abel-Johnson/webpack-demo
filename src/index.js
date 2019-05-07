// import _ from 'lodash';
import printMe from './print.js';
// import './style.css';
// import Icon from './icon.jpg';
// import Data from './data.json'; // Data 变量包含可直接使用的 JSON 解析得到的对象


function component() {
  return import(/* webpackChunkName: "lodash" */ 'lodash').then(function(_) {
    lement = document.createElement('div');
    const btn = document.createElement('button');

    element.innerHTML = _.join(['Hello', 'webpack'], ' ');

    btn.innerHTML = 'Click me and check the console!';
    btn.onclick = printMe;

    element.appendChild(btn);

    return element;
  }).catch(function() {
    console.log('An error occurred while loading the component')
  });
}
component().then(function(component) {
  document.body.appendChild(component);
});
/* 
* *
Tips
注意上面中的\/* webpackChunkName: "lodash" *\/这段注释，它并不是可有可无的，它能帮助我们结合output.chunkFilename把分离出的模块最终命名为lodash.bundle.js而非[id].bundle.js。
 */