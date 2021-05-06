'use strict';

let userNumber = NaN;
let userNumberIsNaN = true;
while (userNumberIsNaN) {
  const userInput = prompt('enter a number');
  console.log('userInput:', typeof userInput, userInput);

  // make sure the user entered something
  ___;

  userNumber = Number(userInput);
  console.log('userNumber:', typeof userNumber, userNumber);
  'use strict';

  let userNumber = NaN;
  let userNumberIsNaN = true;// <= the flag
  while (userNumberIsNaN) {
    const userInput = prompt('enter a number');
    console.log('userInput:', typeof userInput, userInput);
  
    // make sure the user entered something
    if (userInput == '' || userInput == null) {
      continue;
    }
  
    userNumber = Number(userInput);
    console.log('userNumber:', typeof userNumber, userNumber);
  
    // check if the input was a valid number
    if (!userNumber) {
      alert('"' + userInput + '" is not a number');
    } else {
      // if the input was a number, toggle the flag
      userNumberIsNaN = false;
    }
  }
  
  if (userNumber % 2 === 0) {
    const evenMessage = userNumber + ' is even';
    alert(evenMessage);
  } else {
    const oddMessage = userNumber + ' is odd';
    alert(oddMessage);
  }
  
  // check if the input was a valid number
  if (_) {
    alert('"' + userInput + '" is not a number');
  } else {
    // if the input was a number, toggle the flag
    _ = false;
  }
}

if (userNumber % 2 === 0) {
  const evenMessage = userNumber + ' is even';
  alert(evenMessage);
} else {
  const oddMessage = userNumber + ' is odd';
  alert(oddMessage);
}
