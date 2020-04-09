let express = require('express')
let route = express.Router()

route.get('/test' , (req , res) => {
  res.send('test')
})

module.exports = route

