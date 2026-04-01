function unusualFive() {
  return "abcde".length;
}


function remainder(n, m){
    return Math.max(n,m) % (Math.min(n,m) || NaN);
}
// const arr1 = [1, 2, 3];
// const arr2 = [3, 4, 5];
 
// მოცემული კოდისგან უნდა მივიღოთ შესაბამისი შედეგი: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]


// const arr1 = [1, 2, 3];
// const arr2 = [3, 4, 5];

// const result = [...arr1, ...arr2, ...Array.from({length: 11}, (_, i) => i)];
// console.log(result);


// function fn(st, nd, o) {
//  // ...
// }

// fn('Gio', 'Luka', 'Andria', 'Ioane', 'Nodi')
// აქიდან, გამოიტანეთ შედეგი შემდეგი ფორმატით: 
// 1. Gio 2. Luka 3.Andria other Ioane, Nodi


function fn(st, nd, o, ...others) {
  let result = `1. ${st} 2. ${nd} 3. ${o}`;
  
  if (others.length > 0) {
    result += ` other ${others.join(', ')}`;
  }
  
  return result;
}

console.log(fn('Gio', 'Luka', 'Andria', 'Ioane', 'Nodi'));








// მოცემული კოდით მიიღეთ შესაბამისი შედეგი: 
// {a: 5, b: {c: 7, d: 9} }     const arr1 = {a: 5}
// const arr2 = { b: {c: 7, d: 9} }; 
// const arr1 = {a: 5}
// const arr2 = { b: {c: 7, d: 9} };
function fn(st, nd, o, ...others) {
    console.log(`1. ${st} 2. ${nd} 3. ${o} other ${others.join(', ')}`);
}

fn('Gio', 'Luka', 'Andria', 'Ioane', 'Nodi');
