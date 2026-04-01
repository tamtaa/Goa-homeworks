// 6.
// შექმენი ფაილი sumNumbers.js. დაწერე ფუნქცია sumTo(n) რომელიც for loop-ის გამოყენებით დაითვლის 1-დან n-მდე რიცხვების ჯამს და დააბრუნებს შედეგს. ეს ფუნქცია გააკეთე default export. შემდეგ main.js-ში დააიმპორტე ეს ფუნქცია და გამოიძახე console.log-ში.
export default function sumTo(n) {
  let sum = 0;

  for (let i = 1; i <= n; i++) {
    sum += i;
  }

  return sum;
}