'use strict';

angular.module('spacenewsioApp')
  .controller('EconomicsCtrl', function ($scope, $http, Lightbox) {
    $scope.Economics = [];
    $scope.busy = 'aquiring data...';
    $http.get('/api/economicss')
      .then(function(response){
        $scope.busy = 'processing data...';
        response.data.sort(function(a,b){
          $scope.busy = 'sorting ' + new Date(a.publishedDate).getTime() + ' - ' + new Date(b.publishedDate).getTime();
          return new Date(a.publishedDate).getTime() - new Date(b.publishedDate).getTime();
        });
        angular.forEach(response.data, function(article) {
          $scope.busy = 'populating news... ' + article.title;
          $scope.Economics.push(article);
        });
        $scope.busy = false;
      });
    $scope.enlarge = function(article) {
      return Lightbox.openModal([{
        url: article.image.url,
        caption: article.title,
        thUrl: ''
      }], 0);
    };
  });
