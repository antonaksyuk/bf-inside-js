import { readNumber, readString, display } from '../../../../lib/dom-io.js';

document.getElementById('repeat-them').addEventListener('click', () => {
  debugger;

  // read user values
  const userText = readString('user-text');
  const repeatNumber = readNumber('number-of-times');

  // repeat the characters in the text

  let doubled = '';

  for (let i = 0; i < userText.length; i++) {
    for (let x = 0; x < repeatNumber; x++) {
        doubled += userText[i];
    }
  }

  // display the text with repeated characters
  display('repeated-output', doubled);

});
