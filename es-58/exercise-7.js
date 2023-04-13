class Person {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age
  }

  
  set fullName(value) {
    [this.firstName, this.lastName, this.age] = value;
  }


  get fullName () {
    return `${this.firstName} ${this.lastName} ${this.age} `;
  }
}

const person = new Person('Mario', 'Rossi', 25);
console.log(person.fullName);

person.firstName = 'Maria';
person.lastName = 'Verdi';
console.log(person.fullName);