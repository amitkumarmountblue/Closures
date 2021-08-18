 function cacheFunction(cb) {
	var cache = {};
	return function(x) {
		if (cache.hasOwnProperty(x)) {
            return cache[x];
        }else{
            cache[x] = cb(x);
		    return cache[x];
        }
      
    }
   
    }; 

    module.exports=cacheFunction;