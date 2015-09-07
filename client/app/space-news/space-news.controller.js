'use strict';

angular.module('spacenewsioApp')
  .controller('SpaceNewsCtrl', function ($scope, $http) {
    $scope.SpaceNews = [];
    $scope.busy = 'acquiring data...';
    $http.get('/api/space-newss')
      .then(function(response){
        $scope.busy = 'processing data...';
        response.data.sort(function(a,b){
          $scope.busy = 'sorting ' + new Date(a.publishedDate).getTime() + ' - ' + new Date(b.publishedDate).getTime();
          return new Date(a.publishedDate).getTime() - new Date(b.publishedDate).getTime();
        });
        angular.forEach(response.data, function(article) {
          $scope.busy = 'populating news... ' + article.title;
          $scope.SpaceNews.push(article);
        });
        $scope.busy = false;
      });
  });