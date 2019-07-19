const express = require('express')
const multer = require('multer')
const PostController = require('./controller/PostController')
const uploadConfig= require('./config/upload')

const routes = new express.Router()
const upload = multer(uploadConfig)

routes.post('/posts', upload.single('image'), PostController.store)
routes.get('/posts', PostController.index)

module.exports = routes 