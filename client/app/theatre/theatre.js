'use strict';

angular.module('spacenewsioApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('main.theatre', {
        url: '^/theatre',
        templateUrl: 'app/theatre/theatre.html',
        controller: 'TheatreCtrl'
      });
  });