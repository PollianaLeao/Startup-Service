// Handle user authentication (login) and store user info in localStorage
const loginForm = document.getElementById("login-form");
const usernameDisplay = document.getElementById("username-display");
const loginErrorMessage = document.getElementById("login-error-message");

// Check if the user is already authenticated (stored in localStorage)
const authenticatedUser = localStorage.getItem("authenticatedUser");

if (authenticatedUser) {
    // If the user is authenticated, display their name
    usernameDisplay.textContent = `Welcome, ${authenticatedUser}`;
}

loginForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const loginUsername = document.getElementById("login-username").value;
    const loginPassword = document.getElementById("login-password").value;

    // Send a POST request to your server for authentication
    fetch('/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username: loginUsername, password: loginPassword }),
    })
    .then((response) => {
        if (response.status === 200) {
            return response.json();
        } else {
            throw new Error("Authentication failed");
        }
    })
    .then((data) => {
        // Authentication successful
        const token = data.token;
        // Store the authenticated user's name in localStorage
        localStorage.setItem("authenticatedUser", loginUsername);
        // Display the user's name
        usernameDisplay.textContent = `Welcome, ${loginUsername}`;
    })
    .catch((error) => {
        // Handle authentication error
        console.error(error);
        loginErrorMessage.textContent = "Authentication failed. Please check your username and password.";
    });
});
// Extract the username from the JWT token
const token = jwt.sign({ username: user.username }, 'your-secret-key');
const decoded = jwt.verify(token, 'your-secret-key');
const username = decoded.username;

// Display the username in the DOM
document.getElementById('user-greeting').textContent = `Welcome, ${username}!`;
