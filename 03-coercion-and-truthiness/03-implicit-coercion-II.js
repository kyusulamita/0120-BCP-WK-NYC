console.log(true == "1")
const leftSide = Number(true);
const rightSide = Number("1");

// Number(true) => 1
// Number(false) => 0

console.log(leftSide, rightSide);
console.log(leftSide === rightSide);