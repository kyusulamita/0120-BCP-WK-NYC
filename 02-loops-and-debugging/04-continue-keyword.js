// Additional Links
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators

// the continue keyword will cause the loop to skip to the next iteration
for (let i = 1; i <= 5; i++) {
  if (i === 3) {
    continue;
  }
  console.log('i is:', i);
}

// the continue keyword also works in while loops
// let count = 5;
// while (count >= 1) {
//   if (count % 2 === 0) {
//     count--; 
//     continue;
//   }
//  console.log('count is', count);
//   count--;
// }


// !! BIG WARNING !!
// when using continue in while loop
// make sure you’re conditional is still eventually false

// let count = 5;
// while (count >= 1) {
//   if (count % 2 === 0) {
//     continue;
//   }
//   console.log('count is', count);
//   count--;
// }

/**
 * isOdd - determines whether a number is odd orr not
 * @param {number} num
 * @returns {boolean}
 */
const isOdd = (num) => {
  return num % 2;
}

/**
 * logOutEven - logs out all the odd numbers from 0 to end
 *
 * @param {Number} end - number we're counting up to
 */
const logOutEven = (end) => {
  for (let i = 0; i < end; i++){
    if (isOdd(i)) {
      continue;
    }
    console.log(i);
  }
}

logOutEven(10);

