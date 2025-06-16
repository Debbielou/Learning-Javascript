const employees = [{firtName:"Debz", lastName:"Cute", age:20},
    {firstName:"Lucy", lastName:"Janice", age:30},
    {firstName:"John", lastName:"Doe", age:40},
    {firstName:"Jane", lastName:"Malaika", age:46},

]

//converting to JSON
const f = JSON.stringify(employees)
console.log(f)

//converting back to object
const obj = JSON.parse(f)
console.log(obj)

console.log(typeof obj) 
console.log(typeof f) //string

