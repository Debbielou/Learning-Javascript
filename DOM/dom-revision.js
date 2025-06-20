
const ulFruits = document.getElementById('fruits');

if (ulFruits) { 
    const firstLi = ulFruits.firstElementChild; 

    if (firstLi) { 
        firstLi.style.backgroundColor = 'yellow';
        firstLi.style.color = 'red';
        firstLi.style.fontWeight = 'bold';
        console.log("Styled the first fruit item:", firstLi.textContent);
    } else {
        console.log("No list items found within the 'fruits' UL.");
    }
} else {
    console.log("UL element with id 'fruits' not found.");
}

const x = document.querySelectorAll('ul');
x.forEach(x => {
    const lastLi = x.lastElementChild;
    lastLi.style.backgroundColor = 'green';
});

const p = document.getElementById('vegetables');
const nextP = p.nextElementSibling;
nextP.style.backgroundColor = 'gray';
nextP.style.color = 'white';

const yo = document.getElementById('diary');
const hey = yo.hey;

Array.from(hey).forEach(child => {
    child.style.fontWeight = 'bold';});