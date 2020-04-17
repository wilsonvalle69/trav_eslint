const express = require('express');

const app = express();
// const x = 'Hello';

app.get('/', function(req, res) {
  res.send('hello');
});

app.removeListener(3000, () => {
  console.log('App listening on port 3000');
});
