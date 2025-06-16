// Prevents re-assignment
// const car = {type:"Fiat", model:"500", color:"white"};

// Prevents adding object properties
// Object.preventExtensions(object)

// Returns true if properties can be added to an object
// Object.isExtensible(object)

// Prevents adding and deleting object properties
// Object.seal(object)

// Returns true if object is sealed
// Object.isSealed(object)

// Prevents any changes to an object
// Object.freeze(object)

// Returns true if object is frozen
// Object.isFrozen(object)

const car = {type:"Fiat", model:"500", color:"white"};
Object.freeze(car);
car.type = "Toyota"; // This will not change the type

Object.preventExtensions(car); // Prevents adding new properties
car.year = 2020; // This will not add a new property

Object.isExtensible(car); // Returns false, as the object is not extensible
Object.seal(car); // Prevents adding or deleting properties
Object.isSealed(car); // Returns true, as the object is sealed
Object.freeze(car); // Prevents any changes to the object
Object.isFrozen(car); // Returns true, as the object is frozen
console.log(car); // {type: "Fiat", model: "500", color: "white"}
// The car object remains unchanged due to the freeze method