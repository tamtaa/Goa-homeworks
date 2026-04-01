const reverseSeq = n => {
let arr = [];
  for (let i=n; i>0; i--) {
    arr.push(i);
    } return arr;
};

function adjacentElementsProduct(array) {
  let newArr = []
  for(i=0; i < array.length-1; i++){
    newArr.push(array[i]*array[i+1])
  }  
  return Math.max(...newArr)
}

// 3. მოცემულია ფუნქცია, აქიდან დაწერეთ კოდი, რომელიც მიღებული არგუმენტებით მიგვაღებინებს მსგავს შედეგს (უნდა დააბრუნოს ფუნქციამ):
// {
//     username: 'vashli123',
//     password: '12345678',
//     more: 'mwvane vashlis moyvaruli'
// };
// function signup(email, password, more) {
//     const user = {};
//     return user;
// }

// signup('emaili', '12345678', 'mwvane_vashlis_moyvaruli');

function signup(username, password, more) {
    const user = {
        username: username,
        password: password,
        more: more
    };
    return user;
}

console.log(signup('vashli123', '12345678', 'mwvane vashlis moyvaruli'));
// 4.მუშაობს თუ არა მოცემული კოდი? ახსენით რატომ და გამოასწორეთ შეცდომა, რომ შესაბამისი შედეგი მივიღოთ

// const numbers = [1, 2, 3, 4, 5];
// const [first, ...middle, last] = numbers;
// console.log(middle);



const numbers = [1, 2, 3, 4, 5];
const [first, ...middle] = numbers;

console.log(middle);


















// level 91:
// 1) შექმენი ფაილი math.js
// მასში დააექსპორტე ორი ფუნქცია:
// add(a, b) აბრუნებს ორი რიცხვის ჯამს
// multiply(a, b) აბრუნებს ნამრავლს
// შემდეგ ფაილში app.js:
// დააიმპორტე ორივე ფუნქცია
// გამოიძახე კონსოლში



// math.js
export function add(a, b) {
  return a + b;
}

export function multiply(a, b) {
  return a * b;
}
