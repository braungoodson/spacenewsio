'use strict';

var express = require('express');
var controller = require('./metal-news.controller');

var router = express.Router();

router.get('/', function(req, res, next) {
  res.setHeader('Cache-Control', 'public, max-age=60');
  next();
}, controller.index);

module.exports = router;