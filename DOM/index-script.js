// const camp = document.getElementById('camp');
const camp = document.querySelector('#camp'); //if there's a class, 
// in the brackets, it would be .camp
camp.append("-meeting",'');
camp.append('books', ' ', 'pens', ' ', 'and', ' ', 'pencils');

const flowers = document.createElement('div');
flowers.textContent = 'Flowers';
camp.append(flowers);
// const flowers = document.createElement('div');
const fruits = document.createElement("p");
camp.append(fruits);
fruits.innerText = 'I love fruits';
console.log(fruits);

const container = document.getElementById('container');
const fruitsList = document.createElement('ul');
const fruitsArray = ['Mango', 'Orange', 'Apple', 'Pineapple'];
// Loop through the fruitsArray to create and append list items
fruitsArray.forEach(fruitName => {
    // Create a new list item (<li>) for each fruit
    const listItem = document.createElement('li');

    // Set the text content of the list item to the fruit name
    listItem.textContent = fruitName;

    // Append the list item to the unordered list (<ul>)
    fruitsList.append(listItem);
});

// You can also add other content related to fruits, for example:
const fruitsParagraph = document.createElement('p');
fruitsParagraph.innerText = 'These are some of my favorite fruits!';

console.log(container.innerText);
console.log(container.textContent);

const masaka = document.createElement('div');
masaka.innerHTML = "<p>Masaka people include: <strong>Nakamatte</strong> and <em>Yomena</em></p>";
container.append(masaka);
container.append(fruitsList);
container.prepend(fruitsParagraph); // Prepend to add it before the list

//working with attributes
const love = document.createElement("div");
love.setAttribute("id", "love");
love.setAttribute("class", "love-class");
love.textContent = "I love coding!";
container.append(love);
console.log(love.getAttribute("id")); // Get the value of the "id" attribute
console.log(love.className); // Get the value of the "class" attribute
love.id = "new-love-id"; // Change the "id" attribute
console.log(love.id); // Check the updated "id" attribute

//working with data attributes
const dataDiv = document.createElement("div");
dataDiv.id = "data-div";
dataDiv.dataset.spell = "abracadabra";
dataDiv.dataset.components = "air, water, fire, earth";
dataDiv.textContent = "This is a data attribute example.";
container.append(dataDiv);
console.log(dataDiv.dataset.spell); // Access the "data-spell" attribute
console.log(dataDiv.dataset.components); // Access the "data-components" attribute

console.log("spell-type:",dataDiv.dataset.spell);
// console.log("components-type:",dataDiv.dataset.components).split(", ");

//Removing elements dynamically
const itemList = document.querySelector('ul');
container.append(itemList);

function addItem(itemName) {
    const newItem = document.createElement('li');
    newItem.textContent = itemName;
    const removeButton = document.createElement('button');
    removeButton.textContent = 'Remove';
    removeButton.addEventListener('click', ()=> {
      newItem.remove();
    });
    newItem.append(removeButton);
    itemList.append(newItem);
}