const express = require('express')
const mongoose = require('mongoose')
const path = require('path')
const cors = require('cors')

const app = express()

mongoose.connect('mongodb://localhost:27017/backend', {
  useNewUrlParser: true
}).catch(error => {
  console.log('ERRO: ', error)
});

app.use(cors())

app.use('/files', express.static(path.resolve(__dirname, '..', 'uploads', 'resized')))

app.use(require('./routes'))

app.listen(3333)
