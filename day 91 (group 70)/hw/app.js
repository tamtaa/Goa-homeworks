import { double, triple } from "./hw.js";

console.log(double(5));  // 10
console.log(triple(5));  // 15

import sumTo from "./hw6.js";

console.log(sumTo(5)); // 15

import { getEvenNumbers } from "./hw7.js";

console.log(getEvenNumbers([1,2,3,4,5,6]));
// [2, 4, 6]

import countLetters, { reverse } from "./hw8.js";

console.log(reverse("hello"));     // olleh
console.log(countLetters("hello"));// 5


import { sumEven } from "./hw9.js";
import average from "./hw9(2).js";

const arr = [1, 2, 3, 4, 5, 6];

console.log(sumEven(arr)); // 12
console.log(average(arr)); // 3.5