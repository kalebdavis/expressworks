var express = require('express')

var app = express()

app.get('/home', function(req, res) {
  app.set('view engine', 'jade')
  app.set('views', process.argv[3])
  res.render('index', {date: new Date().toDateString()})
})
app.listen(process.argv[2])
