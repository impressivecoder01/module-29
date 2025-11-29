// keys, values, entries, delete, seal, freeze
const employee = {
    name: 'rana', 
    designation: 'dev',
    salary: 20000,
    experience: 1,
    age: 22
}
const keys = Object.keys(employee)
console.log(keys)
console.log(Object.values(employee))
const entries = Object.entries(employee)
console.log(entries)
console.log(employee)
employee.experience = employee.experience +1
// Object.freeze(employee)
Object.seal(employee)
employee.location = 'Dhaka'
// delete employee.experience;
console.log(employee)