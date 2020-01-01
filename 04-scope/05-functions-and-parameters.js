/* parameters are also locally scoped */
let message = 'think globally';
function logAMessage(message) {
  // message = "act locally"
  console.log(message);
}
logAMessage('act locally');


// let message = 'think globally';

// function logAMessage(message) {
//   console.log(message);
// }
// logAMessage();