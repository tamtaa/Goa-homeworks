import { math } from "./hw.js";

console.log(math.add(5, 3));      // 8
console.log(math.subtract(10, 4)); // 6


import { utils } from "./hw2.js";

console.log(utils.min(3, 7));     // 3
console.log(utils.max(3, 7));     // 7
console.log(utils.average(3, 7)); // 5

import { stringUtils } from "./hw3.js"

console.log(stringUtils.capitalize("tamta")); // Tamta
console.log(stringUtils.reverse("tamta"));    // atmat

import math from "./hw4.js";

console.log(math.multiply(4, 5)); // 20
console.log(math.divide(20, 4));  // 5


import { arrayUtils } from "./hw5.js";

let numbers = [2, 5, 8, 3];

console.log(arrayUtils.sumArray(numbers)); // 18
console.log(arrayUtils.findMax(numbers));  // 8

import { user, greet } from "./hw6.js";

console.log(user.name);  // Tamta
console.log(user.age);   // 21
console.log(greet());    // Hello, Tamta!



import { user } from "./hw7.js";
import { transfer } from "./hw7(2).js";
import { getAccountInfo } from "./hw7(3).js";
import { log } from "./hw7(4).js";

log(getAccountInfo(user)); // Name: Tamta, Balance: 100

transfer(user, "deposit", 50);
log(getAccountInfo(user)); // Name: Tamta, Balance: 150

transfer(user, "withdraw", 30);
log(getAccountInfo(user)); // Name: Tamta, Balance: 120

transfer(user, "deposit", 80);
log(getAccountInfo(user)); // Name: Tamta, Balance: 200