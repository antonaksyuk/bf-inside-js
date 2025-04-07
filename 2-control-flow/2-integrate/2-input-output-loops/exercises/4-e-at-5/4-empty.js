// #todo

'use strict';

let validInput = '';
let isNotValid = true;
while (isNotValid) {
  const userInput = prompt('enter anything with "e" or "E" as the 5th letter');

  /* -- BEGIN: validate input -- */
  if (userInput === '' || userInput === null) {
    alert('enter something');
    continue;
  }

  if(userInput.length < 5){
    alert('too short');
    continue;
  }

  if(userInput[4].toLowerCase() !== 'e'){
    alert('the 5th character is not "e"')
    continue;
  }

  if ((userInput.length >= 5 && (userInput[4] === 'e') || userInput[4] === 'E'));
    validInput = userInput;
  break;
  /* -- END: validate input -- */
}

alert('done: "' + validInput + '"');