const cacheFunction=require("../cacheFunction");

const cb=(x)=> x * x; 
const result = cacheFunction(cb);

console.log(result(5));
console.log(result(6));
