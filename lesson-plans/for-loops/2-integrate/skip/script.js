import { readNumber, readString, display } from '../../../../lib/dom-io.js';

document.getElementById('skip-them').addEventListener('click', () => {
  debugger;

  // read user values
  const userInput = readString('user-text');
  const skipNumber = readNumber('skip-size');

  // create a new string with skipped characters
  let clicedText = '';

  for (let i = 0; i < userInput.length; i += skipNumber) {
    clicedText += userInput[i];
  }

  // display the skipped string
  display('skipped-output', clicedText)
});
