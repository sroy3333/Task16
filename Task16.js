function handleFormSubmit(event) {
    event.preventDefault();
  
    // Get form values
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
  
    // Create user object
    const user = {
      username,
      email,
      phone
    };
  
    // Add user to the list
    addUserToList(user);
  
    // Clear form fields
    document.getElementById('username').value = '';
    document.getElementById('email').value = '';
    document.getElementById('phone').value = '';
}
  
  // Function to add user to the list
  function addUserToList(user) {
    // Create li element
    const li = document.createElement('li');
  
    // Create text node with user details
    const textNode = document.createTextNode(
      `Username: ${user.username}, Email: ${user.email}, Phone: ${user.phone}`
    );
  
    // Create delete button
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.onclick = function () {
      // Remove li element from the screen and local storage
      li.remove();
      removeUserFromLocalStorage(user);
    };
  
    // Create edit button
    const editButton = document.createElement('button');
    editButton.textContent = 'Edit';
    editButton.onclick = function () {
      // Populate form fields with existing values
      document.getElementById('username').value = user.username;
      document.getElementById('email').value = user.email;
      document.getElementById('phone').value = user.phone;
  
      // Remove user details from the screen and local storage
      li.remove();
      removeUserFromLocalStorage(user);
    };
  
    // Append text node, delete button, and edit button to li
    li.appendChild(textNode);
    li.appendChild(deleteButton);
    li.appendChild(editButton);
  
    // Append li to the user list
    document.getElementById('userList').appendChild(li);
  
    // Save user to local storage
    saveUserToLocalStorage(user);
}
  
  // Function to save user to local storage
  function saveUserToLocalStorage(user) {
    let users = JSON.parse(localStorage.getItem('users')) || [];
    users.push(user);
    localStorage.setItem('users', JSON.stringify(users));
}
  
  // Function to remove user from local storage
  function removeUserFromLocalStorage(user) {
    let users = JSON.parse(localStorage.getItem('users')) || [];
    users = users.filter(u => u.email !== user.email);
    localStorage.setItem('users', JSON.stringify(users));
}