import _ from 'lodash';
import './h.js'
// 其他引入注释...

function component() {
  const element = document.createElement('div');
  const btn = document.createElement('button');
    
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  // element.classList.add('hello');

  // const myIcon = new Image();
  // myIcon.src = Icon;

  // element.appendChild(myIcon);

  // console.log(Data);

  btn.innerHTML = 'Click me and check the console!';
  // btn.onclick = printMe;

  element.appendChild(btn);

  btn.onclick = function() {
    import(/* webpackChunkName: "print" */ './print')
    .then(function(module) {
      const printMe = module.default; // 引入模块的默认函数

      printMe();
    });
  };
    
  return element;

  // 原本的动态引入注释...
}

document.body.appendChild(component());
// var element = component();
// document.body.appendChild(element);

// 热加载部分注释

// component().then(function(component) {
//    document.body.appendChild(component);
//  });