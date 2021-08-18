const counterFactory =require("../counterFactory");

const returnedCounterFactory=counterFactory();
returnedCounterFactory.increment();
returnedCounterFactory.decrement();