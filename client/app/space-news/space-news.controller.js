'use strict';

angular.module('spacenewsioApp')
  .controller('SpaceNewsCtrl', function ($scope, $http, $resource) {
    //$http.defaults.headers.common['Host'] = 'http://troy.gsdn.io';
    var url = 'https://ajax.googleapis.com/ajax/services/search/news';
    var params = {
      v: '@v', // v=1.0
      q: '@q' // q=ceres%20europa
    };
    var config = {};
    var SpaceNews = $resource(url, params, config);
    $scope.SpaceNews = SpaceNews.get({v:'1.0',q:'ceres'});
  });
