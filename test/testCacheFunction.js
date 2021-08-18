const cacheFunction=require("../cacheFunction");

const cb=(x)=>x*x; 
const result = cacheFunction(cb);

result(5);
result(6);
result(5);