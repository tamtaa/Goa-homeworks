
// 2 შექმენი ფუნქცია რომელიც მიიღებს array-ს და target რიცხვს ფუნქციამ უნდა მოძებნოს target array-ში while loop-ის გამოყენებით თუ იპოვა დააბრუნოს index 
// თუ ვერ იპოვა დააბრუნოს ტექსტი ვერ მოიძებნა ფუნქცია უნდა იყოს ცალკე მოდულში ექსპორტირებული და სხვა ფაილში იმპორტირებული და გამოყენებული
export function findIndex(arr, target) {
  let i = 0;

  while (i < arr.length) {
    if (arr[i] === target) {
      return i;
    }
    i++;
  }

  return "ვერ მოიძებნა";
}
