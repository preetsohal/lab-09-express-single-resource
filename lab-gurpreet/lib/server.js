'use strict';

const express = require('express'),
  posts = require('../lib/cowsay.js');
const bodyParser = require('body-parser');

// const Router = express.Router;
const cowsay = require('cowsay');

let app = express();
// let helloRouter = require('./helloRouter');

app.get('/hello/:id', (req, res) => {
  var id = req.params.id;
  if (id === undefined){
    res.status(503);
    res.send('this page is under construction');
  }else {
    var post = posts[id];
    res.send(post);
  }
});

// app.use('/api', helloRouter);
// app.get('*', (req, res) => {
//   res.status(404).json({msg: 'gotta catch em\' all'});
// });

app.listen(3000, () => console.log('server up'));
