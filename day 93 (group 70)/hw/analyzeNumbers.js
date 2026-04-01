export function analyzeNumbers(arr) {
  let evenCount = 0;
  let oddCount = 0;
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];

    if (arr[i] % 2 === 0) {
      evenCount++;
    } else {
      oddCount++;
    }
  }

  return {
    even: evenCount,
    odd: oddCount,
    sum: sum
  };
}
