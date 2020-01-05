/* 

we showed earlier that .slice creates a copy of an array 

https://goo.gl/mbb8vJ

*/

// let array1 = [1, [2, 3]]; 
// let array2 = array1.slice();
// console.log(array2);
// console.log(array1 === array2);

/* 

if an array has a complex value as an element, only the reference to that complex value is copied into the new array 

that's why we say slice makes a "shallow" copy of an array; it doesn't make new copies of any complex values stored inside the array 

https://goo.gl/aBa1KS
https://goo.gl/a8n52C
*/

// let array1 = [1, [2, 3]]; 
// let array2 = array1.slice();
// array1[1].push(4);
// console.log(array2[1]);
// console.log(array1[1] === array2[1]);


// let array1 = [1, [2, 3]]; 
// let array2 = [1, [2, 3]]; 

// const array3 = array1.concat(array2);