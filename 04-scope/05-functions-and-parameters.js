/* parameters are also locally scoped */
let message = 'think globally';
function logAMessage(message) {
  // message = "act locally"
  console.log(message);
}
logAMessage('act locally');