function printName (){
    this.helloName = "Hello John"

let inner = () => setTimeout(()=>{
    console.log(this.helloName)
},1000);
  return inner;
}

printName()();