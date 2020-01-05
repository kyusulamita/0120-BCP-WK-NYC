/* 
============================================

when you assign a complex value to a variable, the variable DOES NOTstore a copy of the value 

*/


/* 

instead, the variable stores a reference in memory; the reference points to the value 
https://goo.gl/ZH7PGF
*/

// let first = [10, 20]; // first stores a reference to [10, 20]
// first.push(30); // first still stores the same reference
// console.log(first);


/* 
============================================

https://goo.gl/N7mWcr

*/

// let first = [10, 20]; // first stores a reference to [10, 20]
// let second = [10, 20]; // second stores a new reference to a new array
// second.push(30); // first still stores the same reference
// console.log(first);


/* 
============================================
https://goo.gl/jXDnnM

*/

// let first = [10, 20];
// let second = first; /* second now stores a copy of the REFERENCE that was originally stored in first */

// /* 
// first and second share the same reference to the same array! 
// */
// second.push(30);
// console.log(first);
// console.log(second);


/* 
============================================
https://goo.gl/oTdbYs

*/

// let first = [10, 20];
// let second = first.slice(); // slice creates a new array!
// second.push(30); // first and second reference different arrays
// console.log(first);
// console.log(second);