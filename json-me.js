var fs = require('fs')
var express = require('express')
var app = express()

app.get('/books', function(req, res) {
  fs.readFile(process.argv[3], function(err, data) {
    if(err) return res.send(500);
    try {
      var d = JSON.stringify(JSON.parse(data));
      res.send(d);
    }
    catch(e) {
      res.send(500);
    }
  })
})

app.listen(process.argv[2])
