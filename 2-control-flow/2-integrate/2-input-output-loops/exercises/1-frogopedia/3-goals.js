// #todo

'use strict';

let userInput = '';
while (true) {
  userInput = prompt('tell me something about frogs');

  /* -- BEGIN: validate input -- */

  if (!userInput) {
    continue;
  }
  if (
    userInput.toLocaleLowerCase().includes('frog') ||
    userInput.toLocaleUpperCase().includes('FROG')
  ) {
    break;
  }

  /* -- END: validate input -- */
}

const finalMessage =
  'i just learned something cool about frogs!\n\n- "' + userInput + '"';
alert(finalMessage);
