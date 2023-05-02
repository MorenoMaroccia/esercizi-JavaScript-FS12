const number = 15;

let promise = new Promise(function(resolve, reject) {
    if( number > 10) {
        resolve(`Number ${number} is greater than 10`)
    }else{
        reject(`Number ${number} is lower than 10`)
    }
  });
  promise.then((result) => {
    console.log(result)
    })
    .catch((error) => {
    console.error(error)
    });