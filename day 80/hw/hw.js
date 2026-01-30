// 1. ყველა რიცხვი გამრავლებულია 5-ზე
const nums2 = [1, 2, 3, 4];
const multiplied = nums2.map(num => num * 5);
console.log(multiplied);

// 2. სახელები uppercase-ში
const names = ["Ana", "Gio", "Nika"];
const upperNames = names.map(name => name.toUpperCase());
console.log(upperNames);

// 3. 18%-იანი VAT დამატება
const prices = [10, 20, 30];
const pricesWithVAT = prices.map(price => price * 1.18);
console.log(pricesWithVAT);

// 4. თითოეულ სიტყვას "!" დაემატოს ბოლოს
const sentences = ["hi", "hello", "js"];
const excitedSentences = sentences.map(s => s + "!");
console.log(excitedSentences);

// 5. მხოლოდ ფასები
const items = [
    {product: "milk", price: 3},
    {product: "bread", price: 2}
];
const pricesOnly = items.map(item => item.price);
console.log(pricesOnly);
// 1. დაბეჭდე ელემენტი + ინდექსი
const arr = [10, 20, 30, 40];
arr.forEach((value, index) => {
    console.log(`${index}: ${value}`);
});

// 2. დაბეჭდე თითოეული სიტყვის სიგრძე
const words = ["apple", "banana", "cat"];
words.forEach(word => {
    console.log(word.length);
});

// 3. დაითვალე რიცხვების ჯამი
const nums = [3, 6, 9, 12];
let sum = 0;
nums.forEach(num => {
    sum += num;
});
console.log("Sum:", sum);

// 4. დაბეჭდე "name: age" ფორმატით
const users = [
    {name: "Nika", age: 17},
    {name: "Lika", age: 19}
];
users.forEach(user => {
    console.log(`${user.name}: ${user.age}`);
});

// 5. დაამატე # თითოეულ ასოს წინ და დაბეჭდე
const letters = ["a", "b", "c"];
letters.forEach(letter => {
    console.log(`#${letter}`);
});
