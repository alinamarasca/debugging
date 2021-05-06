'use strict';

let stringToRepeatify = '';
let repetitions = NaN; //if it is not a number it will ask you again till you enter number
while (true) {
  /* gather a string from the user */
  stringToRepeatify = prompt('enter a phrase, each character will be repeated:');
  console.log('stringToRepeatify:', typeof stringToRepeatify, stringToRepeatify);

  /* make sure the user input something */
  if (stringToRepeatify === '' || stringToRepeatify === null) {
    alert('nope, enter something');
  } else {
    /* ask the user for a number */
    let inputIsNumber = false;
    while (!inputIsNumber) { //true
      const repetitionsInput = prompt(
        'how many times do you want to repeat each character?'
      );

      /* make sure the user input something */
      if (repetitionsInput === null || repetitionsInput === '') {
        alert('enter something');
      } else {
        /* convert their string to a number */
        repetitions = Number(repetitionsInput);

        /* make sure the user input a valid number */
        if (Number.isNaN(repetitions)) { //here ()
          alert('"' + repetitionsInput + '" is not a number');
        } else {
          inputIsNumber = Number(repetitionsInput);
        }
      }
    }

    /* ask the user to confirm their input */
    const confirmMessage =
      'is this correct?\n\n' + '- "' + stringToRepeatify + '"\n' + '- ' + repetitions;
    const confirmation = confirm(confirmMessage);
    if (confirmation) {
      break;
    }
  }
}

let withRepeatedCharacters = '';

/* iterate through each character in the user input */
for (let character of stringToRepeatify ) { //() OR IN?
  /* append each character multiple times to the new string */
  for (let i = 0; i < repetitions; i++) { //()
    withRepeatedCharacters += character;
  }
}

const finalMessage = `"${stringToRepeatify}" -> "${withRepeatedCharacters}"`;
alert(finalMessage);
