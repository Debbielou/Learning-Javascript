// function getWeather() {
//   return new Promise((resolve, reject) => {
//   });
// }

// const promise = getWeather();
// promise.then((weather) => {
//   console.log("Weather data:", weather);
// }).catch((error) => {
//   console.error("Error fetching weather data:", error);
// });
// console.log("Fetching weather data...");

// function getWeather() {
//   return new Promise((resolve, reject) => {
//     // Simulate an asynchronous operation
//     setTimeout(() => {
//       const weatherData = { temperature: 25, condition: "Sunny" };
//       resolve(weatherData); // Correctly resolve the promise
//     }, 2000);
//   });
// }

// //waiting for interval to complete
// let counter = 0;
// const maxExecutions = 5; // Run 5 times then stop

// const intervalId = setInterval(myFunction, 2000);

// function myFunction() {
//   let d = new Date();
//   console.log("Current time: " +
//     d.getHours() + ":" +
//     d.getMinutes() + ":" +
//     d.getSeconds());

//   counter++;
//   if (counter >= maxExecutions) {
//     clearInterval(intervalId);
//     console.log("Interval stopped after " + maxExecutions + " executions.");
//   }
// }

// function myDisplayer(some) {
//   console.log(some);
// }

// let myPromise = new Promise(function (myResolve, myReject) {
//   let x = 2;

//   // The producing code (this may take some time)

//   if (x == 0) {
//     myResolve("OK");
//   } else {
//     myReject("Error");
//   }
// });

// myPromise.then(
//   function (value) { myDisplayer(value); },
//   function (error) { myDisplayer(error); }
// );

// async function myDisplay() {
//   let myPromise = new Promise(function (resolve, reject) {
//     resolve("I love You !!");
//   });
//   console.log(await myPromise);
// }

// myDisplay();

//additional examples
function travel() {
  setTimeout(() => {
    console.log("I will go to Germany...");
  }, 3000);
  setTimeout(() => {
    console.log("I have arrived in Germany...");
  }, 6000);
}
travel();

let b = new Promise(function(resolve, reject) {

  const v = 6;
  if (v > 5) {
    resolve("Success");
  }
  else {
    reject("Failure");
  }
  {
    console.log("Promise is pending...");
  
  }
});

b.then(function(value) {
  console.log("i got it" + value);
},
function(error) {
  console.log("i got an error" + error);
});

//waiting for a file

const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');

const data = await response.json();

console.log(data);