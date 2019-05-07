console.log('The print.js module has loaded! See the network tab in dev tools...');
console.log($('title').text())

export default function printMe() {
  // consol.log('I get called from print.js!');
  // console.log('I get called from print.js!');
  console.log('Button Clicked: Here\'s "some text"!');
}