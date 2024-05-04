const userNameInput = document.querySelector('#user-name');
const titleInput = document.querySelector('#title');
const contentInput = document.querySelector('#content');
const submitButton = document.querySelector('#submit-button');


submitButton.addEventListener('click', function (event) {
  event.preventDefault();
  const blogArray = JSON.parse(localStorage.getItem("userBlog")) || [];

  // create user blog object from submission
  const userBlog = {
    storedUserName: userNameInput.value.trim(),
    storedTitle: titleInput.value.trim(),
    storedContent: contentInput.value.trim(),
  };

  // If any of the user bolog inputs are null, display alert and abort
  if( !userBlog.storedUserName || !userBlog.storedTitle || !userBlog.storedContent ) {
    alert("All input fields must be filled in before submission.  Try again.");

    return;
  }

  blogArray.push(userBlog);
  
  // Commit the new submission to local storage
  localStorage.setItem('userBlog', JSON.stringify(blogArray));

  // Jump to the submitted blogs summary page
  window.location.href = "./blog.html"
});