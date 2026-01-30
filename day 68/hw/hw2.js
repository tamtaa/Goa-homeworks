// 1) კომენტარის სახით ახსენით do while ლუპი
// do...while ლუპი ასრულებს კოდს მინიმუმ ერთხელ და შემდეგ ამოწმებს პირობას.
// თუ პირობა ჭეშმარიტია, ციკლი მეორდება. განსხვავებით while-ისგან,
// ის ყოველთვის ერთხელ მაინც შესრულდება.


// 2) განსხვავება while-სა და do...while-ს შორის
// while: ჯერ ამოწმებს პირობას, შემდეგ ასრულებს კოდს.
// do...while: ჯერ ასრულებს კოდს ერთხელ მაინც, შემდეგ ამოწმებს პირობას.


// 3) დაბეჭდე რიცხვები 1-დან 5-მდე do...while-ით
let i = 1;
do {
  console.log(i);
  i++;
} while (i <= 5);

console.log("-------------");


// 4) დაბეჭდე რიცხვები 10-დან 1-მდე do...while-ით
let num = 10;
do {
  console.log(num);
  num--;
} while (num >= 1);

console.log("-------------");


// 5) მომხმარებელს შემოაყვანინე რიცხვი prompt-ით და დაბეჭდე 1-დან ამ რიცხვამდე
let number = parseInt(prompt("შეიყვანე რიცხვი:"));
let x = 1;
do {
  console.log(x);
  x++;
} while (x <= number);

console.log("-------------");


// 6) დაბეჭდე მხოლოდ ლუწი რიცხვები 1-დან 20-მდე (if და do...while)
let n = 1;
do {
  if (n % 2 === 0) {
    console.log(n);
  }
  n++;
} while (n <= 20);

console.log("-------------");


// 7) მომხმარებელს შემოაყვანინე რიცხვები მანამ, სანამ არ შეიყვანს უარყოფითს
let input;
do {
  input = parseInt(prompt("შეიყვანე რიცხვი (უარყოფითი რომ დასრულდეს):"));
} while (input >= 0);
console.log("შეყვანა დასრულდა!");

console.log("-------------");


// 8) arrow function, რომელიც აბრუნებს ტექსტს "Hello, World!"
const greet = () => "Hello, World!";
console.log(greet());

console.log("-------------");


// 9) arrow function, რომელიც მიიღებს ორ რიცხვს და დააბრუნებს მათ ჯამს
const sum = (a, b) => a + b;
console.log(sum(5, 7));

console.log("-------------");


// 10) arrow function, რომელიც მიიღებს რიცხვს და დააბრუნებს "Even" თუ ლუწია, "Odd" თუ კენტია
const checkNumber = num => num % 2 === 0 ? "Even" : "Odd";
console.log(checkNumber(4));
console.log(checkNumber(7));

console.log("-------------");


// 11) ახსენი რა არის Template Literals
// Template Literals საშუალებას გვაძლევს სტრიქონში ჩავდოთ ცვლადები `${}` ფორმატით.
// ვიყენებთ backtick ნიშანს (` `) ნაცვლად ბრჭყალების.


// 12) ცვლადები name და age + Template Literal
let name = "Tamta";
let age = 20;
console.log(`My name is ${name} and I am ${age} years old.`);

console.log("-------------");


// 13) სახელი, პროფესია, ქვეყანა + Template Literal
let profession = "developer";
let country = "Georgia";
console.log(`My name is ${name}, I am a ${profession} from ${country}.`);

console.log("-------------");


// 14) ფუნქცია, რომელიც დააბრუნებს წინადადებას ნივთის შესახებ
function purchase(item, price, quantity) {
  return `You bought ${quantity} ${item}(s) for a total of ${price * quantity} GEL.`;
}
console.log(purchase("apple", 2, 5));

console.log("-------------");


// 15) ახსენი რა არის function expression
// Function expression არის ფუნქციის შექმნის გზა, როცა ფუნქცია ინახება ცვლადში.
// ის შეიძლება გამოიძახო მხოლოდ მას შემდეგ, რაც განსაზღვრულია.


// 16) function expression, რომელიც მიიღებს სახელს და დაბეჭდავს მისალმებას
const sayHello = function(name) {
  console.log(`Hello, ${name}!`);
};
sayHello("Tamta");

console.log("-------------");


// 17) function expression, რომელიც მიიღებს ორ რიცხვს და დაბეჭდავს მათ ჯამს
const addNumbers = function(a, b) {
  console.log(a + b);
};
addNumbers(10, 15);
