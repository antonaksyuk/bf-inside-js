import { foodToUpperCase } from './sabotage.js';

describe('foodToUpperCase', () => {
  it('should convert an array of lowercase food names to uppercase', () => {
    const food = ['apple', 'banana', 'cherry'];
    const expectedOutput = ['APPLE', 'BANANA', 'CHERRY'];
    const foodToUpperCase = food.map(food => food.toUpperCase());
    expect(foodToUpperCase).toEqual(expectedOutput);
  });

  it('should handle an empty array', () => {
    const food = [];
    const expectedOutput = [];
    const foodToUpperCase = food.map(food => food.toUpperCase());
    expect(foodToUpperCase).toEqual(expectedOutput);
  });

  it('should handle an array with mixed case food names', () => {
    const food = ['Apple', 'bANana', 'cHeRry'];
    const expectedOutput = ['APPLE', 'BANANA', 'CHERRY'];
    const foodToUpperCase = food.map(food => food.toUpperCase());
    expect(foodToUpperCase).toEqual(expectedOutput);
  });

  it('should handle an array with already uppercase food names', () => {
    const food = ['APPLE', 'BANANA', 'CHERRY'];
    const expectedOutput = ['APPLE', 'BANANA', 'CHERRY'];
    const foodToUpperCase = food.map(food => food.toUpperCase());
    expect(foodToUpperCase).toEqual(expectedOutput);
  });

  it('should handle an array with special characters and numbers', () => {
    const food = ['apple!', '123banana', 'cherry@'];
    const expectedOutput = ['APPLE!', '123BANANA', 'CHERRY@'];
    const foodToUpperCase = food.map(food => food.toUpperCase());
    expect(foodToUpperCase).toEqual(expectedOutput);
  });
});