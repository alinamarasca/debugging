'use strict';

/* look out for:

  - variable declarations
  - conditional checks
  - break vs. continue
  - incorrect casting to Number

*/

let userNumber = NaN; //will be reassigned
while (Number.isNaN(userNumber)) {
  const userInput = prompt('enter a number');

  if (userInput === '' || userInput === null) {
    alert('enter something!');
    continue; //start the loop
  }

  userNumber = Number(userInput); //turn into Number

  if (Number.isNaN(userNumber)) {
    alert(`"${userInput}" is not a number`);//what a mess
  }
}

if (userNumber % 2 === 0) {
  alert(userNumber + ' is even');
} else {
  alert(userNumber + ' is odd');
}
