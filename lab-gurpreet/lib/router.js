'use strict';
const Router = require('express').Router;
let someOtherRouter = Router();
let helloRouter = module.exports = exports = Router();

someOtherRouter.get('/someroute', (req, res) => {
  res.json({msg: 'hello from some route'});
});

helloRouter.get('/hello', (req, res) => {
  res.status(202).json({msg: 'hello world'});
});

helloRouter.get('/hello/:first/:last', (req, res) => {
  res.json({msg: 'hello ' + req.params.last + ', ' + req.params.first});
});

helloRouter.use('/something', someOtherRouter);
