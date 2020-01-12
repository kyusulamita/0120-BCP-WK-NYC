
// function countVowels(sentence) {
//   //variables
//   //set sentence to lower case;
//   let loweredStr = sentence.toLowerCase();
//   //throw sentence into an array divided up by space (will look like words), joined together (will look like one string of characters put together), and then split up again by individual character (will look like an array of individual characters as strings);
//   let arrStr = loweredStr.split(' ').join('').split('');
//   console.log(arrStr);
//   //create vowels variable
//   let vowels = ['a', 'e', 'i', 'o', 'u'];
//   //set count variable equal to zero so we can add to it later on;
//   let count = 0;
//   //base case
//   //if the length of the arrayed string is equal to 1, then return the count;
//   if (arrStr.length === 1) {
//     return count;
//   //recursive case;
//     //if the character at the last index of arrStr has a vowel, add to the count
//   } else if (arrStr[arrStr.length -1].includes(vowels)) {
//     ++count;
//     //call the function, this time without the character at the last index in the original sentence;
//     countVowels(sentence.slice(0, -1));
//   }
// }

// countVowels(''); // 0
// countVowels('b'); // 0
// countVowels('e'); // 1
// countVowels('life is like a box of chocolates');  // 11




function countVowels(sentence) {

  //variables
  //set sentence to lower case;
  let loweredStr = sentence.toLowerCase();
  //create vowels variable
  let vowels = ['a', 'e', 'i', 'o', 'u'];
  //set count variable equal to zero so we can add to it later on;
  let count = 0;
  //base case
  if (loweredStr.length === 0){
    // no letters === no vowels
    return 0;
  }
  //if the length of the arrayed string is equal to 1, then return the count;
  if (loweredStr.length === 1) {
    // ['a', 'e', 'i' , 'o', 'u'].includes('b') ???
    if (vowels.includes(loweredStr[0])) {
      // count++;  // 0 + 1
      return 1;
    } else {
      return 0;
    }
    // return count;
    //recursive case;
    //if the character at the last index of arrStr has a vowel, add to the count
  } 

  const lastChar = loweredStr[loweredStr.length - 1]; // 'a'
  const restOfStr = sentence.slice(0, -1); // 'b'

  if (vowels.includes(lastChar)) { // ['a', 'e', 'i' , 'o', 'u'].includes('a')
    count++;  // count = 1

  }

  const restOfStrVowelCnt = countVowels(restOfStr); // countVowels('b') => 0
  // count will be 0 if last character was not a vowel
  // 1 if it was a vowel

  return count + restOfStrVowelCnt; // 1 + 0 => 1

}

// console.log(countVowels('')); // 0
// console.log(countVowels('b')); // 0
// console.log(countVowels('e')); // 1
console.log(countVowels('bac')) // 1
// console.log(countVowels('life is like a box of chocolates'));  // 12


