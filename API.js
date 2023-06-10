// Server-side script (e.g., server.js) using Express.js

const express = require('express');
const axios = require('axios');

const app = express();
const PORT = 3001; // or any other available port

app.use(express.json());

app.post('/shorten', async (req, res) => {
  try {
    const response = await axios.post('https://cleanuri.com/api/v1/shorten', {
      url: req.body.url,
    });

    res.send(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).send('Error occurred while shortening URL');
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
