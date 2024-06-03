const pets = [
  { animal: "Dog", age: "5.0" },
  { animal: "Parrot", age: "40.0" },
  { animal: "Cat", age: "2.0" }, 
  { animal: "Parrot", age: "36.0" },
  { animal: "Parrot", age: "20.0" },
  { animal: "Fish", age: "0.2" },
  { animal: "Parrot", age: "14.0" }
];


//Every
const allAnimalsAreOlderThenOneTwelfthOfYear = pets.every(pet => pet.age > 1/12)
console.log( {allAnimalsAreOlderThenOneTwelfthOfYear} )

const allAnimalsAreOlderThenOneYear = pets.every(pet => pet.age > 1)
console.log( {allAnimalsAreOlderThenOneYear} )


//Some
const allAnimalsAreYoungerThenHundredYear = pets.some(pet => pet.age < 100)
console.log( {allAnimalsAreYoungerThenHundredYear} )

const someAnimaAreOlderThen80Years = pets.some(pet => pet.age > 30)
console.log( {someAnimaAreOlderThen80Years} )