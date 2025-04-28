var message = "I love JavaScript!";
console.log(message.substring(2,7));
console.log(message.indexOf("JavaScript"));
console.log(message.lastIndexOf("JavaScript"));
console.log(message.replace("JavaScript", "Python"));
console.log(message.toUpperCase());

var items = ["Bottle", 4, true];
console.log(items);
console.log(items[2]);
console.log(items.join());
console.log(items.join("-"));
console.log(items.push("Pen"));
console.log(items);

let x = new Date("1970-01-01");
console.log(x);
console.log(x.getTime());
console.log(x.getFullYear());

const fruits = ["Apple", "Orange", "Apple", "Mango"];
let position = fruits.indexOf("Apple") + 1;
console.log(position);