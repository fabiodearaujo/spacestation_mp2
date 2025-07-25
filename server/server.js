require('dotenv').config();
const express = require('express');
const cors = require('cors');
const fetch = require('node-fetch');

const app = express();
const port = process.env.PORT || 3000;

// Enable CORS for your frontend domain
app.use(cors({
    origin: ['https://fabiodearaujo.github.io', 'http://localhost:5500'],
    methods: ['GET', 'OPTIONS'],
    credentials: true
}));

// NASA APOD endpoint
app.get('/api/apod', async (req, res) => {
    try {
        const nasaUrl = `https://api.nasa.gov/planetary/apod?api_key=${process.env.NASA_API_KEY}`;
        const response = await fetch(nasaUrl);
        const data = await response.json();
        res.json(data);
    } catch (error) {
        console.error('Error fetching NASA APOD:', error);
        res.status(500).json({ error: 'Failed to fetch NASA APOD' });
    }
});

// Handle preflight requests
app.options('*', cors());

// Health check endpoint
app.get('/api/health', (req, res) => {
    res.status(200).json({ status: 'OK' });
});

// For Vercel, we need to export the app
if (process.env.NODE_ENV !== 'production') {
    app.listen(port, () => {
        console.log(`Server running on port ${port}`);
    });
}

module.exports = app;
