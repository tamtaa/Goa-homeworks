// 1️⃣ calculator
const calculator = {
  a: 10,
  b: 5,

  add() {
    return this.a + this.b;
  },
  subtract() {
    return this.a - this.b;
  },
  multiply() {
    return this.a * this.b;
  },
  divide() {
    return this.a / this.b;
  }
};

console.log("Calculator:");
console.log("Add:", calculator.add());
console.log("Subtract:", calculator.subtract());
console.log("Multiply:", calculator.multiply());
console.log("Divide:", calculator.divide());
console.log("----------------------------");

// 2️⃣ calculatorWithSymbol
const calculatorWithSymbol = {
  number1: 0,
  number2: 0,
  userSymbol: "",

  calculate() {
    switch (this.userSymbol) {
      case "+": return this.number1 + this.number2;
      case "-": return this.number1 - this.number2;
      case "*": return this.number1 * this.number2;
      case "/": return this.number1 / this.number2;
      default: return "არასწორი სიმბოლო";
    }
  }
};

// prompt()-ით ინტერაქცია (თუ ბრაუზერში გაქვს რითაც მუშაობს)
calculatorWithSymbol.number1 = Number(prompt("შეიყვანე პირველი რიცხვი:"));
calculatorWithSymbol.number2 = Number(prompt("შეიყვანე მეორე რიცხვი:"));
calculatorWithSymbol.userSymbol = prompt("შეიყვანე სიმბოლო (+, -, *, /):");

console.log("Calculator with Symbol Result:", calculatorWithSymbol.calculate());
console.log("----------------------------");

// 3️⃣ counter
const counter = {
  count: 0,
  increment() { this.count++; return this; },
  decrement() { this.count--; return this; },
  show() { console.log("Counter:", this.count); return this; }
};

// chaining მაგალითი
counter.increment().increment().decrement().show();
console.log("----------------------------");

// 4️⃣ messageBuilder
const messageBuilder = {
  text: "",
  add(word) { this.text += word + " "; return this; },
  upper() { this.text = this.text.toUpperCase(); return this; },
  print() { console.log("Message:", this.text); return this; }
};

// chaining მაგალითი
messageBuilder.add("hello").add("world").upper().print();
console.log("----------------------------");

// 5️⃣ temperature converter
const temperature = {
  celsius: 25,
  toFahrenheit() { this.fahrenheit = (this.celsius * 9) / 5 + 32; return this; },
  toKelvin() { this.kelvin = this.celsius + 273.15; return this; },
  show() { 
    console.log(`Temperature: ${this.celsius}°C = ${this.fahrenheit}°F = ${this.kelvin}K`); 
    return this; 
  }
};

// chaining მაგალითი
temperature.toFahrenheit().toKelvin().show();
