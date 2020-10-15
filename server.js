const express = require('express');
const path = require('path');
const axios = require('axios')

const app = express();

app.use(express.json());

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Orgin, X-Requested-With, Content-Type, Accept, Authorization'
  );
  if (req.method === 'OPTIONS') {
    res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
    return res.status(200).json({});
  }
  next();
});

app.get('/api/test', async (req, res) => {
  const response = await axios('https://newsapi.org/v2/top-headlines?country=us&pageSize=3&apiKey=e5da89b57ee347a1a1da306427dc5fa7')

  res.send({articles: response.data.articles})
})

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

const PORT = process.env.PORT || 8020;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
