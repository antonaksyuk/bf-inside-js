/**
 * returns true if a string is excited
 * (meaning it contains an "!")
 * @param {string} str - the string
 * @returns {boolean} is it excited?
 */
export const isExcited = (str) => {
  if (str.includes('!')){
    return true 
  } else {
    return false
  };
};
