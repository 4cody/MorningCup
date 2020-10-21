  
const express = require('express')
const router = express.Router()
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const auth = require('../middleware/auth')
const config = require('config')

const User = require('../models/user')

const secret = 'secret'

// login existing user
router.post('/login', auth,  async (req, res) => {
    try{
        const { email, password } = req.body;

        let user = await User.findOne({ email });

        if (!user) {
          return res
            .status(400)
            .json({ errors: [{ msg: 'Invalid Credentials' }] });
        }
  
        const isMatch = await bcrypt.compare(password, user.password);
  
        if (!isMatch) {
          return res
            .status(400)
            .json({ errors: [{ msg: 'Invalid Credentials' }] });
        }



    }catch{
      res.status().send()
    }
})

// register new user
router.post('/register', async (req, res) => {
    const { name, password } = req.body

    try{

        let user = await User.findOne({ name })

        if (user) {
          return res
            .status(400)
            .json({ errors: [{ msg: 'User already exists' }] });
        }
  
        user = new User({
            name, password
        })

        user.password = await bcrypt.hash(req.body.password, 10)

        await user.save()

        const payload = {
            user: {
                id: user.id
            }
        }

        jwt.sign(
            payload,
            config.get('jwtSecret'),
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
  
module.exports = router