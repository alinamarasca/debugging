'use strict';

let userInput = '';
while (userInput === '') {
  /* -- BEGIN: validate input -- */
  userInput = prompt('enter word 5 letters minimum');
  //break;

if (userInput === null) { //never true
  alert('thats nothing');
continue;
} else if (userInput.length < 5) { //The ending else is not mandatory. As for whether it is needed, it depends on what you want to achieve.


  alert('too short');
  userInput ='';
  continue;
} 
}




  /* -- END: validate input -- */


const finalMessage =
  '"' + userInput + '" is ' + userInput.length + ' characters long';
alert(finalMessage);
