// server.js (backend)

const express = require('express');
const mongoose = require('mongoose');
const app = express();

// MongoDB connection and other setup code...

// Define a Mongoose schema for beer data
const beerSchema = new mongoose.Schema({
  beerAmount: Number,
  timePeriod: String,
});

const Beer = mongoose.model('Beer', beerSchema);

// POST endpoint for saving beer data to the database
app.post('/api/beer', async (req, res) => {
  try {
    const { beerAmount, timePeriod } = req.body;
    // Save the data to the MongoDB collection
    await Beer.create({ beerAmount, timePeriod });
    res.status(201).json({ message: 'Data saved successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Error saving data' });
  }
});

// Other routes and server setup...

// Start the server
app.listen(5000, () => {
  console.log('Server is running on port 5000');
});
