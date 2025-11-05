// server.js
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
app.use(bodyParser.json());

// Eenvoudige in-memory opslag van locaties (gebruik DB in productie)
const locations = [];

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

// Endpoint waar clients hun locatie naartoe posten
app.post('/report-location', (req, res) => {
  const { latitude, longitude, label } = req.body;
  if (typeof latitude !== 'number' || typeof longitude !== 'number') {
    return res.status(400).json({ error: 'Invalid coordinates' });
  }
  const entry = {
    id: locations.length + 1,
    latitude,
    longitude,
    label: label || null,
    timestamp: new Date().toISOString()
  };
  locations.push(entry);
  res.json({ ok: true, entry });
});

// Endpoint die alle locaties teruggeeft (dashboard haalt dit op)
app.get('/locations', (req, res) => {
  res.json(locations);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});
