function isAdult(person) {
  return person >= 18;
}

const person = {
  id: 1,
  firstName: 'Mario',
  lastName: 'Rossi',
  age: 25
}; 

const { id, firstName,lastName, age } = person;

console.log(isAdult(age));