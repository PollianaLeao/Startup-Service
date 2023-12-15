document.addEventListener('DOMContentLoaded', (event) => {
    const loginForm = document.getElementById("login-form");
    const usernameDisplay = document.getElementById("username-display");
    const loginErrorMessage = document.getElementById("login-error-message");
    const contentContainer = document.getElementById("content-container");

    //'your-api-endpoint' with the actual endpoint on your server
    const apiUrl = 'https://startup.pollybypolly.click';
    
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            // Data received from the server
            // Assuming the data is an array of content objects with 'category' property
    
            const categories = {};

    // Check if the user is already authenticated
    const authenticatedUser = localStorage.getItem("authenticatedUser");
    if (authenticatedUser) {
        usernameDisplay.textContent = `Welcome, ${authenticatedUser}`;
    }})

    // Event listener for login form submission
    if (loginForm) {
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
                localStorage.setItem("authenticatedUser", loginUsername);
                usernameDisplay.textContent = `Welcome, ${loginUsername}`;
            })
            .catch((error) => {
                console.error(error);
                loginErrorMessage.textContent = "Authentication failed. Please check your username and password.";
            });
        });
    }

    // Fetch random recipe data from a third-party API
    fetchRandomRecipe();

    // Event listener for recipe submission
    const recipeForm = document.getElementById("recipe-form");
    if (recipeForm) {
        recipeForm.addEventListener("submit", handleRecipeSubmission);
    }
});

function fetchRandomRecipe() {
    fetch('http://54.204.224.87/api/endpoint') // Replace with actual API URL
        .then(response => response.json())
        .then(data => {
            // Process the data
            console.log(data); // Log the data or update the DOM as needed
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
}

function handleRecipeSubmission(event) {
    event.preventDefault();

    const formData = new FormData(event.target); // Assuming the form has an enctype of "multipart/form-data"

    fetch("/submit-recipe", {
        method: "POST",
        body: formData,
    })
    .then((response) => {
        if (response.status === 201) {
            alert("Recipe submitted successfully!");
            event.target.reset();
        } else {
            throw new Error("Recipe submission failed");
        }
    })
    .catch((error) => {
        console.error("Error submitting recipe:", error);
        alert("Recipe submission failed. Please try again.");
    });

}

const socket = new WebSocket('ws://l54.204.224.87');

socket.addEventListener('open', function (event) {
  console.log('Connected to WS Server');
});

socket.addEventListener('message', function (event) {
  console.log('Message from server ', event.data);
  // Update your frontend based on the received message
});

function sendMessage(message) {
    if (socket.readyState === WebSocket.OPEN) {
      socket.send(message);
    } else {
      console.log('WebSocket is not open.');
    }
  }
  