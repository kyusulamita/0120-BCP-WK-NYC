/* 

https://goo.gl/mVK9Jt

https://goo.gl/MWfh9V
*/

function sumVals(obj) {
  let sum = 0;
  for (let key in obj) {
    let value = obj[key];
    if (typeof value === 'object') {
      sum += sumVals(value)
    } else {
      sum += value;
    }
  }
  return sum;
}


let result1 = sumVals({ a: 1, b: { c: 3 }}); // 4

let result = sumVals({
  a: 1,
  b: {
    c: {
      d: {
        e: 2,
        f: 3
      }
    }
  }
})

console.log(result);