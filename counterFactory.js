 function  counterFactory(){
        let counter=0;
        return {
          increment(){
            return ++counter;
          },
          decrement() {
            return --counter;
          }
        }
};

module.exports = counterFactory;