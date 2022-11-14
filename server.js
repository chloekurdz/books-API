const { application } = require('express')
const booksController = require('./controllers/books_controller.js')
application.use('/books', booksController)