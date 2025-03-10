import { readNumber, display } from '../../../../lib/dom-io.js';

document.getElementById('do-math').addEventListener('click', () => {
  debugger;

  // read user values
  const inputLeft = readNumber('left');
  const inputRight = readNumber('right');
  // use a for loop to multiply the two numbers
  // if (inputRight > inputLeft) {
  //   [inputLeft, inputRight] = [inputRight, inputLeft];
  // }

let result = inputLeft * inputRight;
  // let result = 0;
  // for (let i = 0; i < inputRigt; i++) {
  //   result += inputLeft;
  // }
  // display the product
  display('product', result)
});
