const express = require('express');
const path = require('path');
// const connectDB = require('./config/db');

const app = express();

// Connect Database
// connectDB();


// Middleware
app.use(express.json());

// cors
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

// Routes
app.use('/api', require('./routes/api'))
// app.use('/auth', require('./routes/auth'))

//  Serve static assets in production
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

const PORT = process.env.PORT || 8020;


app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
