var express = require('express');
var newDate = require('./date-generator');
var app = express();
app.get('/', function (req, res) {
  res.send(newDate());
});
app.listen(2786, function () {
  console.log('Example app listening on port 2786!');
});