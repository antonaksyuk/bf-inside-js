/**
 * takes an array of strings and returns a new array
 *  the new array contains all the numbery strings, cast to number
 * does not modify the argument
 * @param {string[]} arr - the array of strings
 * @returns {number[]} an array containing numbers that aren't NaN
 */
export const numberyNumberify = (arr) => {
  let arrOfNumbers = [];
  for (let i = 0; i < arr.length; i++) {
    let number = Number(arr[i]);
    if(!isNaN(number)) {
      arrOfNumbers.push(number);
    }
  }
  return arrOfNumbers;
};
