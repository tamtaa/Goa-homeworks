// 3 შექმენი ფუნქცია რომელიც მიიღებს რიცხვების array-ს და დააბრუნებს ყველა იმ წყვილს რომლის ჯამი არის 27 გამოიყენე nested for loop if და შეინახე შედეგი ახალ array-ში 
// ფუნქცია უნდა იყოს მოდულში ექსპორტირებული და სხვა ფაილში იმპორტირებული და გამოყენებული
export function findPairs(arr) {
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === 27) {
        result.push([arr[i], arr[j]]);
      }
    }
  }

  return result;
}
