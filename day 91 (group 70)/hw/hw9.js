// 9.
// შექმენი ორი მოდული numbers.js და average.js. numbers.js-ში დაწერე ფუნქცია sumEven(arr) რომელიც მიიღებს array-ს, for loop-ის გამოყენებით იპოვის ყველა ლუწ რიცხვს და დააჯამებს მათ. ეს ფუნქცია გააკეთე named export. average.js-ში დაწერე ფუნქცია average(arr) რომელიც დაითვლის array-ის საშუალოს და იყოს default export. შემდეგ app.js-ში დააიმპორტე ორივე მოდული, გამოიყენე ერთ array-ზე და გამოიტანე console.log-ში ლუწი რიცხვების ჯამი და array-ის საშუალო.
export function sumEven(arr) {
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      sum += arr[i];
    }
  }

  return sum;
}
