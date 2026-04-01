import { sum, subtract } from './math.js';

console.log(sum(5, 3));      
console.log(subtract(5, 3)); 



//2
import { min, max, average } from './utils.js';

const numbers = [10, 20, 30, 40, 50];

console.log("Min:", min(numbers));        
console.log("Max:", max(numbers));         
console.log("Average:", average(numbers)); 



//3
import greet from './greet.js';

console.log(greet("Tamta")); 


//4
import greet, { add, multiply } from './mixedExports.js';

console.log(greet("Tamta"));     
console.log(add(3, 4));          
console.log(multiply(3, 4));    


//5
import { PI, APP_NAME, VERSION } from './constants.js';

console.log("App:", APP_NAME);   
console.log("Version:", VERSION); 
console.log("PI:", PI);           