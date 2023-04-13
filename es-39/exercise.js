function multiplyByTwo(value) {
  let number = 2;

  let inner = () => {
    let tot= value * number
    console.log(tot)
};
  return inner;
}


multiplyByTwo(4)()

