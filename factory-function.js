function personFactory(name) {
    return {
        talk() {
            console.log(`Hello, ${name}!`);
        }
    }; 
}
// Usage
const person = personFactory('Alice');
person.talk(); // Output: Hello, Alice!

// Export the factory function
module.exports = personFactory;
// Test the factory function
if (require.main === module) {
    const testPerson = personFactory('Bob');
    testPerson.talk(); // Output: Hello, Bob!
}
console.log('Factory function test completed.');

//constructor function
function Student(name){
    this.name = name;
    this.study = () => {
        console.log(`${this.name} is studying.`);
    };
}
// Usage
const student = new Student('Charlie');
student.study(); // Output: Charlie is studying.

const flower = {
    speak() {
        return `I am a flower called ${this.name}.`;
    }
}

function createFlower(name) {
    return Object.create(flower, {
        name: {
            value: name,
            writable: true,
            configurable: true,
            enumerable: true
        }
    });
}
// Usage
const myFlower = createFlower('Rose');
console.log(myFlower.speak()); // Output: I am a flower called + Rose.