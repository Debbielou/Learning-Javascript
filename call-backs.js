function orderPizza(pizzaType, callback) {
    console.log("Ordering a " + pizzaType + " pizza...");
    setTimeout(() => {
        console.log("Pizza is ready!");
        callback(pizzaType);
    }, 2000);
}
orderPizza("Margherita", (pizzaType) => {
    console.log("Enjoy your " + pizzaType + " pizza!");
});

function orderFood(chicken){
  setTimeout(() => {
    const food = "matooke";
    chicken(food)
  }, 3000);
}

function enjoyFood(food) {
  console.log("Enjoy your " + `${food}` + "!");
}
orderFood(enjoyFood);
console.log("Waiting for food to be ready...");





















// function myDisplayer(hello){

//     console.log(hello + " from myDisplayer function");
// }

// function myFirst(p){
//  return myDisplayer(p);
// }

// function nakatudde(morning){
//     return myDisplayer(morning);
// }

// console.log(myFirst("Eid Mubarak"));
// console.log(nakatudde("Good Morning"));

// function gutujja(olyotya){
// console.log(olyotya + " from gutujja function");
// }

// function greeting(tribe){

// if (tribe === "Baganda") {
//     return "Wasuzotya";
// }
// else if(tribe === "Basoga") {
//     return "kodeyo";
// }
// else if(tribe === "Banyankole") {
//     return "Oriryegye";
// }
// else{
//     return "Hello";
// }
// }

// const x = greeting("Baganda");
// gutujja(x);

// function myDisplayer(some) {
//     console.log("The new value of some is" + " " + some);
//   }
  
//   function myCalculator(num1, num2, myCallback) {
//     let sum = num1 + num2;
//     myCallback(sum);
//   }
  
//   console.log(myCalculator(5, 5, myDisplayer));

//   function kugeza(call) {
//     console.log("My result is: " +  " " + call);
    
//   }

//   function when(timing, myCallback){
//     if(timing === "morning") {
//         return myCallback("Good Morning");
//     }
//     else if(timing === "afternoon") {
//         return myCallback("Good Afternoon");
//     }
//     else if(timing === "evening") {
//         return myCallback("Good Evening");
//     }
//     else {
//         return myCallback("Nesonyiwa tonkooya");

//   }
// }
// let y = when("ekiro", kugeza);
// console.log(y);

// function removeNeg(numbers, callback) {
//     const myArray = [];
//     for (const x of numbers) {
//       if (callback(x)) {
//         myArray.push(x);
//       }
//     }
//     return myArray;
//   }
//   const myNumbers = [4, 1, -20, -7, 5, 9, -6];
  
//   // Call removeNeg with a callback
// const posNumbers = removeNeg(myNumbers, (x) => x >= 0);