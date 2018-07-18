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
const myObj = {
  foo: 'bird',
  bar: 'fish',
  fum: 'cat',
  quux: 'car',
  spam: 'ham'
}
for (let key in myObj) {
  console.log(`key: ${key} | value: ${myObj[key]}`);
}
const mealObj = {
  meals : ['breakfast', 'second breakfast', 'elevenses', 'lunch', 'afternoon tea', 'dinner', 'supper']
}
console.log(`Hobbit's 4th meal: ${mealObj.meals[3]}`);
