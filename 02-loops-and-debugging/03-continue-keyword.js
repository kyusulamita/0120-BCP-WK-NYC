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