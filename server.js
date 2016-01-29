var path = require('path');
var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var app = express();

app.use('/public', express.static(__dirname + '/public'))

app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(3004, 'localhost', function(err) {
  if (err) {
    console.log(err);
    return;
  }
  console.log('Listening at http://127.0.0.1:3004');
});
