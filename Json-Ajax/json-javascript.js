//example of Json

var myPets = [
    
    {
        "name": "Fluffy",
        "species": "cat",
        "age": 3,
        "vaccinated": true
    },
    {
        "name": "Rex",
        "species": "dog",
        "age": 5,
        "vaccinated": false
    },
    {
        "name": "Goldie",
        "species": "fish",
        "age": 1,
        "vaccinated": false
    }
]
//usage
myPets[1].species; // "dog"

//example ajax
// let myRequest = new XMLHttpRequest();
// myRequest.open('GET', 'https://learnwebcode.github.io/json-example/animals-1.json', true);
// myRequest.onload = function() {
//     // console.log(myRequest.responseText);
//     let myData = JSON.parse(myRequest.responseText);
//     console.log(myData[1]);
// };
// myRequest.send();

//example of using ajax to get json data and display it on the page
let btn = document.getElementById('btn');
btn.addEventListener('click', function() {
 
    let myRequest = new XMLHttpRequest();
    myRequest.open('GET', 'https://learnwebcode.github.io/json-example/animals-1.json', true);
    myRequest.onload = function() {
        // console.log(myRequest.responseText);
        let myData = JSON.parse(myRequest.responseText);
        console.log(myData[1]);
        // console.log(myData);
        renderHTML(myData);
    };
    myRequest.onerror = function() {
        console.error("An error occurred while fetching the data.");
    };
    myRequest.send(); 
});

function renderHTML(data) {
    let animalContainer = document.getElementById('animal-info'); // Assuming you have an element with this ID to display the info
    let htmlString = "";

    for (let i = 0; i < data.length; i++) {
        htmlString += "<p>" + data[i].name + " is a " + data[i].species + ". ";

        // Check if the animal has 'foods' and 'liked' foods
        if (data[i].foods && data[i].foods.likes && data[i].foods.likes.length > 0) {
            htmlString += "It likes ";
            for (let ii = 0; ii < data[i].foods.likes.length; ii++) {
                htmlString += data[i].foods.likes[ii];
                if (ii < data[i].foods.likes.length - 1) {
                    htmlString += ", "; // Add a comma if it's not the last item
                }
            }
            htmlString += "."; // Period after listing liked foods
        }

        // Check if the animal has 'foods' and 'disliked' foods
        if (data[i].foods && data[i].foods.dislikes && data[i].foods.dislikes.length > 0) {
            htmlString += " It dislikes ";
            for (let ii = 0; ii < data[i].foods.dislikes.length; ii++) {
                htmlString += data[i].foods.dislikes[ii];
                if (ii < data[i].foods.dislikes.length - 1) {
                    htmlString += ", "; // Add a comma if it's not the last item
                }
            }
            htmlString += "."; // Period after listing disliked foods
        }

        htmlString += "</p>"; // Close the paragraph tag for each animal
    }

    // Append the generated HTML to the container
    animalContainer.insertAdjacentHTML('beforeend', htmlString);
}

