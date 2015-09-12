'use strict';

var _ = require('lodash');
var SpaceNews = require('./space-news.model');
var News = require('ewc-news');

// Get list of space-newss
exports.index = function(req, res) {
  var searches = [];
  var news = [];
  searches.push({keyword:'ceres',pages:2,start:0});
  searches.push({keyword:'europa jupiter',pages:2,start:0});
  searches.push({keyword:'philae',pages:2,start:0});
  searches.push({keyword:'pluto',pages:2,start:0});
  searches.push({keyword:'mars',pages:2,start:0});
  var dealWithIt = function(responses) {
    for (var p in responses) {
      var response = JSON.parse(responses[p]);
      var results = response.responseData.results;
      for (var s in results) {
        news.push(results[s]);
      }
    }
    res.json(news);
  };
  var why = function(because) {
    throw new beause;
  };
  News.news(searches).then(dealWithIt).fail(why);
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
    var updated = _.merge(spaceNews, req.body);
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
