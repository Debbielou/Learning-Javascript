class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
  }
}

const Person1 = new Person("Deborah", 20);
Person1.greet();

class Employee {
  constructor() {
    this.name = "John";
    this.age = 30;
    this.salary = 50000;
  }

  greet() {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old. My salary is ${this.salary}.`);
  }
}

const Employee1 = new Employee();
Employee1.greet();

class ekibalo {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
  kugatta() {
    return this.x + this.y;
  }

  get multiply() {
    return this.x * this.y;
  }
}
let ekibalo1 = new ekibalo(5, 10);
console.log(ekibalo1.kugatta());
console.log(ekibalo1.multiply);

let p = this;
console.log(p);
console.log(this);
console.log(this === p);

class Car {
  constructor(name, year) {
    this.name = name;
    this.year = year;
  }
  age() {
    const date = new Date();
    return date.getFullYear() - this.year;
  }
}

const myCar = new Car("Ford", 2014);
console.log(myCar.age()); // Outputs the age of the car based on the current year

//inheritance
class Animal {
  constructor(name) { //supplies value for the name property
    this.erinnya = name; //attrribute assignment
  }

  speak() {
    console.log(`${this.name} makes a noise.`);
  }
}

class Dog extends Animal {
  constructor(name, breed) {
    super(name); //calls the constructor of the parent class
  }

  eat() {
    console.log(`${this.erinnya} barks.`);
  }
}
const dog = new Dog("Rex", "Labrador");
dog.speak(); // Outputs: Rex makes a noise.
dog.eat(); // Outputs: Rex barks.

//getters and setters
class Carp {
  constructor(brand) {
    this.carpname = brand;
  }
  get cnam() {
    return this.carpname;
  }
  set cnam(x) {
    if (x == " " || x.length > 8 || typeof x !== "string") {
      console.log("Invalid car name");
    }
    else {
      this.carpname = x;
    }
  }
}

const pingu = new Carp("Ford");
pingu.cnam = "Toyota";
console.log(pingu.cnam); // Outputs: Toyota
pingu.cnam = "mwpl289d"; // Outputs: Invalid car name

//static methods
class Flower {
  constructor(name, color) {
    this.name = name;
    this.color = color;
  }

   static display() {
    return "Flowers are beautiful!";
  }
}
console.log(Flower.display()); // Outputs: Flowers are beautiful!