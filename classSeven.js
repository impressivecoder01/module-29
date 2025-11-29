// object and array destructuring
const product = {name: 'shirt', price: 44, quantity: 10}
const {price,name,quantity} = {name: 'shirt', price: 44, quantity: 10};
console.log(price,name,quantity)

const numbers = [25,26];
const [first,second] = numbers;
console.log(first,second)