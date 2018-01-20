const mongoose = require('mongoose')

//const url = 'mongodb://fullstack:fullstack@ds211088.mlab.com:11088/fullstack-notes'
const url = process.env.MONGODB_URI

mongoose.connect(url)
mongoose.Promise = global.Promise

const Note = mongoose.model('Note', {
  content: String,
  date: Date,
  important: Boolean
})

module.exports = Note