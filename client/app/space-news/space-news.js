'use strict';

angular.module('spacenewsioApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('main.space-news', {
        url: '^/space-news',
        templateUrl: 'app/space-news/space-news.html',
        controller: 'SpaceNewsCtrl'
      });
  });