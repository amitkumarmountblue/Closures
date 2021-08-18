const counterFactory =require("../counterFactory");

const returnedCounterFactory=counterFactory();
console.log(returnedCounterFactory.increment());
console.log(returnedCounterFactory.decrement());