// #todo

'use strict';

let userInput = '';
while (true) {
  userInput = prompt('enter a word to filter:');

if(userInput === '' || userInput === null){
  alert('nope, enter something');
  continue
}

  const whiteSpaceRegex = new RegExp('\\s', 'g');
  if (whiteSpaceRegex.test(userInput)) {
    alert("words can't have white space");
    continue;
  }

  const confirmMessage =
    'do you want to filter this word?\n\n' + '- "' + userInput + '"';

  if (confirm(confirmMessage)) {
    break;
  }
}

const removeVowels = confirm(`what would you like to remove from "${userInput}"?
- ok: vowels
- cancel: consonants
`);

let toRemove = '';
if (removeVowels) {
  toRemove = 'AEIOU';
} else {
  toRemove = 'BCDFGHJKLMNPQRSTVWXYZ';
}

let filteredInput = '';
for (const character of userInput) {
  const lowerCaseCharacter = character.toUpperCase();
  if (!toRemove.includes(lowerCaseCharacter)) {
    filteredInput += character;
  }
}

const finalMessage = `"${userInput}" -> "${filteredInput}"`;
alert(finalMessage);
