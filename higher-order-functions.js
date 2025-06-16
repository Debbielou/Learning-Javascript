const companies = [
  { name: 'Company One', category: 'Finance', start: 1981, end: 1989 },
  { name: 'Company Two', category: 'Retail', start: 1992, end: 2008 },
  { name: 'Company Three', category: 'Auto', start: 1999, end: 2007 },
  { name: 'Company Four', category: 'Retail', start: 1989, end: 2010 },
  { name: 'Company Five', category: 'Technology', start: 2000, end: 2005 },
  { name: 'Company Six', category: 'Finance', start: 1985, end: 1995 },
  { name: 'Company Seven', category: 'Auto', start: 1992, end: 2000 },
  { name: 'Company Eight', category: 'Technology', start: 2011, end: 2016 },
  { name: 'Company Nine', category: 'Retail', start: 1981, end: 1989 },
  { name: 'Company Ten', category: 'Auto', start: 1990, end: 1999 },
];
const ages = [33, 12, 20, 25, 40, 18, 30, 22];
// forEach
// companies.forEach(function (company) {
//   console.log(company.name);
// });
// filter
let canDrink = ages.filter(function (age) {
  if (age >= 21) {
    return true;
  }
});
console.log(canDrink);
// // filter with arrow function
let canDrinkArrow = ages.filter((age) => age >= 21);
console.log(canDrinkArrow);
// // filter with arrow function and implicit return
// let canDrinkImplicit = ages.filter((age) => age >= 21);
// console.log(canDrinkImplicit);
// // filter with arrow function and implicit return and ternary operator
let canDrinkTernary = ages.filter((age) => (age <= 21 ? true : false));
console.log(canDrinkTernary);
// // map
const companyNames = companies.map(function (company) {
  return company.name;
});
console.log(companyNames);
// // map with arrow function
// const companyNamesArrow = companies.map((company) => company.name);
// console.log(companyNamesArrow);
// // map with arrow function and implicit return
// const companyNamesImplicit = companies.map((company) => company.name);
// console.log(companyNamesImplicit);
// // map with arrow function and implicit return and ternary operator
const companyNamesTernary = companies.map((company) =>
  company.name ? company.name : 'No Name'
);
console.log(companyNamesTernary);
// // map with arrow function and implicit return and ternary operator and default value
// const companyNamesDefault = companies.map((company) =>
//   company.name ? company.name : 'No Name'
// );
// console.log(companyNamesDefault);
// // map with arrow function and implicit return and ternary operator and default value and destructuring
// const companyNamesDestructuring = companies.map(({ name }) =>
//   name ? name : 'No Name'
// );
// console.log(companyNamesDestructuring);
// // map with arrow function and implicit return and ternary operator and default value and destructuring and default value
const companyNamesDestructuringDefault = companies.map(
  ({ name = 'No Name' }) => name
);
console.log(companyNamesDestructuringDefault);
// // map with arrow function and implicit return and ternary operator and default value and destructuring and default value and rest operator

const names = ["Zoe", "John", "Theodore", "Doe", "Ethan", "Alice"];
const filteredNames = []
names.forEach((name) => {
  if (name.startsWith("Z")) {
    filteredNames.push(name);
  }
});
console.log(filteredNames);

const shortNames = names.filter((name) => name.length <= 4);
console.log(shortNames);
