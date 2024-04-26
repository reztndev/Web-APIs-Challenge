/* The following two element reference retrievers from the document no longer apply given that
 * we are now creating the submittedBlogEnteries object on the fly and populating it
 * with the userBlog that has been submitted and stored in local storage
 * /
 
/* Retrieve placeholder references for constituents of class input-group from document */
/* Form object will no longer be used to retrieve and display submitted blog enteries */
//const userNameInput = document.querySelector('#user-name');
//const titleInput = document.querySelector('#title');
//const contentInput = document.querySelector('#content');

// Retrieve placeholder references for constituents of class submitted-blog-enteries from document
//const retrievedUser = document.getElementById('submitted-user');
//const retrievedTitle = document.getElementById('submitted-title');
//const retrievedContent = document.getElementById('submitted-content');

const posts = document.getElementById("posts");

function init() {
    console.log("localStorage.lenght: ", localStorage.length);
    const blog = JSON.parse(localStorage.getItem('userBlog')) || [];
    
    for (let i = 0; i < blog.length; i++) {
    //let blog = JSON.parse(localStorage[i].getItem('userBlog'));
    //let blog = JSON.parse(localStorage.userBlog[i].getItem('userBlog'));

    //const blog = JSON.parse(localStorage.getItem('userBlog'));
    
    // Retrieve the stored blog enteries from local storage
    const retrievedUser = blog[i].storedUserName;
    const retrievedTitle = blog[i].storedTitle;
    const retrievedContent = blog[i].storedContent;

    /* document class submitted-blog-enteries will no longer be used to store and display submitted blog enteries */
    //retrievedUser.textContent = blog.storedUserName;
    //retrievedTitle.textContent = blog.storedTitle;
    //retrievedContent.textContent = blog.storedContent;

    /* Form object will no longer be used to store and display submitted blog enteries */
    //userNameInput.value = blog.storedUserName; /* changed textContent to value */
    //titleInput.value = blog.storedTitle
    //contentInput.value = blog.storedContent;

    //function createSubmittedBlogObject() {
    const body = document.body;
   
    const submittedBlogEnteries = document.createElement('div');
    const submittedTitle = document.createElement('h3');
    const submittedContent = document.createElement('p');
    const byBoilerPlate = document.createElement('p');
    const submittedUser = document.createElement('p');

    submittedTitle.textContent = retrievedTitle;
    submittedContent.textContent = retrievedContent;
    byBoilerPlate.textContent = "Posted by:  ";
    submittedUser.textContent = retrievedUser;

    posts.appendChild(submittedBlogEnteries);
    submittedBlogEnteries.appendChild(submittedTitle);
    submittedBlogEnteries.appendChild(submittedContent);
    submittedBlogEnteries.appendChild(byBoilerPlate);
    submittedBlogEnteries.appendChild(submittedUser);

    submittedBlogEnteries.setAttribute('style', 
    'content: " "; display: block; border: 3px solid #13293d; clear: both; background-color:cornsilk;');
    submittedTitle.setAttribute('style', 'display: block; border-bottom: 1px solid #13293d;');
    submittedContent.setAttribute('style','display: block;');
    byBoilerPlate.setAttribute('style', 'display: inline-block; font-style: italic;');
    submittedUser.setAttribute('style', 'display: inline-block; font-style: italic;');
    }
}

/* the init() needs to be called in blog.js or blog.html as it will not be called upon page loading on its own */
/* it can als be called upon an event inside the event handler */
init();

/*
submitButton.addEventListener('click', function (event) {
    event.preventDefault();
  
    // create user object from submission
    const userBlog = {
      storedUserName: userNameInput.value.trim(),
      storedTitle: titleInput.value.trim(),
      storedContent: contentInput.value.trim(),
    };
  
    // set new submission to local storage
    localStorage.setItem('user', JSON.stringify(userBlog));
  }); */

const backButton = document.querySelector('#back-button');
const clearButton = document.querySelector('#clear-button');

backButton.addEventListener('click', function (event) {
  event.preventDefault();

  // Jump to the submitted blogs summary page
  window.location.href = "./index.html"
});

clearButton.addEventListener('click', function (event) {
    event.preventDefault();
  
    // clear the localStorage
    localStorage.clear();
    posts.textContent = "";

  });