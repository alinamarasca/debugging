'use strict';

let userInput = '';
while (true) {
  userInput = prompt('tell me something about frogs');

  /* -- BEGIN: validate input -- */
if (userInput === '' || userInput === null) {
  alert('try again');
  continue;
} else {
  userInput.toLowerCase().includes('frog');
  break;
}
  /* -- END: validate input -- */
}

const finalMessage =
  'i just learned something cool about frogs!\n\n- "' + userInput + '"';
alert(finalMessage);
