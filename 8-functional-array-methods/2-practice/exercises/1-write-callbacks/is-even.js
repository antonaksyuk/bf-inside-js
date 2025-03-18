// #todo

/**
 * returns true if a number is even
 * otherwise returns false
 * @param {number} num - the number
 * @returns {boolean} is the number even?
 */
export const isEven = (num = 0) => {
  let isEven = num % 2 === 0;
  return isEven;
};
