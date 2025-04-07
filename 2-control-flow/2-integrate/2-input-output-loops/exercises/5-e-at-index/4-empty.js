// #todo

'use strict';

let userInput = '';
let isValidName = false;
while (!isValidName) {
  /* -- BEGIN: validate input -- */
  userInput = prompt('Enter yoyr name');
  console.log('userInput: ', typeof userInput, userInput);

  if (userInput === '' || userInput === null) {
    alert('Enter your name');
    continue;
  }
  if (userInput) {
    isValidName = true;
    break;
  }
  /* -- END: validate input -- */
}

const finalMessage = `your name is: "${userInput}"`;
alert(finalMessage);