import { readNumber, readString, display } from '../../../lib/dom-io.js';

document.getElementById('skip-them').addEventListener('click', () => {
  debugger;

  // read user values
  const userInputNum = readNumber('skip-size');
  const userInputStr = readString('user-text');

  // create a new string with skipped characters
  let newStr = '';
  
  for (let i = 0; i < userInputStr.length; i++) {
    if (i % userInputNum === 0) {
      newStr += userInputStr[i];
    }
  }

  display('skipped-output', newStr);
  // display the skipped string
});
