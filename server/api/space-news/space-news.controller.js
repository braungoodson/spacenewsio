'use strict';

var _ = require('lodash');
var SpaceNews = require('./space-news.model');
var News = require('ewc-news');

// Get list of space-newss
exports.index = function(req, res) {
  News.news({
    keywords: 'ceres, europa jupiter, pluto, philae, mars', 
    done: function(news) {
      ////console.log(news);
      res.json(news);
    }
  });
};

// Get a single space-news
exports.show = function(req, res) {
  SpaceNews.findById(req.params.id, function (err, spaceNews) {
    if(err) { return handleError(res, err); }
    if(!spaceNews) { return res.send(404); }
    return res.json(spaceNews);
  });
};

// Creates a new spaceNews in the DB.
exports.create = function(req, res) {
  SpaceNews.create(req.body, function(err, spaceNews) {
    if(err) { return handleError(res, err); }
    return res.json(201, spaceNews);
  });
};

// Updates an existing space-news in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  SpaceNews.findById(req.params.id, function (err, spaceNews) {
    if (err) { return handleError(res, err); }
    if(!spaceNews) { return res.send(404); }
    var updated = _.merge(spacNews, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.json(200, spaceNews);
    });
  });
};

// Deletes a space-news from the DB.
exports.destroy = function(req, res) {
  SpaceNews.findById(req.params.id, function (err, spaceNews) {
    if(err) { return handleError(res, err); }
    if(!spaceNews) { return res.send(404); }
    spaceNews.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.send(204);
    });
  });
};

function handleError(res, err) {
  return res.send(500, err);
}
