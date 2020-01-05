/*

=== will compare complex values by reference, not by value!

https://goo.gl/Pyhj18

*/

let array1 = [1, 2, 3]; 
let array2 = [1, 2, 3];

console.log(array1 === array2);

/*

https://goo.gl/CAqV7T

*/

// let array1 = [1, 2, 3]; 
// let array2 = array1; // array1 and array2 share the same reference
// console.log(array1 === array2);


let pusheen = {
  name: 'Pusheen',
  age: 7,
  color: 'gray and tabby',
  isHappy: true,
  greet: function(){
    console.log("Hello I am pusheen the cat.");
  },
  getBirthYear: function(currentYear = 2019){
    // if (currentYear === undefined){
    //   currentYear = 2019;
    // }
    return currentYear - 7;
  },
  getAgeInNYears: function(years){
    return 7 + years;
  }
};


function countMethods(obj){
  let count = 0;
  for(const key in obj){
    if (typeof obj[key] ==="function"){
      count++;
    }
  }
  return count;
}


console.log(countMethods(pusheen))