function sum(...num) {
    let sum = num.reduce((a,b) => a+b)
    return sum; 
}

console.log(sum(1, 2, 3, 4, 5));