const contentContainer = document.getElementById("content-container");

//'your-api-endpoint' with the actual endpoint on your server
const apiUrl = 'https://pollybypolly.click';

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

                // You can create more elements to display additional content details

                contentItemDiv.appendChild(titleElement);
                contentItemDiv.appendChild(descriptionElement);

                contentContainer.appendChild(contentItemDiv);
            });
        }
    })
    .catch(error => {
        console.error('Error fetching content:', error);
    });
