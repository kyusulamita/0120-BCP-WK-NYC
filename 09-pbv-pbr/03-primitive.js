/* 

when you assign a primitive value to a variable, the variable 'stores' a copy of that value 

https://goo.gl/AY2yQh
*/


let first = 20; // first stores the value 20
first = 30; // first now stores a new value, 30

let second = 30; // second stores its own copy of 30
second++; // second now stores a new value, 31

console.log(first);
console.log(second);