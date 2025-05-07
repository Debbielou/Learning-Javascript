let fruits = new Map();
fruits.set('apple', 1);
fruits.set('banana', 2);
fruits.set('orange', 3);
fruits.set('grape', 4);

console.log(fruits.get('banana')); // 2
console.log(fruits.has('apple')); // true
console.log(fruits.size); // 4
console.log(fruits.keys()); // [Map Iterator] { 'apple', 'banana', 'orange', 'grape' }
console.log(fruits.values()); // [Map Iterator] { 1, 2, 3, 4 }
console.log(fruits.entries()); // [Map Iterator] { [ 'apple', 1 ], [ 'banana', 2 ], [ 'orange', 3 ], [ 'grape', 4 ] }
// console.log(fruits.delete('orange')); // true