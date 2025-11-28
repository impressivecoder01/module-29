// template string, multiple line string, dynamic string(``)
const poem = `a
b`
console.log(poem)
const num1 = 10
const num2 = 20
function sum(num1,num2){
    const total = num1 + num2
    // const output = 'sum of' + num1 + 'and' + num2 + 'is' + total
    const output = `sum of ${num1} and ${num2} is ${total}`
    console.log(output)
}
sum(4,4)

const price = 100;
const discount = `Discount price is after 20% discount ${price*.4}`
console.log(discount)