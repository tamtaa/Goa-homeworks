// 4) შექმენი ფაილი სადაც იქნება:
// პროდუქტების მასივი
// ფუნქცია რომელიც აბრუნებს ყველა პროდუქტს
// ფუნქცია რომელიც ფილტრავს პროდუქტებს ფასის მიხედვით
// პროდუქტების მასივი იყოს default export
// ფუნქციები იყოს named export
// შემდეგ სხვა ფაილში:
// დააიმპორტე მასივი და ფუნქციები
// დაბეჭდე შედეგები.
const products = [
  { name: "Laptop", price: 1200 },
  { name: "Phone", price: 800 },
  { name: "Headphones", price: 150 }
];

// default export
export default products;

// named exports
export function getAllProducts() {
  return products;
}

export function filterByPrice(maxPrice) {
  return products.filter(p => p.price <= maxPrice);
}
