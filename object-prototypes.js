function Person(first, last, age, eyecolor) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eyecolor;
  }
  
  const myFather = new Person("John", "Doe", 50, "blue");
  const myMother = new Person("Sally", "Rally", 48, "green");
  const myArray = [myFather, myMother];
  console.log(myArray);
  // Adding a property to the prototype
  Person.prototype.nationality = "English";
  console.log(myFather);
    console.log(myMother.nationality);

    Person.prototype.name = function() {
        return this.firstName + " " + this.lastName;
      };
        console.log(myFather.name());