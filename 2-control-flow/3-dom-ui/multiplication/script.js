import { readNumber, display } from '../../../lib/dom-io.js';

document.getElementById('do-math').addEventListener('click', () => {
  debugger;

  // read user values
const firstNumber = readNumber('left');
const secondNumber = readNumber('right');
  
  // use a for loop to multiply the two numbers
  let result = 0;

  for(let i = 0; i < secondNumber; i++){
    result = firstNumber * secondNumber;
  };

display('product', result);
  // display the product
});
