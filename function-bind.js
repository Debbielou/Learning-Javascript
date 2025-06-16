//preserving 'this' in function calls
function bind(fn, context) {
  return function() {
    return fn.apply(context, arguments);
  };
}
// Example usage:
function greet() {
  console.log(`Hello, ${this.name}!`);
}
const person = { name: 'Alice' };
const boundGreet = bind(greet, person);
boundGreet(); // Output: Hello, Alice!

const book = {
    firstName:"John",
    lastName: "Doe",
    display: function () {
      return this.firstName + " " + this.lastName;
    }
}
  
  book.display();
//  This function allows you to bind a function to a specific context (this value),