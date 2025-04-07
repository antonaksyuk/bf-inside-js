import { readNumber, readString, display } from '../../../lib/dom-io.js';

document.getElementById('repeat-it').addEventListener('click', () => {
  debugger;

  // read user values
  const userInputStr = readString('user-text');
  const userInputNum = readNumber('number-of-times');

  // repeat the string
  let repeatedStr = '';

  for(let i = 0; i < userInputNum; i++) {
    repeatedStr += userInputStr;
  }

display('repeated-output', repeatedStr);
  // display the repeated string
});
