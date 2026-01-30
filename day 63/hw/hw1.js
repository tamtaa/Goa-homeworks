
// 1)  დაწერე პროგრამა, რომელიც შეამოწმებს რიცხვს:
// თუ რიცხვი მეტია 0-ზე → გამოიტანოს "დადებითი".
// თუ ნაკლებია 0-ზე → "უარყოფითი".
// თუ უდრის 0-ს → "ნულის ტოლია".
let num = prompt("ricxvi: ");
num = Number(num);
if (num > 0) {
  console.log("dadebiti");
} else if (num < 0) {
  console.log("uaryofiti");
} else {
  console.log("tolia nulis");
}

// 2) დაწერე პროგრამა, რომელიც შეამოწმებს, არის თუ არა რიცხვი ლუწი თუ კენტი.

let num = prompt("ricxvi:");
num = Number(num);
if (num % 2 == 0) {
    console.log("luwia");
}els{
    console.log("kentia");
}

// 3 )დაწერე პროგრამა, რომელიც შეამოწმებს ასაკს:
// 0–12 → "ბავშვი"
// 13–19 → "მოზარდი"
// 20 და მეტი → "ზრდასრული"

let age = prompt("asaki:");
age = Number(age);
if (age >= 0 && age <= 12) {
  console.log("bavshvi");
} else if (age >= 13 && age <= 19) {
  console.log("mozardi");
} else if (age >= 20) {
  console.log("zrdasruli");
} else {
  console.log("araswori asaki");
}

// 4) დაწერე პროგრამა, რომელიც შეამოწმებს ორ რიცხვს და გამოიტანს რომელია უფრო დიდი.

let num1 = Number(prompt(ricxvi1));
let num2 = Number(prompt(ricxvi2));
if (num1 > num2) {
    console.log(num1 + " ufro didia");
}else if (num2 > num1){
    console.log(num2 + " ufro didia");
}else{
    console.log("tolia");
}
// 5) დაითვალე 1-დან 10-მდე რიცხვები while ციკლით.
let i = 1;
while (i <= 10) {
    console.log(i);
    i++
}

// 6) დაითვალე 1-დან 100-მდე რიცხვების ჯამი while-ით.
let num = 0; 
let i = 1;
while (i <= 100) {
  num += i; 
  i++;
}
console.log("jami = " + num);

// 7) დაწერე პროგრამა, რომელიც რიცხვს 10-მდე გაზრდის და ყოველი ნაბიჯი დაბეჭდოს.
let num = Number(prompt("ricxbi:"));
while (num <= 10) {
    console.log(num);
    num++;
}
// 8) დაწერე პროგრამა, რომელიც რიცხვს აკლებს, სანამ 0-მდე არ მივა.
let num = Number(prompt("ricxvi"));
while (num >= 0) {
    console.log(num);
    num--;
}
// 9) დაწერე კომენტარებით როგორ უნდა გარდაქმნა რიცხვად სტრინგი. გააკეთ მასზე 5 მაგალითი.
// Number() ფუნქციით
let a = Number("123"); // გარდაქმნის სტრინგს რიცხვად
console.log(a);

// parseInt() - მთელი რიცხვისთვის
let b = parseInt("45");
console.log(b);

// parseFloat() - ათწილადისთვის
let c = parseFloat("3.14");
console.log(c);

// + (პლიუსის გამოყენება) – სწრაფი გარდაქმნა
let d = +"100";
console.log(d);

// *1 multiplication – ასევე გარდაქმნის
let e = "200" * 1;
console.log(e);

// 10) ახსენი კომენტარებით, რას აკეთებს typeof, და გააკეთ 5 მაგალითი მასზ
// typeof აბრუნებს მონაცემის ტიპს

console.log(typeof 123);       // number
console.log(typeof "hello");   // string
console.log(typeof true);      // boolean
console.log(typeof [1,2,3]);   // object (მასივი object-ად ითვლება)
console.log(typeof undefined); // undefined
