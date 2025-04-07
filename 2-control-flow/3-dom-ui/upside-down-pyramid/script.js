import { readString, display } from '../../../lib/dom-io.js';

document.getElementById('pyramid-it').addEventListener('click', () => {
  debugger;

  // read user text
  const userInpurStr = readString('to-pyramid');

  // create the pyramid
let pyramide = '';

  for (let i = 0; i < userInpurStr.length; i++) {

    let acc = '';

    for (let x = 0; x < userInpurStr.length; x++) {
      acc += userInpurStr[a];
    }
    pyramide += acc +'\n';
  }

  display('pyramided', pyramide);

  // display the pyramid
});
