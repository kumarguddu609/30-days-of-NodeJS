const express = require('express');
const app = express();

/**
 * Handles GET requests to "/greet" endpoint
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 */
async function greetHandler(req, res) {
  try {
    const name = req.query.name || 'Guest';
    const greeting = `Hello, ${name}!`;
    res.status(200).send(greeting);
  } catch (error) {
    console.error('Error in greetHandler:', error);
    res.status(500).send('Internal Server Error');
  }
}



// Register greetHandler function with the /greet route
app.get('/greet', greetHandler);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
