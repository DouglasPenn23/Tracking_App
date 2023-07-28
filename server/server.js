// server/server.js
const express = require('express');
const app = express();

// Sample data structure for tracking entries
const trackingData = [
  {
    id: 1,
    item: 'Beer',
    quantity: 24,
    date: '2023-07-27',
    unit: 'cans',
  },
  // Add more tracking entries...
];

// Start the server
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

// server/server.js
// ...

// API route to add a new tracking entry
app.post('/api/tracking', (req, res) => {
    // Get the data for the new tracking entry from the request body
    const newEntry = req.body;
  
    // Assign a unique ID to the new entry (You can use a library like 'uuid' for this)
    newEntry.id = generateUniqueId();
  
    // Push the new entry to the trackingData array
    trackingData.push(newEntry);
  
    // Send a response indicating success
    res.json({ success: true, message: 'Tracking entry added successfully!' });
  });
  