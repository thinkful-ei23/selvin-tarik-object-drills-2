'use strict';

//1. Object Initializers
const loaf = {
  flour: 300,
  water: 210,
  hydration: function () {
    return (this.water/this.flour)*100;
  }
};



//2. Iterating Over An Object's Properties
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



//3. Arrays in Objects
const mealObj = {
  meals : ['breakfast', 'second breakfast', 'elevenses', 'lunch', 'afternoon tea', 'dinner', 'supper']
}
console.log(`Hobbit's 4th meal: ${mealObj.meals[3]}`);



//4. Arrays of Objects + 5. Properties that aren't there
let charList = [
  {
    name: 'Frodo',
    jobTitle: 'Hobbit', 
  },
  {
    name: 'Legolas',
    jobTitle: 'Elf',
    boss: 'Frodo'
  },
  {
    name: 'Gimli',
    jobTitle: 'Dwarf',
    boss: 'Frodo'
  }];

charList.forEach(char => {
  if (char['boss']) {
    console.log(`${char['jobTitle']} ${char['name']} reports to ${char['boss']}.`);
  } else {
    console.log(`${char['jobTitle']} ${char['name']} doesn't report to anybody.`);
  }
});
