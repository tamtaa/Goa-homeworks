// ------------------------------
// 6. Reduce — დადებითი რიცხვების ნამრავი
// ------------------------------

const nums = [2, -3, 4, -1, 5];

const product = nums.reduce((acc, num) => {
  if (num > 0) return acc * num;
  return acc;
}, 1);

console.log("6) დადებითი რიცხვების ნამრავი:", product);


//
const grades = [40, 55, 60, 73, 85, 90, 58, 67];

// a) ჩაჭრილი (≥ 60)
const passed = grades.filter(g => g >= 60);

// b) გადაყვანა ასოებში
const letterGrades = passed.map(grade => {
  if (grade >= 90) return "A";
  if (grade >= 80) return "B";
  if (grade >= 70) return "C";
  return "D";
});

// c) დაბეჭდვა
letterGrades.forEach(letter => console.log(letter));

// d) დათვლა
const counts = letterGrades.reduce((acc, letter) => {
  acc[letter] = (acc[letter] || 0) + 1;
  return acc;
}, {});

console.log(counts);
// напр.: { A: 1, B: 2, C: 1, D: 1 }
