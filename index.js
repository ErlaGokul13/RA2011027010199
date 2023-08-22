// index.js
const express = require('express');
const trainsRoutes = require('./app/routes/trainsRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

// Use the trains routes
app.use('/', trainsRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
