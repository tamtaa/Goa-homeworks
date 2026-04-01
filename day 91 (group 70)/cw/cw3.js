

// 3) შექმენი ფაილი ტექსტის დამუშავებისთვის.
// ფუნქცია რომელიც ტექსტს დიდ ასოებად გადაიყვანს
// ფუნქცია რომელიც ტექსტს შემოაბრუნებს
// ფუნქცია რომელიც ტექსტს დაამატებს ძახილის ნიშანს
// ერთ-ერთი ფუნქცია იყოს default expor
// დანარჩენი იყოს named export
// შემდეგ სხვა ფაილში
// დააიმპორტე ყველა ფუნქცია
// გააკეთე მაგალითები.

// default export
export default function toUpperCaseText(text) {
  return text.toUpperCase();
}

// named exports
export function reverseText(text) {
  return text.split("").reverse().join("");
}

export function addExclamation(text) {
  return text + "!";
}
