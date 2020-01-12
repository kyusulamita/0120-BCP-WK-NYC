/*

https://goo.gl/9tzNEC

https://goo.gl/46nYK4

*/
function concatEls(array) {
  let finalString = '';
  for (let i = 0; i < array.length; i++) {
    let element = array[i];
    if (Array.isArray(element)) {
      finalString += concatEls(element);
    } else {
      finalString += element;
    }
  }
  return finalString;
}

let result = concatEls(['a', ['b', 'c']]);
console.log(result);