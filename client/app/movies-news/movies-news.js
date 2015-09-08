'use strict';

angular.module('spacenewsioApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('main.movies-news', {
        url: '^/movies-news',
        templateUrl: 'app/movies-news/movies-news.html',
        controller: 'MoviesNewsCtrl'
      });
  });
