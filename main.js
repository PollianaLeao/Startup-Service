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
                localStorage.setItem("authenticatedUser", loginUsername);
                usernameDisplay.textContent = `Welcome, ${loginUsername}`;
            } else {
                loginErrorMessage.textContent = "Please enter both username and password.";
            }
        });
    }

    const recipeForm = document.getElementById("recipe-form");

    recipeForm.addEventListener("submit", (event) => {
        event.preventDefault();

        const recipeName = document.getElementById("recipe-name").value;
        const recipeDescription = document.getElementById("recipe-description").value;
        const recipeInstructions = document.getElementById("recipe-instructions").value;

        const recipe = {
            name: recipeName,
            description: recipeDescription,
            instructions: recipeInstructions,
        };

        const recipes = JSON.parse(localStorage.getItem("recipes")) || [];
        recipes.push(recipe);
        localStorage.setItem("recipes", JSON.stringify(recipes));

        alert("Recipe submitted successfully!");
        recipeForm.reset();
    });
});
