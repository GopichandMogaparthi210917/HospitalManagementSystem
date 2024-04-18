// Function to handle registration form submission
function register(event) {
    event.preventDefault(); // Prevent default form submission behavior
  
    // Get input values
    const firstName = document.getElementById('first_Name').value;
    const lastName = document.getElementById('last_Name').value;
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
  
    // Create new User object
    const newUser = {
      firstName: firstName,
      lastName: lastName,
      username: username,
      email: email,
      password: password
    };
  
    // Print the created User object
    console.log('New User (Registration):', newUser);
  }
  
  // Add event listener to registration form
  document.getElementById('register-form').addEventListener('submit', register);  