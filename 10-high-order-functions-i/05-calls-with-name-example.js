/*
https://goo.gl/F6D3rA

*/
function saysHi(name) {
  console.log(`Hi ${name}!`);
  //return undefined;
}

function saysBye(name) {
  console.log(`Bye ${name}!`);
}

function callsWithName(name, sayHiOrBye) {
  sayHiOrBye(name);
}

callsWithName('Sadie', saysHi);  // saysHi('Sadie')  // `Hi Sadie!`
callsWithName('Sadie', saysBye); // saysBye('Sadie')

