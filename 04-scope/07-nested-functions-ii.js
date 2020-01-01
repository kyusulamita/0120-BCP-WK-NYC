/* note the inner function can access the scope of the outer function,but the opposite is not true */
// http://www.pythontutor.com/visualize.html#code=function%20outer%28%29%20%7B%0A%20%20let%20outerVar%20%3D%20'outer'%3B%0A%20%20function%20inner%28%29%20%7B%0A%20%20%20%20let%20innerVar%20%3D%20'inner'%3B%0A%20%20%20%20console.log%28outerVar,%20innerVar%29%3B%0A%20%20%7D%0A%20%20inner%28%29%3B%0A%20%20console.log%28innerVar%29%3B%0A%7D%0Aouter%28%29%3B&cumulative=false&heapPrimitives=nevernest&mode=edit&origin=opt-frontend.js&py=js&rawInputLstJSON=%5B%5D&textReferences=false
/*
function outer() {
  let outerVar = 'outer';
  function inner() {
    let innerVar = 'inner';
    console.log(outerVar, innerVar);
  }
  inner();
  console.log(innerVar);
}
outer();
*/


/* the inner function still looks for a local declaration of the variable name before looking at the next level of scope */
// http://www.pythontutor.com/visualize.html#code=function%20outer%28%29%20%7B%0A%20%20let%20outerVar%20%3D%20'outer'%3B%0A%20%20function%20inner%28outerVar%29%20%7B%0A%20%20%20%20//%20outerVar%20undefined%0A%20%20%20%20let%20innerVar%20%3D%20'inner'%3B%0A%20%20%20%20console.log%28outerVar,%20innerVar%29%3B%0A%20%20%7D%0A%20%20inner%28%29%3B%0A%7D%0Aouter%28%29%3B&cumulative=false&heapPrimitives=nevernest&mode=edit&origin=opt-frontend.js&py=js&rawInputLstJSON=%5B%5D&textReferences=false
// /*
function outer() {
  let outerVar = 'outer';
  function inner(outerVar) {
    // outerVar undefined
    let innerVar = 'inner';
    console.log(outerVar, innerVar);
  }
  inner();
}
outer();
// */