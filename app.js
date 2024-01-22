// Main JS file

const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

// Serve static files from the 'public' folder under the '/static' URL prefix
app.use('/static', express.static(path.join(__dirname, 'src', 'public')));

// Define a route for the root path
app.get('/', (req, res) => {
  res.send('Hello, this is the root path!');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
