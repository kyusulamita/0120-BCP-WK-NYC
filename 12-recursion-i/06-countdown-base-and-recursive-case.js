/* 

that started off so promisingly!

because our function was instructed to call itself every time, the function ends up calling itself forever until our computer runs out of memory

let's write in a stop condition so the function eventually stops calling itself 


https://goo.gl/EpNPCt

*/


// function countdown(num) {
//   // here's our stop condition, commonly known as the 'base case'
//   if (num < 1) {
//     //  there is no more work to do
//     console.log('done!');
//   }
//   // here's our 'recursive case'
//   else {
//     // num >= 1
//     console.log(num);
//     countdown(num - 1);
//   }
// }

// countdown(3);


/* two takeaways from countdown: */

/* 1. you need to define a base case! */
/* 2. your recursive case must change the input to the function so that you will eventually trigger the base case! */

/*

really quickly lets compare the iterative and recursive version:

iterative:
function countdown(num) {

  for (let i = num; i >= 1; i--) {
    console.log(i);
  }
  console.log('done!');
}


recursive:
function countdown(num) {
  // base condition
  if (num < 1) {
    console.log('done!');
  }
  // here's our 'recursive case'
  else {
    console.log(num);
    countdown(num - 1); // 
  }
}

OR
function countdown(num) {
  // recursive case
  if (num >= 1){
    console.log(num);
    countdown(num - 1); // countdown(num--); MAX CALL STACK EXCEEDED
    // countdown(--num); //perfectly fine
  } else {
    // base case
    console.log('done!');
  }
}


/*/

// use this value, and then decrement it by one
// num--

// decrement by one and then use this value
// --num

// let num1 =  100;
// let num2 =  100;

// console.log(--num1); // 99
// console.log(num2--);  // 100


// console.log(num1); // 99
// console.log(num2);  // 99


function countdown(num) {
  // recursive case
  if (num >= 1){
    console.log(num);
    num--;
    countdown(num);
    // countdown(num--);  // 
    // countdown(num - 1); // countdown(num--); MAX CALL STACK EXCEEDED
    // countdown(--num); //perfectly fine
  } else {
    // base case
    console.log('done!');
  }
}

countdown(4);
