const contentContainer = document.getElementById("content-container");

//'your-api-endpoint' with the actual endpoint on your server
const apiUrl = 'https://startup.pollybypolly.click';

fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
        // Data received from the server
        // Assuming the data is an array of content objects with 'category' property

        const categories = {};

        // Group content by category
        data.forEach(contentItem => {
            if (!categories[contentItem.category]) {
                categories[contentItem.category] = [];
            }
            categories[contentItem.category].push(contentItem);
        });

        // Loop through categories and display content
        for (const category in categories) {
            const categoryHeading = document.createElement("h2");
            categoryHeading.textContent = category;
            contentContainer.appendChild(categoryHeading);

            categories[category].forEach(contentItem => {
                const contentItemDiv = document.createElement("div");
                contentItemDiv.className = "content-item";

                const titleElement = document.createElement("h3");
                titleElement.textContent = contentItem.title;

                const descriptionElement = document.createElement("p");
                descriptionElement.textContent = contentItem.description;

                // create more elements to display additional content details

                contentItemDiv.appendChild(titleElement);
                contentItemDiv.appendChild(descriptionElement);

                contentContainer.appendChild(contentItemDiv);
            });
        }
    })
    .catch(error => {
        console.error('Error fetching content:', error);
    });
    
    const content = document.getElementById("content-container");

    database.content.forEach(contentItem => {
        // Create DOM elements for contentItem and append to contentContainer
    });
    // To save user favorites
    const favorite = ['Recipe1', 'Recipe2'];
    localStorage.setItem('userFavorites', JSON.stringify(favorites));

    // To retrieve user favorites
    const favorites = JSON.parse(localStorage.getItem('userFavorites'));

// Add a click event listener to the stars
const stars = document.querySelectorAll('.star');
stars.forEach(star => {
    star.addEventListener('click', handleRating);
});

function handleRating(event) {
    const selectedRating = parseInt(event.target.getAttribute('data-rating'));
    
    // Send the rating to the server// Add a click event listener to the stars
const stars = document.querySelectorAll('.star');
stars.forEach(star => {
    star.addEventListener('click', handleRating);
});

function handleRating(event) {
    const selectedRating = parseInt(event.target.getAttribute('data-rating'));
    
    // Send the rating to the server (implement this)
    // use fetch or XMLHttpRequest to post the rating data to your server

    // simulate updating the rating on the client side
    updateRating(selectedRating);
}

function updateRating(selectedRating) {
    const averageRatingSpan = document.querySelector('.average-rating');
    const currentRating = parseFloat(averageRatingSpan.textContent);

    // Update the average rating (calculate the actual average)
    const newAverageRating = ((currentRating + selectedRating) / 2).toFixed(1);

    averageRatingSpan.textContent = newAverageRating;
    // use fetch or XMLHttpRequest to post the rating data to your server

    // For now, simulate updating the rating on the client side
    updateRating(selectedRating);
}

function updateRating(selectedRating) {
    const averageRatingSpan = document.querySelector('.average-rating');
    const currentRating = parseFloat(averageRatingSpan.textContent);

    // Update the average rating (calculate the actual average)
    const newAverageRating = ((currentRating + selectedRating) / 2).toFixed(1);

    averageRatingSpan.textContent = newAverageRating;
}}