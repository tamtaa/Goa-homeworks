// 1.
const isEven = (num) => num % 2 === 0;
console.log(isEven(10)); 
console.log(isEven(7));  


// 2.
const add = (a, b) => a + b;
console.log(add(5, 3)); // 8

// 2) ახსენით რა არის callback.
// ფუნქცია რომელიც სხვა ფუნქციას გადაეცემა არგუმენტად და შესრულდება მოგვიანებით
function greet(name, callback) {
  console.log("Hello " + name);
  callback();
}

const sayBye = () => console.log("Goodbye!");

greet("Tamta", sayBye);


// 3.
const square = (n) => n * n;
console.log(square(5));



