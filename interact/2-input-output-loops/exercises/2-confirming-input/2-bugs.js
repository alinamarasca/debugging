'use strict';

/* look out for:

  - look condition
  - conditional checks
  - which interaction functions are used

*/

let userInput = '';
let userConfirmed = false;
while (!userConfirmed) { // bug - no !
  userInput = prompt('enter your name:');
  console.log('YOLO:', typeof userInput, userInput);

  if (userInput === null || userInput === '') {
    alert('nothing is not a name');
    continue;
  }

  const confirmMessage = 'is this correct?\n"' + userInput + '"';
  userConfirmed = confirm(confirmMessage); // bug- alert
}

const finalMessage = `your name is: "${userInput}"`;
alert(finalMessage);
