const person = {
    fullName: function() {
      return this.firstName + " " + this.lastName;
    }
  }
  const person1 = {
    firstName:"John",
    lastName: "Doe"
  }
  const person2 = {
    firstName:"Mary",
    lastName: "Doe"
  }
  
  // This will return "John Doe":
  console.log(person.fullName.call(person1));

  //call methhod takes arguments seperated by commas
  const people = {
    fullName: function(city, country) {
      return this.firstName + " " + this.lastName + "," + city + "," + country;
    }
  }
  
  const people1 = {
    firstName:"John",
    lastName: "Doe"
  }
  
  console.log(people.fullName.call(people1, "Oslo", "Norway"));

  //apply methods takes arguments as an array
  const mango = {
    fullName: function(city, country) {
      return this.firstName + " " + this.lastName + "," + city + "," + country;
    }
  }
  
  const mango1 = {
    firstName:"John",
    lastName: "Doe"
  }
  
  mango.fullName.apply(mango1, ["Oslo", "Norway"]);
  
  