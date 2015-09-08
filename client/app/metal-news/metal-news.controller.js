'use strict';

angular.module('spacenewsioApp')
  .controller('MetalNewsCtrl', function ($scope, $http, Lightbox) {
    $scope.MetalNews = [];
    $scope.busy = 'acquiring data...';
    $http.get('/api/metal-newss')
      .then(function(response){
        $scope.busy = 'processing data...';
        response.data.sort(function(a,b){
          $scope.busy = 'sorting ' + new Date(a.publishedDate).getTime() + ' - ' + new Date(b.publishedDate).getTime();
          return new Date(a.publishedDate).getTime() - new Date(b.publishedDate).getTime();
        });
        angular.forEach(response.data, function(article) {
          $scope.busy = 'populating news... ' + article.title;
          $scope.MetalNews.push(article);
        });
        $scope.busy = false;
        console.log($scope.MetalNews);
      });
    $scope.enlarge = function(article) {
      return Lightbox.openModal([{
        url: article.image.url,
        caption: article.title,
        thUrl: ''
      }], 0);
    };
  });
