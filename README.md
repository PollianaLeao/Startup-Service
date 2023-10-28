# Startup
This link will take you to [my notes](https://github.com/PollianaLeao/Startup/blob/main/notes.md)

# Startup Specification

# Polly By Polly: Your Gluten-Free Kitchen 🍋

## Elevator pitch: 🚀

Hello, gluten-free world! Welcome to Polly by Polly, a one-stop destination for everything g-free. We have you covered whether you are a seasoned gluten-free expert or are just beginning your gluten-free adventure. Prepare to discover must-have gluten-free items, browse delicious recipes, and connect with a community of like-minded gluten-free fans. Come along with us on a fun and healthy journey!

## Key features: 🔑

- **Login:** Segure login over HTTPS.

- **Category Picker:** Allow users to choose from different topics or categories related to gluten-free living. These could include "Gluten-Free Recipes".

- **Favorites:** Allow users to favorite or bookmark their top gluten-free content items for easy access. Provide an interface for users to add or remove from their favorites. Add a favorite bookmark for acessing their saves.

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
```
I have created HTML pages. I have an "index.html" page for the login, which includes a placeholder form with fields for username and password, an "signup.html" page for signing up and an "mainPage.html" page for accessing the gluten-free content and others.

I have included hyperlinks to navigate between the login page and the content page. In the "index.html" footer, there is a "Sign up here" link, and in the "mainPage.html" navigation bar, there is a "Logout" link. 

I have organized content on both pages using HTML elements like headings (<h1>, <h2>), lists (<ul>, <li>), and paragraphs (<p>).

I have included placeholder image elements in the code, but I will need to replace the placeholder image sources (src attributes) with actual image URLs when I have them. 

```




### CSS:

- Have a visually appealing and responsive design, as well as to maintain consistency.
Focus on whitespace, color choices, and contrast for readability.
Design the login page, content page, and recipe posting page.
```
I have tried to make it visually appeling and keep consistency. I design the login page and the sign up page as well as the content page. Did not create a seperate page for recipes, but left in the main content page as an example.

Break down of the code:
Reset Default Styles: It removes margins, padding, and borders.

Body Styles: Sets the background color, font, line height, and margin for the entire page.

Header Styles: It includes background color, text color, alignment, padding, and margin.

Main Content Styles: It includes maximum width, background color, padding, box shadow, and border radius.

Navigation Styles: It includes background color, padding, and styles for the navigation links.

Button Styles: It includes background color, text color, padding, border radius, and hover effects.

Form Styles: It includes grid layout and label styles.

Input and Textarea Styles: It input fields and text areas, setting width, padding, border, and margin.

Footer Styles: It includes text alignment, margin, padding, background color, and border.

Link Styles: Adds hyperlinks and their hover states.

Favorites Section Styles: It includes background color, border, border radius, padding, and margin.

Remove Favorite Button Styles: A class of "remove-favorite."

Popular Content Styles: It includes background color, border, border radius, padding, and margin.

Real-Time Updates Styles: It includes background color, border, border radius, padding, and margin.

Recipe Image Styles: It sets maximum width, height, border, border radius, and hover effects.

Media Queries: Adjusts some styles for smaller and larger screens using media queries. For smaller screens, it adjusts the font size in the header and makes the main content area full width. For larger screens, it sets a maximum width for the main content area
```


### JavaScript:


- **Login:** Develop a secure login system to authenticate users, storing their credentials securely in the database.

- **Choice Display:** Create JavaScript code to fetch and display gluten-free content from the database, categorized by topics or categories.

- **Favorites:** Allow users to add and remove gluten-free content items from their favorites list. Update the user's favorites in real-time.

- **Review Stars:** Implement review stars for each content item, enabling users to rate the content by assigning a certain number of stars.

- **Recipe Posting:** Add JavaScript logic to allow users to submit gluten-free recipes, which are then stored in the database.

```
I have included user registration, login, content fetching, and interaction logic. 
Includes user authentication with JWT tokens, which is relevant for login functionality. However, there are some improvements with token handling that need to be addressed still. 
I have attempt to use localStorage to simulate database data storage for user favorites.
Includes WebSocket-related code. 
Includes implement review stars for content items. 
Include a feature for users to submit gluten-free recipes. 

```
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

![Untitled_Artwork 2](https://github.com/PollianaLeao/Startup/assets/144174845/6ddb9dc7-c11f-4d0b-950d-cd024c5ca68f)
![Untitled_Artwork](https://github.com/PollianaLeao/Startup/assets/144174845/17fe75c8-adf9-46b2-8918-40b8b13b6bf2)