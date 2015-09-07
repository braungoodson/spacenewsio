'use strict';

angular.module('spacenewsioApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('main.metal-news', {
        url: '^/metal-news',
        templateUrl: 'app/metal-news/metal-news.html',
        controller: 'MetalNewsCtrl'
      });
  });
