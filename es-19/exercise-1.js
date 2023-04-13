const person1 = {
  firstName: "John",
  lastName: "Doe",
  age: 25,
};

const person2 =person1
person2.firstName='Simon'

// Modify the property `firstName` of the `person2` in "Simon".

console.log(person1);
console.log(person2);
// person2=person1 in questo modo person2, non è una copia di person1, ma punta a person1 e quindi  cambiano entrabi i firstname