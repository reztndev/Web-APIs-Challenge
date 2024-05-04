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

      
      // Assign a class to the submited blog enteries so that we can control its 
      // styling with the theme buttons is pressed
      submittedBlogEnteries.setAttribute("class", "submitted-blog-class");
      
      // Style the remaining blog enteries using inline attributes
      submittedTitle.setAttribute('style', 'display: block; border-bottom: 1px solid #13293d;');
      submittedContent.setAttribute('style','display: block;');
      byBoilerPlate.setAttribute('style', 'display: inline-block; font-style: italic;');
      submittedUser.setAttribute('style', 'display: inline-block; padding: 5px; font-style: italic;');
    }
}

// Invoke the retrieval of user enteries from local storage
// and the dynamic construction of the submitted user blog enteries
init();