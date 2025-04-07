import { readNumber, readString, display } from '../../../lib/dom-io.js';

document.getElementById('repeat-them').addEventListener('click', () => {
  debugger;

  // read user values
  const userInputStr = readString('user-text');
  const userInputNum = readNumber('number-of-times');

  // repeat the characters in the text
  let repeatedStr = '';
  for (let i = 0; i < userInputStr.length; i++) {
    for (let x = 0; x < userInputNum; x++) {
      repeatedStr += userInputStr[i];
    }
  }

  display('repeated-output', repeatedStr);
  // display the text with repeated characters
});
