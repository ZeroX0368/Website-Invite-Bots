
const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 5000;

// Serve static files (CSS, JS, images)
app.use(express.static('.'));

// Route for main page
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, '0.0.0.0', () => {
    console.log(`GhostX Music Bot server running on port ${PORT}`);
    console.log(`Visit: http://localhost:${PORT}`);
});
