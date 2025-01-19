const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

// Serve static files from the "Build", "StreamingAssets", and "TemplateData" directories
app.use(express.static(path.join(__dirname, 'Build')));
app.use(express.static(path.join(__dirname, 'StreamingAssets')));
app.use(express.static(path.join(__dirname, 'TemplateData')));

// Serve index.html on root
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});