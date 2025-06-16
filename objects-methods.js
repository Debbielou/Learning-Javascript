// Copies properties from a source object to a target object
// Object.assign(target, source)

// Creates an object from an existing object
// Object.create(object)

// Returns an array of the key/value pairs of an object
// Object.entries(object)

// Creates an object from a list of keys/values
// Object.fromEntries()

// Returns an array of the keys of an object
// Object.keys(object)

// Returns an array of the property values of an object
// Object.values(object)

// Groups object elements according to a function
// Object.groupBy(object, callback)

const myObject = {
  name: 'John',
  age: 30,
  city: 'Masaka'
};
let kapa = Object.entries(myObject);
console.log(kapa); // [ [ 'name', 'John' ], [ 'age', 30 ], [ 'city', 'Masaka' ] ]
// Object.entries() returns an array of the key/value pairs of an object
// Object.fromEntries() creates an object from a list of keys/values
const myArray = [
  ['name', 'John'],
  ['age', 30],
  ['city', 'Masaka']
];
const myObject2 = Object.fromEntries(myArray);
console.log(myObject2); // { name: 'John', age: 30, city: 'Masaka' }
// Object.keys() returns an array of the keys of an object
const myKeys = Object.keys(myObject);
console.log(myKeys); // [ 'name', 'age', 'city' ]
// Object.values() returns an array of the property values of an object
const myValues = Object.values(myObject);
console.log(myValues); // [ 'John', 30, 'Masaka' ]
// Object.create() creates an object from an existing object
const myObject3 = Object.create(myObject);
console.log(myObject3); // {}
// Object.assign() copies properties from a source object to a target object
const myObject4 = {
  name: 'Jane',
  age: 25
};
const myObject5 = {
  city: 'Kampala'
};
const myObject6 = Object.assign(myObject4, myObject5);
console.log(myObject4); // { name: 'Jane', age: 25, city: 'Kampala' }
console.log(myObject6); 
// Object.groupBy() groups object elements according to a function
const myArray2 = [
  { name: 'John', age: 30 },
  { name: 'Jane', age: 25 },
  { name: 'Jack', age: 30 }
];
const myObject7 = Object.groupBy(myArray2, (item) => item.age);
console.log(myObject7); // { '25': [ { name: 'Jane', age: 25 } ], '30': [ { name: 'John', age: 30 }, { name: 'Jack', age: 30 } ] }
// Object.freeze() prevents an object from being modified
const myObject8 = {
  name: 'John',
  age: 30
};
Object.freeze(myObject8);
myObject8.name = 'Jane'; // This will not change the name property
console.log(myObject8.name); // John
// Object.seal() prevents an object from being modified, but allows properties to be added or removed
const myObject9 = {
  name: 'John',
  age: 30
};
Object.seal(myObject9);
myObject9.name = 'Jane'; // This will change the name property
console.log(myObject9.name); // Jane
// Object.is() compares two values for equality
const myValue1 = 'John';
const myValue2 = 'John';
const myValue3 = 'Jane';
console.log(Object.is(myValue1, myValue2)); // true
console.log(Object.is(myValue1, myValue3)); // false