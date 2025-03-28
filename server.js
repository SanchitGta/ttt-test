const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 3000;

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// POST endpoint to save username
app.post('/api/usernames', (req, res) => {
    const { username } = req.body;

    if (!username) {
        return res.status(400).json({ message: 'Username is required.' });
    }

    // Simulate saving the username to local storage (for demonstration purposes)
    // In a real application, you would save this to a database or file
    console.log(`Username saved: ${username}`);

    return res.json({ message: 'Username saved successfully.' });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
