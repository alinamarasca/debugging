'use strict';

/* look out for

  - comparison vs. assignment
  - off-by-one character index
  - reversing boolean flag

*/

let validInput = '';
let isValid = false;
while (!isValid) {
  let userInput = prompt('enter anything with "e" or "E" as the 5th letter');

  if (userInput === null || userInput === '') { //= instead of ===
    alert('that is nothing');
  } else if (userInput.length < 5) { // was >5
    alert('too short');
  } else if (userInput[4] === 'e' || userInput[4] === 'E') { // was &&
    isValid = true; //toggle flag
    validInput = userInput;
  } else {
    alert('input has no "e" or "E" as the 5th character');
  }
}

alert('done: "' + validInput + '"');
