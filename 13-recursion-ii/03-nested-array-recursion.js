/* 

https://goo.gl/XRkfQu

*/

function logsAnArray(array) {
  for (let i = 0; i < array.length; i++) {
    let element = array[i];
    if (Array.isArray(element)) {
      logsAnArray(element);
    } else {
      console.log(element);
    }
  }
}

logsAnArray([1, [2, [3]], 4, 5]);