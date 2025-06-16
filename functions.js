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

function myFriend(name, age) {
  this.name = name;
  this.age = age;
}
//object instantiation
const friend1 = new myFriend("Alice", 25);
console.log(friend1.name); // Output: Alice

//call function directly
myFriend("Bob", 30);
console.log(myFriend); 

let x = ()=> console.log("This is an arrow function");
x();

let p = () => console.log("I went to the zoo");
p();

let myStuff = (firstName, lastName) => {
  console.log ("My name is "+ firstName + " " + lastName)};
  myStuff("Debz", "Sexy");

  //hoisting
  divide(8,2)

  function divide(c,d){
    console.log(c/d);
  }

  //self invoking function
  (function () {
    console.log("I will invoke myself")
  }());

  (function (x, y) {
    console.log(x + y);
  }(5, 10)); // Output: 15

  // JavaScript functions do not check the number of arguments received
  function myFunction(x, y) {
          console.log(x,y);
        }
  myFunction(5);

  //default parameters
  function myFunctions(x, y) {
    if (y === undefined) {
      y = 2;
    }
    console.log(x + y);
  }
myFunctions(5)

function myFunction(x, y = 10) {
  return x + y;
}
console.log(myFunction(5,));
console.log(myFunction(5,7));

// function with rest parameters
function myFunction(...args) {
  console.log(args);
}
myFunction(1, 2, 3, 4); // Output: [1, 2, 3, 4]

function myFunctions(...args) {
  let sum = 0;
  for (let i = 0; i < args.length; i++) {
    sum += args[i];
  }
  console.log(sum);
}
myFunctions(2,4,6,8,10)

//The Arguments Object
x = findMax(1, 123, 500, 115, 800, 88);

function findMax() {
  let max = -Infinity; //-infinity is the lowest possible value
  // Initialize max to the lowest possible value
  for (let i = 0; i < arguments.length; i++) {
    if (arguments[i] > max) {
      max = arguments[i];
    }
  }
  return max;
}
console.log(x);