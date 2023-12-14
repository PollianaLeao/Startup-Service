const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const app = express();
const port = 4000;

// Replace 'your-database-url' with your actual MongoDB database URL.
mongoose.connect('mongodb+srv://polliana332:<password>@cluster0.xtm2ujw.mongodb.net/', { useNewUrlParser: true, useUnifiedTopology: true });

const User = mongoose.model('User', {
    username: String,
    password: String,
});

app.use(express.json());

// Register a new user
app.post('/register', async (req, res) => {
    try {
        const { username, password } = req.body;
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = new User({ username, password: hashedPassword });
        await user.save();
        res.status(201).send('User registered successfully');
    } catch (error) {
        res.status(500).send('Registration failed');
    }
});

// User login
app.post('/login', async (req, res) => {
    const { username, password } = req.body;
    const user = await User.findOne({ username });

    if (!user) {
        return res.status(404).send('User not found');
    }

    if (await bcrypt.compare(password, user.password)) {
        // Generate a JWT token to send back to the client for authentication
        const token = jwt.sign({ username: user.username }, 'your-secret-key'); // Replace 'your-secret-key' with a secure key
        return res.status(200).json({ token });
    } else {
        return res.status(401).send('Authentication failed');

    }
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});