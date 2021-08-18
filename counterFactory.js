 function  counterFactory(){
        let inc = 0;
        let dec = 0;
        return {
          increment(){
            return ++inc;
          },
          decrement() {
            return --dec;
          }
        }
};

module.exports = counterFactory;