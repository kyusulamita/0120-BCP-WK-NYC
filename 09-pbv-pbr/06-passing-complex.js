/*

https://goo.gl/ZV81yp

https://goo.gl/QNYqF5
*/
// let myArray = [10];

// function pushes20(array) {
//   array.push(20);
//   return array;
// };

// let returnedArray = pushes20(myArray);
// console.log(myArray);
// console.log(returnedArray);



const pusheen = {
  name: 'Pusheen',
  age: 7,
  colors: ['grey', 'tabby']
}


function incrementAge(obj){
  obj.age++;
  obj.name += "I"
}

// place holder, write a function that creates a shallow copy of an object
function makeShallowCopy(obj){
  return obj;
}
incrementAge(pusheen);
console.log("original", pusheen);
incrementAge(pusheen);
console.log("original", pusheen)
incrementAge(pusheen);
