// Generated by CoffeeScript 1.10.0
(function() {
  var BookModel, BookSchema, KeywordSchema, PORT, app, bodyParser, errorhandler, express, methodOverride, mongoose, router;

  PORT = 8090;

  express = require('express');

  mongoose = require('mongoose');

  bodyParser = require('body-parser');

  methodOverride = require('method-override');

  errorhandler = require('errorhandler');

  mongoose.connect('mongodb://localhost/library');

  KeywordSchema = new mongoose.Schema({
    keyword: String
  });

  BookSchema = new mongoose.Schema({
    title: String,
    author: String,
    releaseDate: Date,
    keywords: [KeywordSchema]
  });

  BookModel = mongoose.model('Book', BookSchema);

  app = express();

  app.use(bodyParser.urlencoded({
    extended: true
  }));

  app.use(bodyParser.json());

  app.use(methodOverride('_method'));

  app.use(errorhandler({
    dumpExceptions: true,
    showStack: true
  }));

  router = express.Router();

  router.use(function(req, res, next) {
    console.log('request %s', req.method);
    return next();
  });

  router.get('/books', function(req, res) {
    return BookModel.find(function(err, books) {
      if (err) {
        return console.log(err);
      } else {
        return res.send(books);
      }
    });
  });

  router.post('/books', function(req, res) {
    var book;
    book = new BookModel({
      title: req.body.title,
      author: req.body.author,
      releaseDate: req.body.releaseDate,
      keywords: req.body.keywords
    });
    book.save(function(err) {
      if (err) {
        return console.log(err);
      } else {
        return console.log('created');
      }
    });
    return res.send(book);
  });

  router.get('/books/:id', function(req, res) {
    return BookModel.findById(req.params.id, function(err, book) {
      if (err) {
        return console.log(err);
      } else {
        return res.send(book);
      }
    });
  });

  router.put('/books/:id', function(req, res) {
    console.log('Updating book %s', req.body.title);
    return BookModel.findById(req.params.id, function(err, book) {
      book.title = req.body.title;
      book.author = req.body.author;
      book.releaseDate = req.body.releaseDate;
      book.keywords = req.body.keywords;
      return book.save(function(err) {
        if (err) {
          console.log(err);
        } else {
          console.log('book updated');
        }
        return res.send(book);
      });
    });
  });

  router["delete"]('/books/:id', function(req, res) {
    console.log('Deleting book with id %s', req.params.id);
    return BookModel.findById(req.params.id, function(err, book) {
      return book.remove(function(err) {
        if (err) {
          return console.log(err);
        } else {
          console.log('Book removed');
          return res.send('');
        }
      });
    });
  });

  app.use('/api', router);

  app.use('/', express["static"]('public'));

  app.listen(PORT);

}).call(this);

//# sourceMappingURL=server.js.map
