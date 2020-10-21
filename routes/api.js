const express = require('express')
const router = express.Router()

router.get('/api/news', async (req, res) => {
    try {
      const nRes = await axios('https://newsapi.org/v2/top-headlines?country=us&pageSize=15&apiKey=e5da89b57ee347a1a1da306427dc5fa7')
  
      res.send({articles: nRes.data.articles})
    } catch (err) {
      console.log(err)
    }
})
  
router.get('/api/weather', async (req, res) => {
    try {
        const wRes = await axios('https://api.weatherbit.io/v2.0/current?postal_code=54880&country=US&units=i&key=c3a3ccff8c144a68b378d4178a432076')

        res.send({wRes: wRes.data.data})
    } catch (err) {
        console.log(err)
    }
})

module.exports = router