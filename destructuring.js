let colors = ["red", "green", "blue","yellow", "purple"];
let [firstColor, secondColor, thirdColor,...extra] = colors;
console.log(colors); // red
console.log(extra);

let [a, b, c] = [1, 2, 3];
console.log(a); // 1

let person = {firstName: "John", lastName: "Doe", age: 30};
let {firstName, lastName, age} = person;

let person2 = {firstName: firstName, lastName:lastName, age:age};
console.log(person2); // {firstName: "John", lastName: "Doe", age: 30}
// console.log(person2); // {firstName: "John", lastName: "Doe", age: 30}
const numbers = [1, 2, 3, 4, 5];

const [x,y, ,z,...rest] = numbers;
console.log(rest); 

let name1 = "John";
let name2 = "Doe";

[name1, name2] = [name2, name1];
console.log(name1); // Doe

// Destructuring with default values
let person3 = {firstName: "John", lastName: "Doe", age: 30};
let {firstName: fName = "Jane", lastName: lName = "Smith", age: ageValue = 25} = person3;
console.log(lName); // Doe
console.log(ageValue); // 30

// Destructuring with nested objects
let person4 = {
  name: "John",
  age: 30,
  address: {
    city: "New York",
    state: "NY"
  }
};
let {name, address: {city, state}} = person4;
console.log(city); // New York
console.log(address); // { city: 'New York', state: 'NY' }

let member = {
    id: 1,
    names: {
        first: "John",
        last: "Doe"
    },
    age: 30,
    address: {
        city: "New York",
        state: "NY"
    }
}
console.log(first); // John

let displayFullName = ({names: {first, last}}) => {
    console.log(`Full Name: ${first} ${last}`);
}
displayFullName(member); // Full Name: John Doe