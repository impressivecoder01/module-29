// spread operator, array max, copy arrays
const numbers = [66,665,44,32,1];
console.log(numbers)
console.log(...numbers)
const highest = Math.max(...numbers)
console.log(highest)

// const first = [1,2,3,4,5,6,7];
// const second = first;
// second.push(6)
// console.log(first)
const first = [1,2,3,4,5,6,7];
const second = [...first];
second.push(6)
console.log(first)
console.log(second)
const third = [...first,5,4,32,3]
console.log(third)

const ages= [45,44,32,12];
const prices = [2,33,4,1,24,56];
const all = [...ages,...prices,4]
console.log(all)


const person = {name: 'a', age: 25}
const employee = {designation: 'dev', ...person}
console.log(employee)