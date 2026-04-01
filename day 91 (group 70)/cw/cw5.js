// 5) შექმენი ფაილი, სადაც:
// შექმნი მომხმარებლის ობიექტს (სახელი, ასაკი, პროფესია)
// ასევე შექმნი ორ ფუნქციას: ერთი მომხმარებლის მისალმებისთვის და მეორე მისი ასაკის გამოსატანად

// მომხმარებლის ობიექტი უნდა იყოს default export
// ფუნქციები უნდა იყოს named export

// დააიმპორტე ობიექტიც და ფუნქციებიც
// გამოიყენე ისინი კონსოლში.
const user = {
  name: "Tamta",
  age: 18,
  profession: "Student"
};

// default export
export default user;

// named exports
export function greetUser(user) {
  return `Hello, ${user.name}!`;
}

export function getAge(user) {
  return `Age: ${user.age}`;
}