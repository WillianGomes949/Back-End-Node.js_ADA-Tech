//const pets = ['Cat', 'Dog', 'Parrot', 'Hamster', 'Fish']

const pets = [
  { animal: "Dog", age: "5" },
  { animal: "Parrot", age: "40" },
  { animal: "Cat", age: "2" }, 
  { animal: "Parrot", age: "36" },
  { animal: "Parrot", age: "20" },
  { animal: "Fish", age: "0.2" },
  { animal: "Parrot", age: "14" },
 
];

const petIndex = pets.findIndex((pet) => pet.animal === "Parrot");
const petFind = pets.find((pet) => pet.animal === "Parrot");

const lastPetIndex = pets.findLastIndex((pet) => pet.animal === "Parrot");
const findLastPet = pets.findLast((pet) => pet.animal === "Parrot");

console.log( {petIndex} );
console.log( {petFind} );
console.log( {lastPetIndex} );
console.log( {findLastPet} );
