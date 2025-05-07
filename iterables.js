let color = ["red", "blue", "green", "yellow"];

for ( x of color) {
    console.log(x);
}

let iterator = color[Symbol.iterator]();
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next().value);

// Create a Set
const letters = new Set(["a","b","c", "d","e"]);

// List all Elements
let text = "";
for (const x of letters) {
  text += x;
}
console.log(text);