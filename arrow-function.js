const me = {
    name: 'John',
    greet: function() {
        return this;
    },
    arrowGreet: () => {
        return this;
    }
}

console.log(me.greet()); // Returns the me object
console.log(me.arrowGreet()); // Returns the global object (or undefined in strict mode)