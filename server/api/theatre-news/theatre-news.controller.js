'use strict';

var _ = require('lodash');
var TheatreNews = require('./theatre-news.model');
var News = require('ewc-news');

// Get list of theatre-newss
exports.index = function(req, res) {
  var searches = [];
  var news = [];
  searches.push({keyword:'musical',pages:2,start:0});
  searches.push({keyword:'audience',pages:2,start:0});
  searches.push({keyword:'broadway',pages:2,start:0});
  searches.push({keyword:'tony award',pages:2,start:0});
  //searches.push({keyword:'',pages:2,start:0});
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
