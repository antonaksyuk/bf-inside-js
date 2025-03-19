// #todo

/**
 *Check if every string length in array of stringth is greater or equal to long
 * 
 * @param {Array} [strinth = []] - array of stringth
 * @param {number} [long=0] - the length of string which is check
 * return {boolean}
 */
export const allLong = (strings = [], long = 0) => {
  return strings.every((str) => str.length >= long);
};
