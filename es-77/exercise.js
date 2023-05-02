const isLogged = true;
 
function login(isLogged) { 
    const rand = Math.random()
const promise = new Promise((resolve,reject) => {
    if(isLogged== true) {
      resolve(rand)
       
    }else{
        reject(new Error(" not logged in!"))
    }
})
return promise
}

function getUser(rand) {
    const promise = new Promise((resolve,reject) => {
        
        if(rand > 0.5) {
          resolve({name: "John", age: 24})
           
        }else{
            reject(new Error(" No user data"))
        }
    })
    return promise
}

login(isLogged)
.then(getUser)
.then((obj) => console.log(obj))
.catch((err) => console.log(err))
.finally(() => console.log("Complete"));
