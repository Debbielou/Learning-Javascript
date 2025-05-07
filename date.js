// const d = new Date();
// console.log(d);

// const date = new Date();
// const options = {
//   timeZone: 'Africa/Nairobi', // EAT timezone
//   year: 'numeric',
//   month: 'numeric',
//   day: 'numeric',
//   hour: 'numeric',
//   minute: 'numeric',
//   second: 'numeric',
//   hour12: false // Use 24-hour format
// };

// const eatTimeString = new Intl.DateTimeFormat('en-KE', options).format(date);
// console.log("East African Time:", eatTimeString);

// const x = new Date("2022-03-25"); // this date doesnt change
// console.log(x);

// var myDate = new Date("2022-03-25");
// console.log(myDate); 
// console.log(myDate.getMonth());
// console.log(myDate.getDay()); 
// console.log(myDate.getFullYear());

// var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", 
//     "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
// var days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
// console.log(months[myDate.getMonth()]); 
// console.log(days[myDate.getDay()]); 

// const k = new Date("2015");
// console.log(k);

const currentDate = new Date();
console.log(currentDate.toLocaleString('default', {
  month: 'long',
  weekday: 'long'
}));

const date = new Date();
console.log(date);

var hour = date.getHours();
var minute= date.getMinutes();
console.log(`${hour}:${minute}`);

let day = date.toLocaleString('default', {weekday: 'long'});
console.log(day);