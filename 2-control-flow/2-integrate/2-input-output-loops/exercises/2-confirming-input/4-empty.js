// #todo

'use strict';
let userInput = '';
let userConfirmed = false;
while (!userConfirmed) {
  userInput = prompt('enter your name:');
  console.log('userInput:', typeof userInput, userInput);

  if (!userInput) {
    alert('nothing is not a name');
    continue;
  }

  const confirmMessage = 'is this correct?\n"' + userInput + '"';
  userConfirmed = alert(confirmMessage);
  break;
}

const finalMessage = `your name is: "${userInput}"`;
alert(finalMessage);