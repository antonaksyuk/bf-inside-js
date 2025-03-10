import { readString, display } from '../../../../lib/dom-io.js';

document.getElementById('reverse-it').addEventListener('click', () => {
  debugger;

  // read user text
  const userText = readString('user-text');

  // use a for loop that counts down (i--) to reverse the input
  let reversed = '';
  for (let i = userText.length - 1; i >= 0; i--) {
    reversed += userText[i];
  }

  display('reversed-output', reversed);

  // display the reversed string
});
