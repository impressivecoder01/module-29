// arrow function,multiple parameters, function body =>
// function declaration
function add(num1, num2){
    return num1+num2
}
console.log(add(44,44))


// function expression
const addition = function(num1, num2){
    return num1 + num2
}
console.log(addition(44,44))



// arrow function
const add2 = (num1, num2) => num1 + num2;
console.log(add2(44,44))

const multiply = (num1, num2) => num1 * num2;
console.log(multiply(4,4))

const isFirstBig = (x,y) => x>y;
console.log(isFirstBig(44,4))

const doMath = (x,y) => {
    const makeDouble = x+3;
    const makeD = y+33;
    const total = makeD+ makeDouble;
    return total 
}
console.log(doMath(3,3))