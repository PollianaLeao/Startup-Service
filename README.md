# Startup
This link will take you to [my notes](https://github.com/PollianaLeao/Startup/blob/main/notes.md)

# Startup Specification

# Polly By Polly: Your Gluten-Free Kitchen 🍋

## Elevator pitch: 🚀

Hello, gluten-free world! Welcome to Polly by Polly, a one-stop destination for everything g-free. We have you covered whether you are a seasoned gluten-free expert or are just beginning your gluten-free adventure. Prepare to discover must-have gluten-free items, browse delicious recipes, and connect with a community of like-minded gluten-free fans. Come along with us on a fun and healthy journey!

## Key features: 🔑

- **Login:** Segure login over HTTPS.

- **Category Picker:** Allow users to choose from different topics or categories related to gluten-free living. These could include "Gluten-Free Recipes" and "Gluten-Free Products".

- **Favorits:** Allow users to favorite or bookmark their top gluten-free content items for easy access. Provide an interface for users to add or remove from their favorites. Add a favorite bookmark for acessing their saves.

- **Rate Your Plate:** Create a review start for each recipe.

- **What is popular:** Show the number of favorites the content has or comments on recipes, updating dynamically.

- **WebSockets:** Provide real-time updates for new content, comments. For instance, notify users of new recipes or comments as they are posted.

- **Share your secret:** Ability to upload recipes.


## Technologies 💻:

I am going to use the required technologies in the following ways.

### HTML:

- Create HTML pages, including a login page and a page for accessing gluten-free content. 
Include hyperlinks to navigate between the login page and the content page.
Organize content using HTML elements like headings, lists, and paragraphs.


### CSS:

- Have a visually appealing and responsive design, as well as to maintain consistency.
Focus on whitespace, color choices, and contrast for readability.
Design the login page, content page, and recipe posting page.


### JavaScript:


- **Login:** Develop a secure login system to authenticate users, storing their credentials securely in the database.
Choice Display: Create JavaScript code to fetch and display gluten-free content from the database, categorized by topics or categories.

- **Favorites:** Allow users to add and remove gluten-free content items from their favorites list. Update the user's favorites in real-time.

- **Review Stars:** Implement review stars for each content item, enabling users to rate the content by assigning a certain number of stars.

- **Recipe Posting:** Add JavaScript logic to allow users to submit gluten-free recipes, which are then stored in the database.


### Service (Backend): 

- Create a backend service using technologies like Node.js and Express.js 
- **Set up endpoints for the following functionalities:**
   - User registration and login to securely store user credentials in the database.
   - Managing users' favorite content items and updating the database accordingly.
   - Real-time updates through WebSocket for changes in favorites, content ratings, and new recipe submissions.
   - Handling recipe submissions, including validation and storage in the database.


### Database (DB):

- Utilize a database system like MongoDB to store user data, gluten-free content (recipes, articles, product recommendations), user preferences, and user-submitted recipes.


### WebSocket:

- Set up WebSocket communication to enable real-time updates for changes in user favorites, content ratings, and new recipe submissions.


### REACT (front-end framework):

- Create React components for different sections, such as login, content display, user profiles, recipe posting, and the gluten-free guide.

- Utilize React Router for navigation between these components.

- Implement hooks and state management to handle user interactions, favorites, content ratings, and recipe posting effectively.



## Design: 🎨