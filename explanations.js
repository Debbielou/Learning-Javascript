//callbacks

let order = (callProduction) => {
  console.log(`Order placed for icecream, please call production.`);
  callProduction();
};
let production = () => {
  console.log(`Production started.`);
};
order(production);
// Explanation:
// In this code, we define two functions: `order` and `production`.
// The `order` function takes a callback function as an argument (`call-production`),

let stock = {
    fruits: ['apple', 'banana', 'orange', 'strawberry'],
    liquids: ['water', 'milk', 'juice'],
    holders: ['cone', 'cup', 'bowl'],
    toppings: ['chocolate', 'sprinkles', 'nuts']
};
//     let placeOrder= (fruit_index, callProduction) =>{
//         setTimeout(() => {
//             console.log(`Order placed for ${stock.fruits[fruit_index]}.`);
//             callProduction();       
//     }, 3000)
    
// };

//         let startProduction = () => {
//             setTimeout(() => {
//                 console.log(`Production for icecream has started.`);
//             }, 2000)
//                 setTimeout(() => {
//                     console.log(`Mixing ${stock.liquids[0]} & ${stock.liquids[2]}.`);
//                 }, 3000)
//                     setTimeout(() => {
//                         console.log(`Serve icecream in a  ${stock.toppings[1]}.`);
//                     }, 5000);

//     };

//     placeOrder(0 , startProduction);
    
//     //promise

    // let is_shop_open = true;

    // let buy = (time, work) => {
    //     return new Promise((resolve, reject) => {
    //         if (is_shop_open) {
    //             setTimeout(() => {
    //                 resolve(work());
    //             }, time);
    //         } else {
    //             reject(console.log(`Shop is closed.`));
    //         }
    //     });
    // }
    // buy(2000, () => console.log(`Order placed for ${stock.fruits[0]}.`))
    //     .then(() => {
    //         return buy(2000, () => console.log(`Order placed for ${stock.fruits[1]}.`));
    //     })
    //     .then(() => {
    //         return buy(2000, () => console.log(`Using plain ${stock.liquids[1]}.`));
    //     })
    //     .then(() => {
    //         return buy(2000, () => console.log(`Serving icecream in a  ${stock.holders[0]}.`));
    //     })
    //     .catch(() => {
    //         console.log(`Customer left.`);
    //     })
    //     .finally(() => {
    //         console.log(`Thank you for visiting our shop.`);
    //     });

        //async-await
let is_shop_open_async = true;

let toppings_choice = ()=> {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Which toppings would you like?");
        }, 3000);
    });
}

async function kitchen() {
    console.log("A");
    console.log("B");
    console.log("C");

    await toppings_choice()
    console.log("D");
    console.log("E");
        
}
kitchen();
console.log("Doing the dishes");
console.log("Cleaning the tables");
console.log("Taking orders");
