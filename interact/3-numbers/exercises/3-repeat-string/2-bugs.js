'use strict';

/* look out for:

  - variable declarations
  - missing condition in while loop
  - off-by-one in for loop
  - missing string concatenation

*/

let userInput = ''; // can't be const
let repetitions = NaN; // can't be const

/*get PHRASE*/

while (true) {//gather
  userInput = prompt('enter a phrase to repeat:'); //what
//whatcha gonna do? this case - keep for later, keeping is kinda default -> need to assign to value, but we are assigning already -> no action required
  if (userInput === '' || userInput === null) {//check
    alert('nope, enter something');
    continue;//if no - ask again
  }

/*get REPS*/

  const repetitionsInput = prompt('how many times do you want to repeat it?');//gather
  //whatcha gonna do? this case - convert to number, otherwise can't use
  repetitions = Number(repetitionsInput); //we will repeat this amount of times + convert answer to numer

if (repetitionsInput === '' ||  repetitionsInput === null) {//check
    alert('nope, enter something');
    continue;//if no - ask again
}
  repetitions = Number(repetitionsInput);

  if (!repetitions) { //are falsy like NaN
    alert('"' + repetitionsInput + '" is not a number');
    continue;
  }

  const confirmMessage =
    'is this correct?\n\n' + '- "' + userInput + '"\n' + '- ' + repetitions;
  const confirmation = confirm(confirmMessage);
  if (confirmation) {
  break;
}
}
let repeatedInput = '';

for (let i = 0; i < repetitions; i++) {
  repeatedInput = repeatedInput + userInput;
  continue;

}
alert(`"${userInput}" -> "${repeatedInput}"`);
