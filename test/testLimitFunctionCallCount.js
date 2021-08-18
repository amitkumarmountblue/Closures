const limitFunctionCallCount = require("../limitFunctionCallCount");

const cb =()=>{ console.log("cb invoked")};
let returnedFunction = limitFunctionCallCount(cb, 3);

returnedFunction.invoke();
returnedFunction.invoke();
returnedFunction.invoke();
returnedFunction.invoke();