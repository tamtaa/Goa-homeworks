const arrayUtils = {
  sumArray: (arr) => arr.reduce((acc, num) => acc + num, 0),
  findMax: (arr) => Math.max(...arr)
};

export { arrayUtils };