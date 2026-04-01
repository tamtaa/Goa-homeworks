function noSpace(x) {
  let result = "";

  for (let i = 0; i < x.length; i++) {
    if (x[i] !== " ") {
      result += x[i];
    }
  }

  return result;
}

console.log(noSpace("Hello World")); // HelloWorld



function squareSum(numbers) {
  let sum = 0;

  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i] * numbers[i];
  }

  return sum;
}

console.log(squareSum([1, 2, 2])); // 9