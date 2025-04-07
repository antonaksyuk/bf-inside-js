// #todo

'use strict';
const startGame = alert(`Let's plae to memorise!`);

let input1 = '';
let input2 = '';
let input3 = '';

while (input1 === '' || input1 === null) {
  input1 = prompt('enter your first secret phrase:');
}
while (input2 === '' || input2 === null) {
  input2 = prompt('enter your second secret phrase:');
}
while (input3 === '' || input3 === null) {
  input3 = prompt('enter your third secret phrase:');
}

const saved = alert(`All phrases are savet, let's continue...`);

const randomDecimal = Math.random();
const decimalTimes3 = randomDecimal * 3;
const randomFrom1To3 = Math.ceil(decimalTimes3);

const attempt = prompt(`enter phrase number` + randomFrom1To3);

let correctAnswer = '';

if (randomFrom1To3 === 1) {
  correctAnswer = input1;
} else if (randomFrom1To3 === 2) {
  correctAnswer = input2;
} else if (randomFrom1To3 === 3) {
  correctAnswer = input3;
}

const guessIsCorrect = attempt === correctAnswer;

const gameResult = guessIsCorrect
  ? 'correct phrase ' + randomFrom1To3 + ' was"' + attempt + '"'
  : 'nope :(';

alert(gameResult);
