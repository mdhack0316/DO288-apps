var express = require('express');
app = express();

app.get('/', function (req, res) {
  res.send('Hello World!from DUBAI 2nd time Soap is not from foam\n');
});

app.listen(8080, function () {
  console.log('Example app listening on port 8080!');
});

