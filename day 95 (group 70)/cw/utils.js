export function min(arr) {
  return Math.min(...arr);
}

export function max(arr) {
  return Math.max(...arr);
}

export function average(arr) {
  const total = arr.reduce((a, b) => a + b, 0);
  return total / arr.length;
}
