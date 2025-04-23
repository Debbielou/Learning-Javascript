const person = [];

person[0] = "Debbie";
person[1] = "Nakamatte";
person[2] = 30;
person[3] = "Software Engineer";

console.log(person[0]); 

// person[0] = "Debbie Nakamatte";
console.log(person[0]);
console.log(person);
console.log(person.length);
console.log(person.length - 1);
console.log(person[person.length - 1]);

//add to the end of the array
person.push("MTN Uganda");
console.log(person);

//add to the beginning of the array
person.unshift("Ugandan");
console.log(person);

// person.pop();
// console.log(person);

//remove from the end of the array
// const lastItem = person.pop();
// console.log(lastItem);
// console.log(person);

//remove from the beginning of the array
// const firstItem = person.shift();
// console.log(firstItem);
// console.log(person);

//remove from the middle of the array
// const middleItem = person.splice(2, 1);
// console.log(middleItem);
// console.log(person);

//remove from the middle of the array and add a new item
// const middleItem = person.splice(2, 1, "golf");
// console.log(middleItem);
// console.log(person);

// const cities = ["Uganda", "Kampala", "Entebbe"];
// const status = ["Active", "Suspended", "Partial"];
// const newItems = cities.concat(status);
// console.log(newItems);


// const person1 = ["Ted", "Fred", "Jed", "Ned"];
// const mid = person1.splice(2, 0, "Degree");
// console.log(mid);
// console.log(person1);

