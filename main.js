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

    if (loginUsername && loginPassword) { // Just checking if they are not empty
        localStorage.setItem("authenticatedUser", loginUsername);
        usernameDisplay.textContent = `Welcome, ${loginUsername}`;
    } else {
        loginErrorMessage.textContent = "Please enter both username and password.";
    }
});

// Recipe submission logic
const recipeForm = document.getElementById("recipe-form");

recipeForm.addEventListener("submit", (event) => {
    event.preventDefault(); // Prevent the form from submitting

    const recipeName = document.getElementById("recipe-name").value;
    const recipeDescription = document.getElementById("recipe-description").value;
    const recipeInstructions = document.getElementById("recipe-instructions").value;

    // Ignore the image upload for local storage
    // const recipeImage = document.getElementById("recipe-image").files[0];

    const recipe = {
        name: recipeName,
        description: recipeDescription,
        instructions: recipeInstructions,
        // image: recipeImage ? URL.createObjectURL(recipeImage) : '' // Optional: Handle image as URL
    };

    const recipes = JSON.parse(localStorage.getItem("recipes")) || [];
    recipes.push(recipe);
    localStorage.setItem("recipes", JSON.stringify(recipes));

    alert("Recipe submitted successfully!");
    recipeForm.reset();
});
