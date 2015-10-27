PORT = 8090

express = require 'express'
mongoose = require 'mongoose'
bodyParser = require 'body-parser'
methodOverride = require 'method-override'
errorhandler = require 'errorhandler'

mongoose.connect('mongodb://localhost/library');

BookSchema = new mongoose.Schema
  title: String
  author: String
  releaseDate: Date
BookModel = mongoose.model 'Book', BookSchema

app = express()
app.use bodyParser.urlencoded
  extended: true
app.use bodyParser.json()
app.use methodOverride '_method'
app.use errorhandler
  dumpExceptions: true
  showStack: true

router = express.Router()
router.use (req,res,next)->
  console.log 'request %s', req.method
  next()
router.get '/books', (req,res)->
  BookModel.find (err, books)->
    if err then console.log err else res.send books
router.post '/books', (req,res)->
  book = new BookModel
    title: req.body.title
    author: req.body.author
    releaseDate: req.body.releaseDate
  book.save (err)->
    if err then console.log err else console.log 'created'
  res.send book
router.get '/books/:id', (req,res)->
  BookModel.findById req.params.id, (err,book)->
    if err then console.log err else res.send book
router.put '/books/:id', (req,res)->
  console.log 'Updating book %s', req.body.title
  BookModel.findById req.params.id, (err, book)->
    book.title = req.body.title
    book.author = req.body.author
    book.releaseDate = req.body.releaseDate
    book.save (err)->
      if err then console.log err else console.log 'book updated'
      res.send book
router.delete '/books/:id', (req,res)->
  console.log 'Deleting book with id %d', req.params.id
  BookModel.findById req.params.id, (err, book)->
    book.remove (err)->
      if err
        console.log err
      else
        console.log 'Book removed'
        res.send ''
app.use '/api', router

app.listen PORT