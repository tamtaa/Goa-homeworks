// 2) შექმენი ფაილი stringUtils.js
// დააექსპორტე 3 ფუნქცია:
// toUpper(text)
// toLower(text)
// reverse(text)
// შემდეგ main.js
// დააიმპორტე ყველა ფუნქცია
// თითოეულზე გააკეთე მაგალითი

export function toUpper(text) {
  return text.toUpperCase();
}
export function toLower(text) {
  return text.toLowerCase();
}
export function reverse(text) {
  return text.split('').reverse().join('');
}



