// 1. ჩვეულებრივი ფუნქცია (Function Declaration)
// - ქმნის ფუნქციას სახელით
// - შეიძლება გამოვიძახოთ მის შექმნამდე
function myFunc1() {
  return "ეს არის ჩვეულებრივი ფუნქცია";
}

// 2. ფუნქციის გამოძახება ცვლადში (Function Expression)
// - ანონიმური ფუნქცია, რომელიც ინახება ცვლადში
// - არ შეიძლება გამოვიძახოთ შექმნამდე
const myFunc2 = function () {
  return "ეს არის ფუნქცია გამოძახებული ცვლადში";
};

// 3. ისრისებური ფუნქცია (Arrow Function)
// - მოკლე სინტაქსი
// - არ აქვს საკუთარი this
const myFunc3 = () => {
  return "ეს არის arrow ფუნქცია";
};

// განსხვავებები:
// - ჩვეულებრივი ფუნქცია შეიძლება გამოიძახო მის შექმნამდე (hoisting)
// - function expression და arrow function მხოლოდ შექმნის შემდეგ მუშაობს
// - arrow function არ ქმნის საკუთარ "this"-ს, ჩვეულებრივი კი ქმნის

function square(number) {
  return number * number;
}
console.log(square(4)); 

const fullName = function(firstName, lastName) {
  return firstName + " " + lastName;
};
console.log(fullName("Tamta", "Bakhtadze")); 

function double(number) {
  return number * 2;
}
console.log(double(7));

// for ციკლი შედგება სამი ნაწილისგან:
// 1. საწყისი მნიშვნელობა (initialization) – საიდან უნდა დაიწყოს
// 2. პირობა (condition) – სანამ პირობა ჭეშმარიტია, ციკლი გრძელდება
// 3. ცვლილება (increment/decrement) – ყოველი გამეორების შემდეგ რითი შეიცვალოს
//
// სინტაქსი:
// for (საწყისი; პირობა; ცვლილება) {
//     // კოდი, რომელიც უნდა შესრულდეს
// }


for (let i = 1; i <= 10; i++) {
  console.log(i);
}

for (let i = 5; i <= 100; i += 5) {
  console.log(i);
}

for (let i = 10; i >= 1; i--) {
  console.log(i);
}

const printNumbers = (num) => {
  for (let i = 1; i <= num; i++) {
    console.log(i);
  }
};
printNumbers(7); 

const printEveryFifth = (num) => {
  for (let i = 5; i <= num; i += 5) {
    console.log(i);
  }
};
printEveryFifth(30);
