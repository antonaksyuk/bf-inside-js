// #todo

'use strict';

console.log('-- begin --');

// refactor this code to use a _?_:_ instead of a conditional

// try different values and different types
const isLoggedIn = false;
const secretInformation = 'SECRET IS HERE';
const warningMessage = 'WARNING';
console.log(isLoggedIn, secretInformation, warningMessage);

let toDisplay = isLoggedIn ? secretInformation : warningMessage;

console.log(toDisplay);

console.log('-- end --');
