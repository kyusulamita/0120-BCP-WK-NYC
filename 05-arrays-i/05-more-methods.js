/* 
  .indexOf is also an array method, 
  and works the same way as the string method of the same name 
  learn more: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice

*/

// let names = ["Mr Bear", "Pusheen", "Planty", "Mr Sheep"];
// console.log(names.indexOf("Planty"));
// console.log(names.indexOf("Pusheen", 2));
// console.log(names.indexOf("Mr"));


/* 
  .includes takes a value, 
  and returns true if the value is an element in the array
  learn more: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes

*/

let names = ["Mr Bear", "Pusheen", "Planty", "Mr Sheep"];
console.log(names.includes("Planty"));
console.log(names.includes("Pusheen"));
console.log(names.includes("Pusheen", 2));
console.log(names.includes("Mr"));


if (!names.includes("Pusheen")){
  console.log("does not include")
}