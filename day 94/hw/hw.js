// # 1. შექმენით ფუნქცია maxDifference(არგუმენტები), რომელიც მიიღებს ნებისმიერ რაოდენობის რიცხვს, 
//იპოვის მათ შორის უდიდეს და უმცირეს მნიშვნელობებს და დააბრუნებს მათ სხვაობას (max - min)
const maxDifference = (...numbers) => {
  let max = numbers[0];
  let min = numbers[0];

  for (const num of numbers) {
    if (num > max) {
      max = num;
    }

    if (num < min) {
      min = num;
    }
  }

  return max - min;
};

console.log(maxDifference(2, 7, 5, 1)); 
// # 2. შექმენით ფუნქცია mergeAndFilter(min, arrayები),რომელიც მიიღებს რიცხვს min და შემდეგ ნებისმიერ რაოდენობის რიცხვების მასივს,
//გააერთიანებს ყველა array-ს ერთ arrayში და დააბრუნებს მხოლოდ იმ რიცხვებს, რომლებიც min-ზე მეტია.
const mergeAndFilter = (min, ...arrays) => {
  const result = [];

  for (const arr of arrays) {
    for (const num of arr) {
      if (num > min) {
        result.push(num);
      }
    }
  }

  return result;
};

console.log(
  mergeAndFilter(3, [1, 5, 2], [10, 0], [7])
);


// # 3. შექმენით ფუნქცია updateUser(user, updateები), სადაც user არის ობიექტი და updates არის ობიექტების სია და ფუნქციამ უნდა დააბრუნოს ახალი ობიექტი,
//  რომელშიც user-ის ველები განახლებულია ყველა updates ობიექტის მიხედვით (ბოლოს გადაცემულს აქვს უპირატესობა).

const updateUser = (user, ...updates) => {
  let newUser = { ...user };
  for (const update of updates) {
    newUser = { ...newUser, ...update };
  }

  return newUser;
};

console.log(
  updateUser(
    { name: "tamta", age: 20 },
    { age: 21 },
    { city: "Tbilisi" }
  )
)

// # 4. მოცემულია მასივი ["level", "world", "radar", "hello"]; for...of ლუპის გამოყენებით დააბრუნეთ მხოლოდ ის სიტყვები,
//  რომლებიც პალინდრომებია, მაგალითად mom იქნებოდა პალინდრომი რადგან რომელი მხრიდანაც არ უნდა წაიკითხო მაინც ერთი და იგივე იქნება.
const words = ["level", "world", "radar", "hello"];
const palindromes = [];

for (const word of words) {
  let reversed = "";
  for (let i = word.length - 1; i >= 0; i--) {
    reversed += word[i];
  }
  if (word === reversed) {
    palindromes.push(word);
  }
}

console.log(palindromes); 


// # 5. მოცემულია მასივი [10, 0, 15, 20, 0, 5]; for...of ლუპის გამოყენებით გამოთვალეთ ნულბის რაოდენობა და არ გამოიყენოთ filter ან სხვა მეთოდები.
const numbers = [10, 0, 15, 20, 0, 5];
let zeroCount = 0;

for (const num of numbers) {
  if (num === 0) {
    zeroCount++;
  }
}

console.log(zeroCount); 

// # 6. მოცემულია მასივი (რიცხვების), for...of ლუპის გამოყენებით შექმენით ახალი array, სადაც თითოეული ელემენტი იქნება წინა ელემენტების ჯამი
const number = [1, 2, 3, 4];
const result = [];
let sum = 0;
for (const num of numbers) {
  sum += num;
  result.push(sum);
}

console.log(result);
