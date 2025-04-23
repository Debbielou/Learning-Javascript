class Person {
    constructor(first, last, age, eyecolor) {
        this.firstName = first;
        this.lastName = last;
        this.age = age;
        this.eyeColor = eyecolor;
        this.fullName = function () {
            return this.firstName + " " + this.lastName;
        };
    }
}

let myFather = new Person("John", "Doe", 50, "blue");
let myMother = new Person("Sally", "Rally", 48, "green");
console.log(myFather);
console.log(myMother);
console.log(myFather.fullName());
console.log(myMother.fullName());

myMother.changeName = function (name) {
    this.lastName = name;
  }