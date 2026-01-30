// # 1. დაწერეთ პროგრამა, რომელიც Math.random()-ის 
// გამოყენებით დააგენერირებს შემთხვევით რიცხვს 0-დან 10-მდე და გამოიტანს consoleში
const random = Math.floor(Math.random() * 11);
console.log("Random:", random);

// # 2. მოცემული გაქვთ რიცხვი 3.14 (P). გამოიყენეთ Math.floor() და Math.ceil() და დაბეჭდეთ ორივე შედეგი console-ში.
const p = 3.14;
console.log(Math.floor(p));
console.log(Math.ceil(p));

// # 3. დაწერეთ კოდი, რომელიც მოცემულ ათწილად რიცხვს ამრგვალებს უახლოეს მთელ რიცხვამდე Math.round()-ის გამოყენებით
const number = 7.6;
console.log(Math.round(number));
// # 4. მოცემული გაქვთ უარყოფითი რიცხვი მაგალითად -271000. 
// გამოიყენეთ Math.abs() ისე, რომ console-ში ყოველთვის დადებითი მნიშვნელობა გამოვიდეს.
const num = -271000;
console.log(Math.abs(num)); 

// # 5. დაწერეთ პროგრამა, რომელიც ორ რიცხვს a და b აიყვანს ხარისხში Math.pow()-ის გამოყენებით.
const a = 2;
const b = 8;
console.log(Math.pow(a, b))

// # 6. მოცემული გაქვთ რიცხვი x. იპოვეთ მისი კვადრატული ფესვი Math.sqrt() ფუნქციის გამოყენებით და გამოიტანეთ console-ში
const x = 25;
console.log(Math.sqrt(x));

// # 7. დაწერეთ კოდი, რომელიც რამდენიმე რიცხვიდან პოულობს ყველაზე დიდის Math.max()-ის გამოყენებით.
console.log(Math.max(2, 4, 6, 16, 8, 10));


// # 8. მოცემული გაქვთ მინიმუმ 4 რიცხვი. გამოიყენეთ Math.min() და იპოვეთ მათგან ყველაზე პატარა.

console.log(Math.min(2, 4, 6, 16, 1, 8, 10));


// # 9. დაწერეთ პროგრამა, რომელიც ითვლის რიცხვის ლოგარითმს Math.log()-ის გამოყენებით და შედეგს ბეჭდავს console-ში
const num1 = 1;
console.log(Math.log(num1));




