// level 91:
// 1.კომენტარებით ახსენით რა არის ES6
// ES6 (ECMAScript 2015) არის JavaScript-ის ახალი ვერსია
// რომელმაც დაამატა ბევრი ახალი ფუნქცია და გაუმჯობესება.
// მოკლედ: ES6 = უფრო თანამედროვე და მარტივი JavaScript

// 2.კომენტარებით ახსენით რა არის მოდული. 
// მოდული არის ცალკე ფაილი (JS ფაილი),
// სადაც ვწერთ კოდს და შემდეგ შეგვიძლია გამოვიყენოთ სხვა ფაილებში.
// მაგალითად:
// math.js -> შეიცავს ფუნქციებს
// app.js -> იყენებს ამ ფუნქციებს
// ეს გვეხმარება კოდის დალაგებაში და ორგანიზებაში

// 3.კომენტარებით ახსენით რა არის ექსპორტი/def export/named export.
// export ნიშნავს: ამ ფაილიდან რაღაცის გატანა (სხვა ფაილში გამოსაყენებლად)

// named export:
export function add(a, b) {
  return a + b;
}

// default export:
export default function greet() {
  return "Hello";
}

// 4.კომენტარებით ახსენით რა არის იმპორტი.
// import ნიშნავს: სხვა ფაილიდან კოდის შემოტანა


// 5.
// შექმენი ფაილი mathUtils.js. დაწერე ორი ფუნქცია double(n) და triple(n).
//  double აბრუნებს რიცხვის ორმაგს და triple აბრუნებს რიცხვის სამმაგს. 
// ორივე გააკეთე named export. შემდეგ შექმენი app.js, დააიმპორტე ორივე ფუნქცია და გამოიტანე console.log-ში რამდენიმე მაგალითი.
export function double(n) {
  return n * 2;
}

export function triple(n) {
  return n * 3;
}


//10.
function positiveSum(arr) {
  let sum = 0;
  
  for (n of arr) {
    if (n > 0) sum += n;
  }
  
  return sum;
}

//11.
function findSmallestInt(arr) {
  return arr.sort((a,b)=> a-b)[0];
}
