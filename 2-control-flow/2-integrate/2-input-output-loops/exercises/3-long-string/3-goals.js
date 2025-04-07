// #todo

'use strict';

let userInput = '';
while (userInput === '') {
  /* -- BEGIN: validate input -- */
  userInput = prompt('type something longer than 5 charecters');
  console.log('userInput', typeof userInput, userInput);

  if(userInput.length < 5){
    alert('too short');
    continue;
  }
  /* -- END: validate input -- */
}

const finalMessage =
  '"' + userInput + '" is ' + userInput.length + ' characters long';
alert(finalMessage);
