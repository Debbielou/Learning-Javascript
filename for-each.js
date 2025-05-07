// Create a Set
const letters = new Set(["a","b","c"]);

// List all entries
let text = "";
letters.forEach (function(value) {
  text += value;
})
console.log(text);
// List all entries
letters.forEach (function(value, key) {
  text += value + key;
})
console.log(text);
// List all entries
letters.forEach (function(value, key, set) {
  text += value + key + set;
})
console.log(text);