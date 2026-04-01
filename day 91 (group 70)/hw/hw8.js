
// 8.
// შექმენი ფაილი stringTools.js. დაწერე ორი ფუნქცია. პირველი ფუნქცია reverse(text) უნდა აბრუნებდეს ტექსტს უკუღმა და იყოს named export. მეორე ფუნქცია countLetters(text) უნდა ითვლიდეს ტექსტში რამდენი ასოა for loop-ის გამოყენებით და იყოს default export. შემდეგ main.js-ში დააიმპორტე ორივე ფუნქცია და გამოიტანე შედეგები console.log-ში.
// named export
export function reverse(text) {
  return text.split("").reverse().join("");
}

// default export
export default function countLetters(text) {
  let count = 0;

  for (let i = 0; i < text.length; i++) {
    count++;
  }

  return count;
}