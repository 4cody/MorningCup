const express = require('express');
const path = require('path');
const axios = require('axios')
const bcrypt = require('bcryptjs')
const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')

const connectDB = require('./config/db');
const User = require('./models/user')

const app = express();

// Connect Database
connectDB();


const secret = "someRndSec"

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

app.get('/auth/users', async (req, res) => {
  const users = await User.find({})

  res.send(users)
})

app.post('/auth/reg', async (req, res) => {
  try{
    const hashed = await bcrypt.hash(req.body.password, 10)

    const newUser = new User({name: req.body.name, password: hashed})

    const user = await newUser.save()

    const payload = {
      user: {
        id: user.id
      }
    };

    jwt.sign(
      payload,
      secret,
      { expiresIn: '5 days' },
      (err, token) => {
        if (err) throw err;
        res.json({ token });
      }
    );  
  
  }catch{
    res.status(500).send()
  }
})

app.post('/auth/login', async (req, res) => {
  try{
    if(await bcrypt.compare(req.body.password, foundUser.password)) {
      res.status(401).send('invalid credentials')
    } else {
      res.json(foundUser)
    }
  }catch{
    res.status().send()
  }
})

app.get('/api/news', async (req, res) => {
  try {
    const nRes = await axios('https://newsapi.org/v2/top-headlines?country=us&pageSize=15&apiKey=e5da89b57ee347a1a1da306427dc5fa7')

    res.send({articles: nRes.data.articles})
  } catch (err) {
    console.log(err)
  }
})

app.get('/api/weather', async (req, res) => {
  try {
    const wRes = await axios('https://api.weatherbit.io/v2.0/current?postal_code=54880&country=US&units=i&key=c3a3ccff8c144a68b378d4178a432076')

    res.send({wRes: wRes.data.data})
  } catch (err) {
    console.log(err)
  }
})

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

const PORT = process.env.PORT || 8020;


app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
