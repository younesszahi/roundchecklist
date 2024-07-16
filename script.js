document.getElementById('loginForm').addEventListener('submit', function(event) {
  event.preventDefault();

  // Get input values
  var username = document.getElementById('username').value.trim();
  var password = document.getElementById('password').value.trim();

  // Check if username and password match "zahi"
  if (username === 'zahi' && password === 'zahi') {
      // Redirect to the Amazon-themed form page
      window.location.href = 'amazon_form.html';
  } else {
      // Display error message or handle invalid credentials
      alert('Invalid username or password. Please try again.');
  }
});
