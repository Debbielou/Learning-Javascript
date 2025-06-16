
// this is an object literal
const employee = {
    firstName: "Debbie",
    lastName : "Cox",
    id       : 133513,
    fullName : function() {
      return this.firstName + " " + this.lastName;
    }
  };
  employee.fullName(); // "this returns to the object that called it"
  console.log(employee.fullName()); // this prints to the console

  let car = {}
  console.log(typeof car);
  console.log(car); 
  console.log(car instanceof Object); 

  let car2 = {
    make: "Toyota",
    model: "Corolla",
    year: 2020,
     start: function() {
      console.log("Car started");
    }
  }
  car2.start(); 

  let input = 'name'

  let user = {
    name: 'John',
    age: 30,
    
  }
  console.log(user[input]);

  user.tribe = 'Muganda';
  console.log(user);

  user['email'] = 'denakamatte@gmail.com';
  console.log(user);

  delete user.email;
  console.log(user);

  patient = {
    name: "Baliki",
    age: 22,
    disease: {
        name: "Malaria",
        severity: "High"
    }
  }
  console.log(patient.disease.name);

  function Person(first, last, age, eye) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = first;
    }

  let myFather = new Person("John", "Doe", 50, "blue");
  console.log(myFather.eyeColor);

  //object methods
  let users = {
    fName: "Debbie",
    lName: "Cox",
    age: 20,
  }

  let myVillage = {
    name: "Kiboga",
    location: "Central Uganda",
    population: 10000,
  }
  Object.assign(myVillage, users);
  console.log(myVillage);
  console.log(users);

  let x = Object.create(users);
  console.log("The new object is: ", x.lName);
