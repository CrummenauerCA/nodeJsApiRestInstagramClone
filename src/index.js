const express = require('express')
const mongoose = require('mongoose')

const app = express()
mongoose.connect('mongodb://localhost:27017/backend', {
  useNewUrlParser: true
}).catch(error => {
  console.log('ERRO: ', error)
});

app.get('/', (req, res) => {
  return res.send(`Olá ${req.query.name}`)
})

app.listen(3333)
