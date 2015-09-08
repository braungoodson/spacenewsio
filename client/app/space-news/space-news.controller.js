'use strict';

angular.module('spacenewsioApp')
  .controller('SpaceNewsCtrl', function ($scope, $http, Lightbox) {
    $scope.news = [];
    $scope.busy = 'acquiring data...';
    $http.get('/api/space-newss')
      .then(function(response){
        $scope.busy = 'processing data...';
        response.data.sort(function(a,b){
          $scope.busy = 'sorting ' + new Date(a.publishedDate).getTime() + ' - ' + new Date(b.publishedDate).getTime();
          return new Date(b.publishedDate).getTime() - new Date(a.publishedDate).getTime();
        });
        angular.forEach(response.data, function(article) {
          $scope.busy = 'populating news... ' + article.title;
          $scope.news.push(article);
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
