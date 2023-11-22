const loginForm = document.getElementById('login-form');
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');
const message = document.getElementById('message');

loginForm.addEventListener('submit', async (event) => {
    event.preventDefault();
    const username = usernameInput.value;
    const password = passwordInput.value;

    try {
        const response = await fetch('/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, password }),
        });

        const data = await response.json();

        if (response.status === 200) {
            // Authentication successful, store the token (data.token) and redirect to the user's dashboard.
            localStorage.setItem('token', data.token);
            window.location.href = '/dashboard.html'; // Replace with your dashboard URL.
        } else {
            message.textContent = 'Login failed. Please check your credentials.';
        }
    } catch (error) {
        console.error('Error:', error);
    }
});