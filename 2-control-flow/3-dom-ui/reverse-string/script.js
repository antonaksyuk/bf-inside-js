import { readString, display } from '../../../lib/dom-io.js';

document.getElementById('reverse-it').addEventListener('click', () => {
  debugger;

  // read user text
  const userInputStr = readString('user-text');

  // use a for loop that counts down (i--) to reverse the input
  let reversedStr = '';

  for (let i = userInputStr.length - 1; i >= 0; i--) {
    reversedStr += userInputStr[i];
  }

  display('reversed-output', reversedStr);
  // display the reversed string
});
