
// Retrieve the anchor posts on to which the user blog enteries is to be generated
const posts = document.getElementById("posts");

function init() {
    console.log("localStorage.lenght: ", localStorage.length);
    const blog = JSON.parse(localStorage.getItem('userBlog')) || [];
    
    for (let i = 0; i < blog.length; i++) {
    
      // Retrieve the stored blog enteries from local storage
      const retrievedUser = blog[i].storedUserName;
      const retrievedTitle = blog[i].storedTitle;
      const retrievedContent = blog[i].storedContent;
    
      // Dyanmically create the blog summary page elements
      const submittedBlogEnteries = document.createElement('div');
      const submittedTitle = document.createElement('h3');
      const submittedContent = document.createElement('p');
      const byBoilerPlate = document.createElement('p');
      const submittedUser = document.createElement('p');

      // Populate the created elements with the retrieved user enteries
      submittedTitle.textContent = retrievedTitle;
      submittedContent.textContent = retrievedContent;
      byBoilerPlate.textContent = "Posted by:  ";
      submittedUser.textContent = retrievedUser;

      // Append the submitted blog enteries to the anchor posts in the body
      posts.appendChild(submittedBlogEnteries);
      submittedBlogEnteries.appendChild(submittedTitle);
      submittedBlogEnteries.appendChild(submittedContent);
      submittedBlogEnteries.appendChild(byBoilerPlate);
      submittedBlogEnteries.appendChild(submittedUser);

      // Style the submitted blog enteries
      submittedBlogEnteries.setAttribute('style', 
      'content: " "; display: block; border: 3px solid #13293d; clear: both; background-color:cornsilk;');
      submittedTitle.setAttribute('style', 'display: block; border-bottom: 1px solid #13293d;');
      submittedContent.setAttribute('style','display: block;');
      byBoilerPlate.setAttribute('style', 'display: inline-block; font-style: italic;');
      submittedUser.setAttribute('style', 'display: inline-block; font-style: italic;');
    }
}

// Invoke the retrieval of user enteries from local storage
// and the dynamce construction of the submitted user blog enteries
init();

const moodButton = document.querySelector('#mood-button');
const backButton = document.querySelector('#back-button');
const clearButton = document.querySelector('#clear-button');

/**
 * Note:
 * The dark/light button below is currently not working and needs to be debugged
/* 
darkButton.addEventListener('click', function (event) {
  event.preventDefault();

  // Toggle mood switch
  let element = document.body;
  element.classList.toggle("dark-button");

  console.log("Executed dark-mode button");

}); */

backButton.addEventListener('click', function (event) {
  event.preventDefault();

  // Jump to the main query page
  window.location.href = "./index.html"
});

clearButton.addEventListener('click', function (event) {
    event.preventDefault();
  
    // clear the localStorage
    localStorage.clear();
    posts.textContent = "";

  });