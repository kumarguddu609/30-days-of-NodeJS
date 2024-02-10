const express = require('express');
const path = require('path');

const app = express();

// Set the public directory for serving static files
app.use(express.static(path.join(__dirname, 'public')));

// Route for accessing the root ("/")
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Define the port
const PORT = process.env.PORT || 3000;

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
