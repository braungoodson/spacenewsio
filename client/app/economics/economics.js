'use strict';

angular.module('spacenewsioApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('main.economics', {
        url: '^/economics',
        templateUrl: 'app/economics/economics.html',
        controller: 'EconomicsCtrl'
      });
  });
