'use strict';

var _ = require('lodash');
var MoviesNews = require('./movies-news.model');
var News = require('ewc-news');

// Get list of movies-newss
exports.index = function(req, res) {
  /*News.news({
    keywords: 'movie releases, marvel movies, movie award', 
    done: function(news) {
      ////console.log(news);
      res.json(news);
    }
  });*/

  //return res.json([{content:"There is nothing more important to web development than logic."}]);
  var searches = [];
  var news = [];
  searches.push({keyword:'movie releases',pages:2,start:0});
  searches.push({keyword:'marvel movie',pages:2,start:0});
  searches.push({keyword:'movie award',pages:2,start:0});
  //searches.push({keyword:'',pages:2,start:0});
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

function handleError(res, err) {
  return res.send(500, err);
}
