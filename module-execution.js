import {add,name,age,muntu,salary} from './module.js';
console.log(add(5, 3)); // Output: 8

function myFunction(mother, father, child) {
 return add(mother, father) + child;
}

console.log (myFunction(10, 20, 5))

console.log(name); // Output: Jesse

function myChild(x){
console.log("My name is " + " " + x);
}
myChild(name); // Output: My name is 
myChild("Esther")

//execution of importing multiple exports
function myPeople(y){
    console.log("My salary is " + y + " " +"at my age of " + age);
}
myPeople(1000);