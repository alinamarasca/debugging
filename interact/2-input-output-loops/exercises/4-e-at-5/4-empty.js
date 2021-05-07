"use strict";

let input = '';
function getPrompt() {
  input = prompt('enter word where 5th letter is "e" upper or lower case');
  return input;
  }

function timeForInput(input) {
  let answer = '';
  input = input.toLowerCase();
  input = input.split(""); //START THE LOOP!!!!!!!!
  let loopy = false;
  while (!loopy)
    if(input[4] == 'e'){
    answer = ('that\'s RIGHT');
    console.log(answer);   
    return ('YES');
        
  } else {
    input = prompt('WRONG, try again')
    input = input.toLowerCase();
    input = input.split("");
    //answer = ('that\'s WRONG');
    //console.log(answer);
    //return answer; 
    continue;
  }
  //return ('NO');
}

getPrompt();
timeForInput(input);
//we need to make re-ask we we gave wrong input

/*
let input = '';
function getPrompt() {
  input = prompt('enter word where 5th letter is "e" upper or lower case');
  return input;
  }


function timeForInput(input) {
  let answer = '';
  input = input.toLowerCase();
  input = input.split("");
    if(input[4] == 'e'){
    answer = ('that\'s RIGHT');
    console.log(answer);   
    return answer; 
    
    
  } else {
    answer = ('that\'s WRONG');
    console.log(answer);
    return answer; 
    
  }
}

getPrompt();
timeForInput(input);
//we need to make re-ask we we gave wrong input
*/
