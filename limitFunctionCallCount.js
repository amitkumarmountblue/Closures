function limitFunctionCallCount(cb, n) {
  let counter = n;
  function invoke () {
     if(counter-- >  0){
         cb();
     }else{
         return null;
     }
  }
  return {invoke};
}

module.exports= limitFunctionCallCount;