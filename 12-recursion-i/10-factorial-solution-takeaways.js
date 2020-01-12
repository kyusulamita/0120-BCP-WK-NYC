/* 
https://goo.gl/Me36VQ
https://goo.gl/i5ipKb

more logging:
https://goo.gl/u1wbQJ

*/
function factorial(num) {
  // base case: num is 0 or 1
  if (num === 0 || num === 1) {
    return 1;
  }
  // recursive case: num must get closer to 0 or 1
  const result = num * factorial(num - 1);
  return result;
}

let result = factorial(3);
console.log(result);



/* three takeaways from factorial:

1. define your base case first, using simple inputs/outputs

2. define your base case, and test it using the simplest possible input that results in one recursive call to the base case
3. test your function against more-complex inputs 
*/