const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();
app.use(cookieParser());


app.get('/set', (req,res,next) => {
  res.cookie('foo', 'bar');
  res.send();
});

app.get('/read', (req,res,next) => {
  var recieved = cookieParser.JSONCookies(req.cookies);
  res.send(recieved);
});

app.get('/clear', (req,res,next) => {
  res.clearCookie('deleteMe');
  res.send();
});

app.listen('3000', () => {
  console.log('Listening on Port 3000');
});

module.exports = app;
