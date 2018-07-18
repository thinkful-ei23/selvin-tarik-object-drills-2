'use strict';

const loaf = {
  flour: 300,
  water: 210,
  hydration: function () {
    return (this.water/this.flour)*100;
  }
};

console.log(`flour: ${loaf.flour}; water: ${loaf.water}`);
console.log(loaf.hydration());
