//prototype vs _ _proto_ _
// prototype is a property of a function that allows you to add properties and methods to the function's instances
// _ _proto_ _ is a property of an object that points to the object's prototype, allowing for inheritance
function Person(name) {
  this.name = name;
}
Person.prototype.greet = function() {
  console.log(`Hello, my name is ${this.name}`);
};
const john = new Person('John');
john.greet(); // Hello, my name is John
// _ _proto_ _ allows for inheritance
const jane = Object.create(john);
jane.name = 'Jane';
jane.greet(); // Hello, my name is Jane