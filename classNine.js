//loop through an object using for in and module summary
const numbers = [12,23343,545,667]
for(const number of numbers){
    console.log(number)
}

const employee = {
    name: 'rana', 
    designation: 'dev',
    salary: 20000,
    experience: 1,
    age: 22
}
for(const key in employee){
    const value = employee[key]
    console.log(key, value)
} 

const keys = Object.keys(employee)
for(const key of keys){
    const value = employee[key]
    console.log( key,value, 's')
}