'use strict';

/*
  gather numbers from a user until they enter "done"
  then average the numbers and display the result
*/

alert(
  `enter as many numbers as you want.

When you're done entering numbers enter "done"
-> your numbers will be averaged`
);

// -- gather user input --

// you can use `const` because the variable is not reassigned
//  the contents of the array will change
//  but the variable will still reference the same array
const numbers = []; //FINAL ARRAY

let doneEntering = false;
while (!doneEntering) {
  const input = prompt('enter the next number or "done"');

  // -- validate the input --

  // -- check if the user is done --
  if ( input === 'done') {
    doneEntering = true;
    continue; //OUT OF THE LOOP UP
  }

  // -- check if the user input nothing --
  if (input === '' || input === null) {
    alert('nothing is not allowed');
    continue; //OUT OF THE LOOP UP
  }

  // -- push the input if it was a number --
  const nextNumber = Number(input); //CONVERT INPUT INTO NUMBER
  if (Number.isNaN(nextNumber)) { //CHECK IF IT IS A NUMBER
    alert(`"${input}" is not a number`);
  } else {
    numbers.push(nextNumber);
  }
}

// -- calculate the sum --
let sum = 0;
for (const monster of numbers) {
  sum += monster;
}

// -- calculate the average --
const average = sum / numbers.length;

// -- build the final message --
let message = `numbers: `; //TYPo
for (const monster of numbers) {
  message += `${monster}, `;
}
message += `\naverage: ${average}`;

// -- alert the final message --
alert(message);
