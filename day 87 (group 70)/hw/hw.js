// 1) Spread ოპერატორის ახსნა კომენტარებით

// Spread (...) გამოიყენება მასივების ან ობიექტების "გაშლისთვის".
// ის კოპირებს ელემენტებს ან properties-ს ახალ მასივში ან ობიექტში.
// ხშირად ვიყენებთ:
// 1. ობიექტის ასლის გასაკეთებლად
// 2. ობიექტების გასაერთიანებლად
// 3. მნიშვნელობების შესაცვლელად ისე, რომ ძველი ობიექტი არ შევცვალოთ



// 2) ახალი ობიექტის შექმნა spread-ის გამოყენებით

const user = {
  name: "Giga",
  age: 17
};

const newUser = {
  ...user,        // user ობიექტის ყველა property
  role: "admin",  // ახალი property
  isActive: true  // ახალი property
};

console.log(newUser);



// 3) ორი ობიექტის გაერთიანება

const obj1 = { a: 1, b: 2 };
const obj2 = { b: 20, c: 3 };

const mergedObj = {
  ...obj1,
  ...obj2
};

console.log(mergedObj);

// საბოლოო ობიექტში დარჩება b: 20
// იმიტომ რომ obj2 ბოლოს წერია და ის გადააწერს obj1-ის მნიშვნელობას



// 4) ობიექტის property-ების შეცვლა spread-ით

const product = {
  title: "Laptop",
  price: 1500,
  inStock: true
};

const updatedProduct = {
  ...product,
  price: 1200,
  inStock: false
};

console.log(updatedProduct);



// 5) ობიექტის ასლი spread-ით

const profile = {
  username: "kocho",
  followers: 120,
  verified: false
};

const profileCopy = {
  ...profile
};

// ასლში ვცვლით followers-ს
profileCopy.followers = 500;

console.log(profileCopy);
console.log(profile);
