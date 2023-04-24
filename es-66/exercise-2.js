const person = {
  id: 1,
  firstName: 'Mario',
  lastName: 'Rossi',
  age: 25
};

const id = person.id;
const personInfo = {
 
  firstName: person.firstName,
  lastName: person.lastName,
  age: person.age
};


const info = {...personInfo}

function persone(id, info) {

  console.log( id, info); 
}

persone(id, info);