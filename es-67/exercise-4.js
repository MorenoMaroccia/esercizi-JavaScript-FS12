function sum(...numbers) {
  const num = numbers.reduce((a,b) => a+b)
  return num
}


const numbers = [1, 2, 3];
console.log(sum(numbers[0], numbers[1], numbers[2]));