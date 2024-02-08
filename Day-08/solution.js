const express  = require('express');
const app = express();
const port = 3000;

/**
 * Express route to handle requests with a positive integer parameter
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 */
function positiveIntegerHandler(req, res) {
  const number = parseInt(req.query.number);

  if (Number.isInteger(number) && number > 0) {
    res.status(200).json(
      { message: "Success! The number is a positive integer." }
      );
  } else {
    next(new Error("The 'number' parameter must be a positive integer."));
  }

}

app.use(express.json());
/**
 * Express error handling middleware for handling specific errors
 * @param {Object} err - Error object
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 * @param {Function} next - Express next function
 */

function errorHandler(err, req, res, next) {
  if (err.message === "The 'number' parameter must be a positive integer.") {
    res.status(400).json({ error: err.message });
  } else {
    next(err);
  }
}

// Define routes
app.get('/positive', positiveIntegerHandler);

// Error handling middleware
app.use(errorHandler);

// Start the server
app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});