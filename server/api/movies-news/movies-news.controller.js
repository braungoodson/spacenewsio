'use strict';

var _ = require('lodash');
var MoviesNews = require('./movies-news.model');
var News = require('ewc-news');

// Get list of space-newss
exports.index = function(req, res) {
  News.news({
    keywords: 'movie releases, marvel movies, movie award', 
    done: function(news) {
      ////console.log(news);
      res.json(news);
    }
  });
};

function handleError(res, err) {
  return res.send(500, err);
}
