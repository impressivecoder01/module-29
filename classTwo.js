// function default parameter for not provided values (=)

// function sum(num1,num2){
//     const total = num1 + num2
//     console.log(total)
// }
// sum(20,30)
// NaN ---> not a number
function sum(num1=0,num2=0){
    const total = num1 + num2
    console.log(total)
}
// sum(20)
sum()

function multiply(num1=1, num2=1){
    const total = num1 * num2
    console.log(total)
}
multiply(5,5)
multiply()

// some thumb rules for default value.
// add, subs ---- 0
// multiply ---- 1
// string ---- ''
// array ---- []
// object ---- {}