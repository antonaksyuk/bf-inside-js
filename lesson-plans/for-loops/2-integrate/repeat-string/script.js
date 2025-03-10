import { readNumber, readString, display } from '../../../../lib/dom-io.js';

document.getElementById('repeat-it').addEventListener('click', () => {
  debugger;

  // read user values
  const userText = readString('user-text');
  const repeatNumber = readNumber('number-of-times');

  // repeat the characters in the text
  let repeated = '';

  for (let i = 0; i < repeatNumber; i++) {
    repeated += userText;
  }

  // display the text with repeated characters

  display('repeated-output', repeated);
});
