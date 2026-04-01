import { getMinMax } from './hw.js';

const numbers = [5, 2, 9, 1, 7];
const result = getMinMax(numbers);

console.log(result); 


import { findIndex } from './hw2.js';

const number2 = [3, 8, 12, 4];
console.log(findIndex(number2, 12)); // 2
console.log(findIndex(number2, 7));  // ვერ მოიძებნა


import { findPairs } from './hw3.js';

const numbers3 = [10, 17, 20, 7, 5, 22];
console.log(findPairs(numbers3)); // [ [10,17], [20,7], [5,22] ]


import { getGrade } from './grade.js';

console.log(getGrade(95)); // A
console.log(getGrade(75)); // B
console.log(getGrade(55)); // C
console.log(getGrade(30)); // F

import { analyzeNumbers } from './analyzeNumbers.js';

const numbers6 = [1, 2, 3, 4, 5, 6];
console.log(analyzeNumbers(numbers6));
// { even: 3, odd: 3, sum: 21 }


export function addNumbers(a, b) {
  return a + b;
}

import * as ops from './operations.js';

console.log(ops.sum(3, 4));       // 7
console.log(ops.multiply(3, 4));  // 12
