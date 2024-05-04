// Retrieve the buttons references
const themeButton = document.querySelector('#theme-button');
const backButton = document.querySelector('#back-button');
const clearButton = document.querySelector('#clear-button');

// Theme button event handler 
themeButton.addEventListener('click', function (event) {
  event.preventDefault();

  let element = document.body;

  // Toggle theme button related class to have the button take effect
  element.classList.toggle("theme-button");

  console.log("Executed theme-mode button");
});

// Back button event handler
backButton.addEventListener('click', function (event) {
  event.preventDefault();

  // Jump to the main query page
  window.location.href = "./index.html"
});

// Clear button event handler
clearButton.addEventListener('click', function (event) {
    event.preventDefault();
  
    // clear the localStorage
    localStorage.clear();
    posts.textContent = "";

  });