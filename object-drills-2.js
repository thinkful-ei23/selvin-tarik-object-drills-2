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

//6. Cracking the code  

const encWord = 'craft block argon meter bells brown croon droop';
const cipher = {
  a: 2,
  b: 3,
  c: 4,
  d: 5
} 
let charPos;
function decode(str) {
  if (cipher[str[0]]){
    charPos = cipher[str[0]];
    return str[charPos - 1];
  } else {
    return ' '; //return decoded letter
  }
}

function decodeWords(string){
  let strArr = string.split(' ');
  let decodedMsg = '';
  strArr.forEach(word => {
    decodedMsg += decode(word);
  });
  return decodedMsg;
}
console.log(decodeWords(encWord));


//7. Factory Functions with LOTR

function createCharacter(name, nickname, race, origin, attack, defense, weapon) {
  return {
    name: name,
    nickname: nickname,
    race: race,
    origin: origin,
    attack: attack,
    defense: defense,
    weapon: weapon,
    describe: function(){
      console.log(`${name} is a ${race} of ${origin} who uses ${weapon}`);  
    },
    evaluateFight: function(character){
      let x = this.attack - character.defense;
      let y = character.attack - this.defense;
      if (x < 0 ) {
        x = 0;
      };
      if (y < 0 ) {
        y = 0;
      };
      console.log(`Your opponent takes ${x} damage and you receive ${y} damage`);  
    }
  }
}

let characters = [
  new createCharacter('Gandalf the White', 'gandalf', 'Wizard', 'Middle Earth', 10, 6, 'a wizard staff'),
  new createCharacter('Bilbo Baggins', 'bilbo', 'Hobbit', 'The Shire', 2, 1, 'the Ring'),
  new createCharacter('Frodo Baggins', 'frodo', 'Hobbit', 'The Shire', 2, 1, 'Sting and Barrow Blade'),
  new createCharacter('Aragorn son of Arathorn', 'aragorn', 'Man', 'Dunnedain', 6, 8, 'Anduril'),
  new createCharacter('Legolas', 'legolas', 'Elf', 'Woodland Realm', 8, 5, 'Bow and Arrow')
];

characters.push(new createCharacter('Arwen Undomiel', 'arwen', 'Half-Elf', 'Rivendell', 10, 3, 'Hadhafang'));
characters.find(function(element) {
  if (element.nickname === 'aragorn') {
    element.describe();
  }
});

const hobbits = characters.filter(function(char) {
  if (char.race === 'Hobbit') {
    return char;
  }
});

const strongChar = characters.filter(function(char) {
  if (char.attack > 5) {
    return char;
  }
});
