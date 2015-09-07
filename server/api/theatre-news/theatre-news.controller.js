'use strict';

var _ = require('lodash');
var TheatreNews = require('./theatre-news.model');
var News = require('ewc-news');

// Get list of space-newss
exports.index = function(req, res) {
  News.news({
    keywords: 'musical, broadway, audience, tony award', 
    done: function(news) {
      ////console.log(news);
      res.json(news);
    }
  });
};

// Get a single theatre-news
exports.show = function(req, res) {
  TheatreNews.findById(req.params.id, function (err, theatreNews) {
    if(err) { return handleError(res, err); }
    if(!theatreNews) { return res.send(404); }
    return res.json(theatreNews);
  });
};

// Creates a new theatre-news in the DB.
exports.create = function(req, res) {
  TheatreNews.create(req.body, function(err, theatreNews) {
    if(err) { return handleError(res, err); }
    return res.json(201, theatreNews);
  });
};

// Updates an existing theatre-news in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  TheatreNews.findById(req.params.id, function (err, theatreNews) {
    if (err) { return handleError(res, err); }
    if(!theatreNews) { return res.send(404); }
    var updated = _.merge(theatreNews, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.json(200, theatreNews);
    });
  });
};

// Deletes a theatre-news from the DB.
exports.destroy = function(req, res) {
  TheatreNews.findById(req.params.id, function (err, theatreNews) {
    if(err) { return handleError(res, err); }
    if(!theatreNews) { return res.send(404); }
    theatreNews.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.send(204);
    });
  });
};

function handleError(res, err) {
  return res.send(500, err);
}