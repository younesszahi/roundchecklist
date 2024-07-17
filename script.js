document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === 'cdg' && password === 'cdg') {
        window.location.href = 'form.html'; // Redirect to the form page
    } else {
        alert('Incorrect username or password. Please try again.');
    }
});
