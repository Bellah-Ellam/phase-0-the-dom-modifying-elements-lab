// Write your code here!

var element = document.getElementById("main");
element.parentNode.removeChild(element);

// Create a new <h1> element
// const newHeader = document.createElement('h1');

// // Set the text content of the <h1> element
// newHeader.textContent = "Hello World!";

// // Append the new <h1> element to the document body
// document.body.appendChild(newHeader);


// Replace YOUR-NAME with your actual name
const name = "YOUR-NAME";

// Create a new <h1> element with the ID 'victory'
const newHeader = document.createElement('h1');
newHeader.setAttribute('id', 'victory');

// Set the text content of the <h1> element
newHeader.textContent = `${name} is the champion!`;

// Append the new <h1> element to the document body
document.body.appendChild(newHeader);