//http://www.pythontutor.com/visualize.html#code=console.log%28waitForIt%29%3B%0Alet%20waitForIt%20%3D%20'here%20I%20am'%3B%0Aconsole.log%28waitForIt%29%3B&cumulative=false&heapPrimitives=nevernest&mode=edit&origin=opt-frontend.js&py=js&rawInputLstJSON=%5B%5D&textReferences=false
/* EXAMPLE START ===========
// reference error, trying to use it before it's defined! [let keyword]
console.log(waitForIt);
let waitForIt = 'here I am';
console.log(waitForIt);
======== EXAMPLE END */


/* EXAMPLE START ===========

// with the var keyword you would get behavior like this \/
console.log(waitForIt);
var waitForIt = 'here I am';
console.log(waitForIt);

======== EXAMPLE END */


// /* EXAMPLE START ===========
// with function you get behavior like this, functions declared with the `function` keyword are hoisted up

funFunction();

function funFunction(){
  console.log("hello");
}

funFunction();
// ======== EXAMPLE END */