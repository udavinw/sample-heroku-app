const express = require('express');
const app = express();
const PORT = process.env.PORT || 3006;

app.get('/', (req, res) => {
  const env = process.env.NODE_ENV || 'development';
  const apiKey = process.env.API_KEY || 'not-set';
  res.send(`Hello from your sample Heroku app! Running in ${env} mode. API Key: ${apiKey}`);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});