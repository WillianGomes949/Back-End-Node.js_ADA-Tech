const pets = ['cat', 'dog'] 

//const pluralPets = pets.map(pet => `${pet}s`)
//console.log(pluralPets)

const pluralpets = []
pets.forEach(pet => {
  pluralpets.push(`${pet}s`)
})

console.log(pluralpets)