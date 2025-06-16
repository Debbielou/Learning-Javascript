// Adding or changing an object property
// Object.defineProperty(object, property, descriptor)

// Adding or changing object properties
// Object.defineProperties(object, descriptors)

// Accessing a Property
// Object.getOwnPropertyDescriptor(object, property)

// Accessing Properties
// Object.getOwnPropertyDescriptors(object)

// Returns all properties as an array
// Object.getOwnPropertyNames(object)

// Accessing the prototype
// Object.getPrototypeOf(object)

  // Create an Object:
const person = {
  firstName: "John",
  lastName : "Doe",
  language : "EN"
};

// Add a Property
Object.defineProperty(person, "year", {value:"2008"});
console.log(person.year); // 2008
console.log(person); // { firstName: 'John', lastName: 'Doe', language: 'EN', year: '2008' }
// Change a Property
Object.defineProperty(person, "year", {value:"2018"});
console.log(person.year); // 2018
// Add a Property with a different descriptor
Object.defineProperty(person, "year", {
  value: "2020",
  writable: false, // Cannot change the value
  enumerable: true, // Will show up in for...in loop
  configurable: false // Cannot delete or change this property
});
console.log(person.year); // 2020
// Attempt to change the property
person.year = "2021"; // Will not change because writable is false
console.log(person.year); // 2020
// Attempt to delete the property
delete person.year; // Will not delete because configurable is false
console.log(person.year); // 2020
// Accessing the property descriptor
const descriptor = Object.getOwnPropertyDescriptor(person, "year");
console.log(descriptor);
// { value: '2020', writable: false, enumerable: true, configurable: false }
// Accessing all properties
const descriptors = Object.getOwnPropertyDescriptors(person);
console.log(descriptors);
// {
//   firstName: { value: 'John', writable: true, enumerable: true, configurable: true },
//   lastName: { value: 'Doe', writable: true, enumerable: true, configurable: true },

// Defining a getter and setter for the 'language' property
Object.defineProperty(person, "language", {
  get: function() { return this._language; },
  set: function(value) { this._language = value; },
  enumerable: true,
  configurable: true
});
// Accessing the 'language' property
console.log(person.language); // undefined (not set yet)
// Setting the 'language' property
person.language = "FR";
// Accessing the 'language' property again
console.log(person.language); // FR
// Accessing the prototype
const proto = Object.getPrototypeOf(person);
console.log(proto); // {}
// Adding a method to the prototype
proto.greet = function() {
  return `Hello, ${this.firstName} ${this.lastName}!`;
};
// Using the method from the prototype
console.log(person.greet()); // Hello, John Doe!
// Accessing all property names
const propertyNames = Object.getOwnPropertyNames(person);
console.log(propertyNames); // [ 'firstName', 'lastName', 'language', 'year' ]
// Accessing all property names including non-enumerable properties
const allPropertyNames = Object.getOwnPropertyNames(Object.getPrototypeOf(person));
console.log(allPropertyNames); // [ 'constructor', 'greet' ]


Object.defineProperty(person, "language", {writable:false});
person.language = "EN"; // Will not change because writable is false

// Define object
const obj = {counter:0};

// Define setters
Object.defineProperty(obj, "reset", {
  get : function () {this.counter = 0;}
});
Object.defineProperty(obj, "increment", {
  get : function () {this.counter++;}
});
Object.defineProperty(obj, "decrement", {
  get : function () {this.counter--;}
});
Object.defineProperty(obj, "add", {
  set : function (value) {this.counter += value;}
});
Object.defineProperty(obj, "subtract", {
  set : function (i) {this.counter -= i;}
});

// Play with the counter:s
obj.reset;
obj.add = 5;
obj.subtract = 1;
obj.increment;
obj.decrement;

console.log(obj.counter); // 4
// Accessing the prototype again
const updatedProto = Object.getPrototypeOf(obj);
console.log(updatedProto); // {}
// Adding a method to the updated prototype
updatedProto.showCounter = function() {
  return `Counter value: ${this.counter}`;
};
// Using the new method from the updated prototype
console.log(obj.showCounter()); // Counter value: 4
// Accessing all property names again
const updatedPropertyNames = Object.getOwnPropertyNames(Object.getPrototypeOf(obj));
console.log(updatedPropertyNames); // [ 'constructor', 'showCounter' ]