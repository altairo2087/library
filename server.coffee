application_root = __dirname
express = require 'express'
mongoose = require 'mongoose'
bodyParser = require 'body-parser'
methodOverride = require 'method-override'
errorhandler = require 'errorhandler'
port = 8080

app.use bodyParser.urlencoded
  extended: true
app.use bodyParser.json()
app.use methodOverride '_method'
app.use errorhandler
  dumpExceptions: true
  showStack: true

router = express.Router()

app.use '/api', router

app.listen port