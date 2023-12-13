document.addEventListener('DOMContentLoaded', (event) => {
    const loginForm = document.getElementById("login-form");
    const usernameDisplay = document.getElementById("username-display");
    const loginErrorMessage = document.getElementById("login-error-message");

    const authenticatedUser = localStorage.getItem("authenticatedUser");
    if (authenticatedUser) {
        usernameDisplay.textContent = `Welcome, ${authenticatedUser}`;
    }

    if (loginForm) {
        loginForm.addEventListener("submit", (event) => {
            event.preventDefault();
            const loginUsername = document.getElementById("login-username").value;
            const loginPassword = document.getElementById("login-password").value;

            if (loginUsername && loginPassword) {
                // Move fetch call inside this block
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
                    localStorage.setItem("authenticatedUser", loginUsername);
                    usernameDisplay.textContent = `Welcome, ${loginUsername}`;
                })
                .catch((error) => {
                    console.error(error);
                    loginErrorMessage.textContent = "Authentication failed. Please check your username and password.";
                });
            } else {
                loginErrorMessage.textContent = "Please enter both username and password.";
            }
        });
    }

    const recipeForm = document.getElementById("recipe-form");
    if (recipeForm) {
        recipeForm.addEventListener("submit", (event) => {
            event.preventDefault();

            const recipeName = document.getElementById("recipe-name").value;
            const recipeDescription = document.getElementById("recipe-description").value;
            const recipeInstructions = document.getElementById("recipe-instructions").value;

            // Assuming formData should include these values
            const formData = new FormData();
            formData.append("name", recipeName);
            formData.append("description", recipeDescription);
            formData.append("instructions", recipeInstructions);

            fetch("/submit-recipe", {
                method: "POST",
                body: formData,
            })
            .then((response) => {
                if (response.status === 201) {
                    alert("Recipe submitted successfully!");
                    recipeForm.reset();
                } else {
                    throw new Error("Recipe submission failed");
                }
            })
            .catch((error) => {
                console.error("Error submitting recipe:", error);
                alert("Recipe submission failed. Please try again.");
            });
        });
    }
});
function fetchRandomRecipe() {
    fetch('https://startup.pollybypolly.click/mainPage.html') // Replace with the actual API URL
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(recipe => {
            // Process and display the recipe
            displayRecipe(recipe);
        })
        .catch(error => {
            console.error('Error fetching recipe:', error);
            // Optionally update the UI to indicate that the fetch failed
        });
}

function displayRecipe(recipe) {
    // Assuming you have HTML elements to display recipe data
    const recipeTitleElement = document.getElementById('recipe-title');
    const recipeContentElement = document.getElementById('recipe-content');

    recipeTitleElement.textContent = recipe.title; // Example: Update title
    recipeContentElement.textContent = recipe.description; };