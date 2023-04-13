class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

 static fromObject(obj) {return obj}
}

const obj = {
  firstName: "Mario",
  lastName: "Rossi",
};

const obj1 = new Person ("Federico","Rossi")
;
const person = Person.fromObject(obj);
const person1 = Person.fromObject(obj1);

console.log(person.firstName + " " + person.lastName);
console.log(person1.firstName + " " + person1.lastName);

