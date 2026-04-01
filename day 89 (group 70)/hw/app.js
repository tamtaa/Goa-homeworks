// app.js
import { add, multiply } from './math.js';

console.log(add(5, 5));      
console.log(multiply(5, 5)); 



import { toUpper, toLower, reverse } from './stringUtils.js';

console.log(toUpper("hello")); 
console.log(toLower("hello")); 
console.log(reverse("hello")); 



const user = {
  name: "tamta",
  age: 22,
  profession: "student"
};

export default user;

export function greetUser(user) {
  console.log(`hello, ${user.name}!`);
}

export function showAge(user) {
  console.log(`${user.name}: ${user.age}`);
}
import user, { greetUser, showAge } from './user.js';

greetUser(user); 
showAge(user);  

console.log("hello", user);




export default function ttext(text) {
  return text.toUpperCase();
}
export function reverseText(text) {
  return text.split('').reverse().join('');
}
export function addExclamation(text) {
  return text + "!";
}
import ttext, { reverseText, addExclamation } from './text.js';

const text = "hello";

console.log(ttext(text));        
console.log(reverseText(text));  
console.log(addExclamation(text)); 



const products = [
  { name: "puri", price: 1 },
  { name: "shaqari", price: 2 },
  { name: "zeti", price: 3 },
  { name: "marili", price: 4 },
];

export default products;
export function get() {
  return products;
}
export function filter(minPrice) {
  return products.filter(product => product.price >= minPrice);
}
import products, { get, filter } from './products.js';

console.log(get());

console.log(filter(3));

console.log(products);