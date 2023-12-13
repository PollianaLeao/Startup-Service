const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();


// Third-party middleware - Cookies
app.use(cookieParser());

// POST route to set a cookie
app.post('/cookie/:name/:value', (req, res, next) => {
  res.cookie(req.params.name, req.params.value);
  res.send({ cookie: `${req.params.name}:${req.params.value}` });
});
app.post('/login', (req, res) => {
  const { username, password } = req.body;
  // Replace the below with your authentication logic
  if (username === 'validUser' && password === 'validPassword') {
      // Authentication successful
      res.status(200).json({ message: "Login Successful" });
  } else {
      // Authentication failed
      res.status(401).json({ message: "Login Failed" });
  }
});

// Logging middleware
app.use((req, res, next) => {
  console.log(req.originalUrl);
  next();
});

app.post('/submit-recipe', (req, res) => {
  // Add logic to process the recipe submission
  // This could involve parsing form data, saving to a database, etc.
  console.log(req.body); // Log the recipe data for now

  // Respond with success
  res.status(201).json({ message: "Recipe submitted successfully" });
});

// Static file serving middleware (serves files from the 'public' directory)
app.use(express.static('public'));

// GET route for store with a parameter
app.get('/store/:storeName', (req, res) => {
  res.send({ name: req.params.storeName });
});

// PUT route with a wildcard parameter
app.put('/st*/:storeName', (req, res) => {
  res.send({ update: req.params.storeName });
});

// DELETE route with a regular expression parameter
app.delete(/\/store\/(.+)/, (req, res) => {
  res.send({ delete: req.params[0] });
});

// Error handling middleware
app.get('/error', (req, res, next) => {
  throw new Error('Trouble in river city');
});

app.use((err, req, res, next) => {
  res.status(500).send({ type: err.name, message: err.message });
});

// Start the server and listen on port 
const port = 4000;
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
