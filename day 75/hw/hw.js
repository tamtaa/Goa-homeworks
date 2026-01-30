// # Level 75:
// # 1. უყურეთ ჩანაწერს თავიდან.
// # 2. გააკეთეთ level 74-ის დავალებები ყველამ.
// # 3. მოიყვანეთ მაგალიტები, სადაც callback იქნება გამოყენებული.



function greet(name, callback) {
  console.log("Hello, " + name);
  callback();
}

function sayBye() {
  console.log("Goodbye!");
}

greet("Tamta", sayBye);
