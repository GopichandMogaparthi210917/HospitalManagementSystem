// Function to handle login form submission
function login(event) {
    event.preventDefault(); // Prevent default form submission behavior
  
    // Get input values
    const usernameOrEmail = document.getElementById('usernameOrEmail').value;
    const password = document.getElementById('password').value;
  
    // Create new Login object
    const loginInfo = {
      usernameOrEmail: usernameOrEmail,
      password: password
    };
  
    // Print the created Login object
    console.log('Login Info:', loginInfo);
  }
  
  // Add event listener to login form
  document.getElementById('login-form').addEventListener('submit', login);  