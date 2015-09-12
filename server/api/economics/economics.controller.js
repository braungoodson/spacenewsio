'use strict';

var _ = require('lodash');
var Economics = require('./economics.model');
var News = require('ewc-news');

// Get list of space-newss
exports.index = function(req, res) {
  /*News.news({
    keywords: 'trump, bitcoin, oil industry, stock market',
    done: function(news) {
      ////console.log(news);
      res.json(news);
    }
  });*/
  //return res.json([{content:"There is nothing more important to web development than logic."}]);
  var searches = [];
  var news = [];
  searches.push({keyword:'trump',pages:2,start:0});
  searches.push({keyword:'bitcoin',pages:2,start:0});
  searches.push({keyword:'oil industry',pages:2,start:0});
  searches.push({keyword:'solar industry',pages:2,start:0});
  searches.push({keyword:'stock merket',pages:2,start:0});
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

// Get a single economics
exports.show = function(req, res) {
  Economics.findById(req.params.id, function (err, economics) {
    if(err) { return handleError(res, err); }
    if(!economics) { return res.send(404); }
    return res.json(economics);
  });
};

// Creates a new economics in the DB.
exports.create = function(req, res) {
  Economics.create(req.body, function(err, economics) {
    if(err) { return handleError(res, err); }
    return res.json(201, economics);
  });
};

// Updates an existing economics in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  Economics.findById(req.params.id, function (err, economics) {
    if (err) { return handleError(res, err); }
    if(!economics) { return res.send(404); }
    var updated = _.merge(economics, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.json(200, economics);
    });
  });
};

// Deletes a economics from the DB.
exports.destroy = function(req, res) {
  Economics.findById(req.params.id, function (err, economics) {
    if(err) { return handleError(res, err); }
    if(!economics) { return res.send(404); }
    economics.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.send(204);
    });
  });
};

function handleError(res, err) {
  return res.send(500, err);
}
