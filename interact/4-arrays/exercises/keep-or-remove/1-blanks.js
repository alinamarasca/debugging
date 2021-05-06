'use strict';

/*
  gathers input from a user until they cancel
  then allows the user to filter out the ones they don't want anymore
*/

 alert(`enter as many inputs as you want.When you're done entering allInputs press "cancel"`);

// -- gather user input --

// you can use `const` because the variable is not reassigned
//  the contents of the array will change
//  but the variable will still reference the same array
const allInputs = []; //here go inputs
let donePushing = false; //i press cancel
while (!donePushing) { //true
  const input = prompt('enter the next phrase or press "cancel"');

  // -- validate the input --
  if (input === null) { // if i press cancel
    // -- check if the user is done --
    donePushing = true;
  } else if (input === '') { // if OK but empty
    // -- check if the user input nothing --
    alert('nothing is not allowed');
  } else {
    // -- push the input --
    allInputs.push(input);
  }
} // result is allInput = [q, w, e, r]

// -- allow the user to filter their inputs --
const keepThese = []; //create array with what we keep
for (let i = 0; i < allInputs.length; i++) { //allInputs
  const keepIt = confirm(`do you want to keep "${allInputs[i]}"?`);//cancel - false, ok - true; 
  if (keepIt) { // if true
    keepThese.push(allInputs[i]);
  }
} //if cancel - nothing

// -- build the final message --
let message = '';
for (const text of keepThese) { //<--how mnay times to ask
  message += `- "${text}"\n`;
}


// -- alert the final message --
alert(message);

// -- log for the developer --
console.log(allInputs, keepThese);
