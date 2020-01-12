/* you can use recursion with any data type in JS */

/* if you're asked to recurse through arrays or strings, the base case often occurs when the iterable is empty or has a length of one */
/* imagine finding the sum of numbers in an array */

// console.log(sumArray([4])); // if array.length === 1, the sum is easy to calculate
/* if the base case required the iterable to have a length of 1 or 0, it must mean that the recursive case has to reduce the length of the iterable with every recursive call */

/* note: nested arrays can be approached differently; see next unit! */

// function sumArray(arr){
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++){
//     sum += arr[i];
//   }
//   return sum;
// }

/*
how would we do this with recursion?

base case -> length based(0 or 1)
[] => 0 // has no length, sum = 0
[2] => 2  // 1 elem, sum =  elem

simplest recursive case

very first element + the sum of the rest of the array 
[2, 3] => 5
[2, 3] => 2 + recSumArr([3]) 
recSumArr([3]) => 3
2 + 3 = 5

// [1, 2, 3] =>
// 1 + recSumArr([2, 3])
// 1 +( 2 + recSumArr([3]))
// 1 + (2 + (3))
// 6

https://goo.gl/of193d
*/
// [2, 3]
// function recSumArr(arr){
//   if (arr.length === 0) {
//     return 0;
//   }
//   if (arr.length === 1) {
//     return arr[0];
//   }
//   // slice method
//   const firstElem = arr[0]; // 2
//   const restOfArr = arr.slice(1); // [3]

//   const sumOfRestOfArr = recSumArr(restOfArr); // recSumArr([3])  => 3

//   return firstElem + sumOfRestOfArr; // 2 + 3
// }

// console.log(recSumArr([]));// 0
// console.log(recSumArr([4])); // 4
// console.log(recSumArr([2, 3])); //5
// console.log(recSumArr([1, 2, 3, 4, 5])); //15

/*
https://goo.gl/rbnCUL
*/
// [2, 3]
// function recSumArr(arr){
//   if (arr.length === 0){
//     return 0;
//   } else if (arr.length === 1){
//     return arr[0];
//   } else {
//     const lastElem = arr[arr.length - 1]; // 3
//     const restOfArr = arr.slice(0, -1); // [2]
//     const sumOfRestOfArr = recSumArr(restOfArr); // recSumArr([2])  => 2
//     return lastElem + sumOfRestOfArr;  // 3 + 2
//   }
// }

// function recSumArr(arr){
//   if (arr.length === 0){
//     return 0;
//   } else if (arr.length === 1){
//     return arr[0];
//   } else {
//     const lastElem = arr.pop();
//     const sumOfRestOfArr = recSumArr(arr);
//     return lastElem + sumOfRestOfArr;
//   }
// }

// console.log(recSumArr([])); //0
// console.log(recSumArr([4])); //4
// console.log(recSumArr([1, 2, 3]));// 6

