'use strict';

// prettier-ignore
const deepCompare = (actual, expect) => actual === expect || Object.is(actual, expect) || (Object(actual) === actual && Object(expect) === expect) && (Array.isArray(actual) && Array.isArray(expect) && actual.length === expect.length && expect.every((expect, index) => deepCompare(actual[index], expect)) || Object.keys(actual).length === Object.keys(expect).length && Object.keys(expect).every((key) => deepCompare(actual[key], expect[key])));

// one array in memory
//  how many solutions can you find?
// psst.  use JS Tutor & the debugger

const array1 = [1, 2, 3];
const array2 = array1;

const test1 = array1 === array2;
console.assert(test1, 'Test 1');

const test2 = deepCompare(array1, array2);
console.assert(test2, 'Test 2');
