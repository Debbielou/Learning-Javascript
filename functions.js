function myFunction(){
  console.log("This is my first function in javascript");
}

myFunction();

function myKibalo(x, y){
  console.log(x+y)
}

myKibalo(4,6);

function myReturn(){
 return "Hey gal";
}
// this shows nothing in terminal coz its a return function
myReturn();
//to make a return function print in terminal
console.log(myReturn())

function multiply(a,b){
console.log(a*b)
}
multiply(8,10);

function myFunction() {
  let carName = "Volvo";
  return carName; 
}

console.log(myFunction()); 

console.log(this); // this is a browser version which returns an empty object

const car = {type:"Fiat", model:"500", color:"white"};
console.log(car.type); 

console.log(car);

const student = {
  name: "John",
  age: 20,
  class: "10th grade",
  school: "ABC High School"
};
console.log(student); 

// Create an Object
const person = {};

// Add Properties
person.firstName = "John";
person.lastName = "Doe";
person.age = 50;
person.eyeColor = "blue";
console.log(person);

