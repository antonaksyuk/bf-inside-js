import { readString, display } from '../../../../lib/dom-io.js';

document.getElementById('pyramid-it').addEventListener('click', () => {
  debugger;

  // read user text
  const userInput = readString('to-pyramid');

  // create the pyramid

let result = '';
  for (let i = 0; i < userInput.length; i++) {
    let level = '';
    for (let x = i; x < userInput.length; x++) {
      level += userInput[x];
    }
    result += level + '\n';
  }

display('pyramided', result);
  // display the pyramid
});
