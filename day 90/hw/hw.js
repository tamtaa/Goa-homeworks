// # შექმენით ობიექტი რომელსაც აქვს ველები name, age და city. გამოიყენეთ object destructuring, 
// რათა ცვლადებში გქონდეს მხოლოდ name და age

// # შექმენით მასივი colors, სადაც სამი ფერია შენახული. გამოიყენეთ array destructuring, 
// რომ პირველ და მესამე ელემენტს მიანიჭოთ ცვლადები.

// # შექმენით ობიექტი settings, რომელშიც არის theme და language.
//  გამოიყენე destructuring ისე, რომ language-ს ჰქონდეს default value, თუ ობიექტში ის არ არსებობს

//1.
const person = {
  name: "Tamta",
  age: 21,
  city: "Tbilisi"
};
const { name, age } = person;


console.log(name); 
console.log(age);  

//2.
const colors = ["purple", "blue", "red"];
const [Color1, , Color3] = colors;


console.log(Color1); 
console.log(Color3); 



//3.
const settings = {
    theme: "color"
}
const { theme, language = "geo" } = settings;
console.log(theme); 
console.log(language); 








