const Post = require('../model/PostModel')

module.exports = {
  async store(req, res) {
    return res.json({ ok: true })
  }
}