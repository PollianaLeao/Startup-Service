const loginForm = document.getElementById('login-form');
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password'); 
const message = document.getElementById('message');

loginForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const username = usernameInput.value;
    
    // Assuming you want to do some basic validation or use of the password in the future
    const password = passwordInput.value; 
    if (username && password) {
        localStorage.setItem('username', username);
        // Redirect to another page, like a dashboard. Change 'dashboard.html' to your desired page.
        window.location.href = 'mainPage.html'; 
    } else {
        // Display an error message if the username or password is empty
        message.textContent = 'Please enter both username and password.';
    }
});


