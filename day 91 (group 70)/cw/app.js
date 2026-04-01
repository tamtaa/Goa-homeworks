//1.

import { add, multiply } from "./cw.js";

console.log(add(2, 3));       // 5
console.log(multiply(4, 5));  // 20

//2.
import { toUpper, toLower, reverse } from "./cw2.js";

console.log(toUpper("hello"));   // HELLO
console.log(toLower("WORLD"));   // world
console.log(reverse("hello"));   // olleh


//3.
import toUpperCaseText, { reverseText, addExclamation } from "./cw3.js";

console.log(toUpperCaseText("hello")); // HELLO
console.log(reverseText("hello"));     // olleh
console.log(addExclamation("hello"));  // hello!
//4.
import products, { getAllProducts, filterByPrice } from "./cw4.js";

console.log(products);
console.log(getAllProducts());
console.log(filterByPrice(800));

//5.
import user, { greetUser, getAge } from "./cw5.js";

console.log(greetUser(user));
console.log(getAge(user));