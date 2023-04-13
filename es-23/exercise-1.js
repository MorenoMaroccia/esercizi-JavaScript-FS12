const person = {
  firstName: 'Mario',
  lastName: 'Rossi',
  age: 25
}
let keys =Object.keys(person)
let values =Object.values(person)
let length =Object.keys(person).length

for(let i=0 ; i< length; i++) {
  console.log(keys[i]+ " : "+ values[i])
}

// Print values of person using Object.keys