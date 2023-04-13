function printName (){
    this.helloName = "Hello John"

  let inner = () =>{ console.log(this.helloName)};
  return inner
}

printName()();
 