const Post = require('../model/PostModel')
const sharp = require('sharp')
const path = require('path')
const fs = require('fs')

module.exports = {
  async index(req, res) {
    const posts = await Post.find().sort('-createdAt')
    return res.json(posts)
  },

  async store(req, res) {
    const { author, place, description, hashtags } = req.body
    const { filename: image } = req.file

    const [name] = image.split('.')
    const fileName = `${name}.jpg`

    await sharp(req.file.path) // Compress the uploaded image
    .resize(480)
    .jpeg({
      quality: 50
    }).toFile(
      path.resolve(req.file.destination, 'resized', fileName)
    )

    fs.unlinkSync(req.file.path) // removes the original image

    const post = await Post.create({
      author,
      place,
      description,
      hashtags,
      image: fileName
    })

    req.io.emit('post', post)

    return res.json(post)
  }
}