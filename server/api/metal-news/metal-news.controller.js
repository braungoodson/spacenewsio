'use strict';

var _ = require('lodash');
var MetalNews = require('./metal-news.model');
var News = require('ewc-news');

// Get list of space-newss
exports.index = function(req, res) {
  /*News.news({
    keywords: 'kaskade, nicki minaj, club royale events, ultra music festival, tomorrow land, metal tours',
    done: function(news) {
      console.log(news);
      res.json(news);
    }
  });*/
//  return res.json([{content:"There is nothing more important to web development than logic."}]);
  var searches = [];
  var news = [];
  searches.push({keyword:'kaskade',pages:2,start:0});
  searches.push({keyword:'nicki minja',pages:2,start:0});
  searches.push({keyword:'club royale',pages:2,start:0});
  searches.push({keyword:'ultra music festival',pages:2,start:0});
  searches.push({keyword:'tomorrowworld',pages:2,start:0});
  searches.push({keyword:'metal tour',pages:2,start:0});
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

// Get a single metal-news
exports.show = function(req, res) {
  MetalNews.findById(req.params.id, function (err, metalNews) {
    if(err) { return handleError(res, err); }
    if(!metalNews) { return res.send(404); }
    return res.json(metalNews);
  });
};

// Creates a new metal-news in the DB.
exports.create = function(req, res) {
  MetalNews.create(req.body, function(err, metalNews) {
    if(err) { return handleError(res, err); }
    return res.json(201, metalNews);
  });
};

// Updates an existing metal-news in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  MetalNews.findById(req.params.id, function (err, metalNews) {
    if (err) { return handleError(res, err); }
    if(!metalNews) { return res.send(404); }
    var updated = _.merge(metalNews, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.json(200, metalNews);
    });
  });
};

// Deletes a metal-news from the DB.
exports.destroy = function(req, res) {
  MetalNews.findById(req.params.id, function (err, metalNews) {
    if(err) { return handleError(res, err); }
    if(!metalNews) { return res.send(404); }
    metalNews.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.send(204);
    });
  });
};

function handleError(res, err) {
  return res.send(500, err);
}
