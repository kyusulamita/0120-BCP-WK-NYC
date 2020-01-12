/* 

whenever we call a function, it's added to the top of the call stack

JS will execute whatever function is on the top of the stack 
https://goo.gl/ctFf3w

*/

function first() {
  console.log('I am first!');
}

function second() {
  console.log('I am second!');
}

first();
second();
