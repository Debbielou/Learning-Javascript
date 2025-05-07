let billionare = false;
let age = 60;

if (age == 60) {
    billionare = true;
    } else{
    billionare = false;
    }
    console.log(billionare);

//else if
 let weekday = 8;
 if (weekday == 1) {
    console.log("Monday");
 }
else if (weekday == 2) {
    console.log("Tuesday");
 }
else if (weekday == 3) {
    console.log("Wednesday");
 }
else if (weekday == 4) {
    console.log("Thursday");
 }
else if (weekday == 5) {
    console.log("Friday");
 }
else if (weekday == 6) {
    console.log("Saturday");
 }
else if (weekday == 7) {
    console.log("Sunday");
 } else{
     console.log("Invalid day")
 }

 //switch
let day = 7;
switch (day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("Invalid day");
}

let today = new Date().toLocaleString('default', { weekday: 'short' });
switch(true){
    case today === 'Mon':
        console.log(`Today is ${today}`); 
        break;
    case today === 'Tue':
        console.log(`Today is ${today}`); 
        break;
    case today === 'Wed':
        console.log(`Today is ${today}`); 
        break;
    case today === 'Thu':
        console.log(`Today is ${today}`); 
        break;
    case today === 'Fri':
        console.log(`Today is ${today}`); 
        break;
    case today === 'Sat':
        console.log(`Today is ${today}`); 
        break;
    case today === 'Sun':
        console.log(`Today is ${today}`); 
        break;
    default:
        console.log('Invalid day');
        break;
}
