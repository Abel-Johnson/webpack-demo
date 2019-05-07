import _ from 'lodash';
import printMe from './print.js';
import './style.css';
import Icon from './icon.jpg';
import Data from './data.json'; // Data 变量包含可直接使用的 JSON 解析得到的对象


function component() {
  const btn = document.createElement('button');
  btn.innerHTML = 'Click me and check the console!';
  btn.onclick = printMe;
  
  const myIcon = new Image();
  myIcon.src = Icon;

  const element = document.createElement('div');
  element.innerHTML = _.join(['Hello', 'webpack'], ',');
  // element.classList.add('hello');
  
  // element.appendChild(myIcon);
  element.appendChild(btn);

  console.log(Data);

  return element;
}

var element = component();
document.body.appendChild(element);

if(module.hot) {
  module.hot.accept('./print.js', function() {
    console.log('Accepting the updated printMe module!');
    // printMe();
    
    document.body.removeChild(element);
    element = component();
    document.body.appendChild(element);
  });
}