'use strict';

let userInput = '';
let isValidName = false;
while (!isValidName) {
  /* -- BEGIN: validate input -- */
userInput = prompt('enter name');

if (userInput === null || userInput === '') {
  alert('that nothing, enter name');
} else {
  let userConfirmed = 'is this correct? ' + userInput; //HOW TO WRITE THAT?
  isValidName = confirm(userConfirmed);
  break;
}
}
/* -- END: validate input -- */


const finalMessage = `your name is: "${userInput}"`;
alert(finalMessage);
