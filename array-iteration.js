let num = [1, 2, 3, 4, 5];

num.forEach((number, index) => {
  console.log(`Index: ${index}, Number: ${number}`);
});

let sum = num.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
}
, 2);
console.log(`Sum: ${sum}`);

const marks = [10, 20, 30, 40, 50];
const doubledMarks = marks.map((mark) => {
  return mark * 2;
});
console.log(`Doubled Marks: ${doubledMarks}`);
const filteredMarks = marks.filter((mark) => {
  return mark > 30;
});
console.log(`Filtered Marks: ${filteredMarks}`);
const foundMark = marks.find((mark) => {
  return mark > 30;
});
console.log(`Found Mark: ${foundMark}`);
const allMarks = marks.every((mark) => {
  return mark > 0;
});
console.log(`All Marks: ${allMarks}`);

const months = ["Januar", "Februar", "Mar", "April"];
const myMonths = months.with(0, "January");
console.log(`My Months: ${myMonths}`);

const q1 = ["Jan", "Feb", "Mar"];
const q2 = ["Apr", "May", "Jun"];
const q3 = ["Jul", "Aug", "Sep"];
const q4 = ["Oct", "Nov", "Dec"];

const year = [...q1, ...q2, ...q3, ...q4];
console.log(`Year: ${year}`);
const quarter = ["Jan", "Feb", "Mar"];
console.log(`Q1: ${quarter}`);