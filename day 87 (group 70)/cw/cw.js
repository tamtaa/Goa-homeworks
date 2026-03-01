// level 87:
// 1) შექმენი მასივი numbers = [1, 2, 3].
// შექმენი ახალი მასივი newNumbers, სადაც spread-ის გამოყენებით დაამატებ რიცხვს 4 ბოლოში.
const numbers = [1, 2, 3];
const newNumbers = [...numbers, 4];
console.log(newNumbers); 
// 2) გაქვს ორი მასივი:

// const arr1 = [1, 2];
// const arr2 = [3, 4];

// გააერთიანე ისინი ერთ მასივად spread-ის გამოყენებით.

const arr1 = [1, 2];
const arr2 = [3, 4];
const array = [...arr1, ...arr2];
console.log(array);

// 3) შექმენი მასივი colors = ["red", "blue"].
// შექმენი ახალი მასივი სადაც "green" იქნება დასაწყისში, შემდეგ spread-ით ძველი ელემენტები.

const colors = ["red", "blue"];
const colors2 = ["green", ...colors];
console.log(colors2)


// 4) შექმენი obj.
// შექმენი ახალი obj, newNumbersObj, სადაც spread-ის გამოყენებით დაამატებ რიცხვს 4 ბოლოში.

const obj = { a: 1, b: 2, c: 3 };
const newNumbersObj = { ...obj, d: 4 };
console.log(newNumbersObj);

// 5) გაქვს ორი obj

// გააერთიანე ისინი ერთ obj-ად spread-ის გამოყენებით.

const obj1 = { x: 2, y: 4 };
const obj2 = { z: 1, w: 3 };
const obj3 = { ...obj1, ...obj2 };
console.log(obj3);

