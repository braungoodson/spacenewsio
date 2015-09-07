'use strict';

angular.module('spacenewsioApp')
  .controller('TheatreCtrl', function ($scope) {
    $scope.message = 'Hello';
  });

'use strict';

angular.module('spacenewsioApp')
  .controller('TheatreCtrl', function ($scope, $http) {
    $scope.TheatreNews = [];
    $scope.busy = 'acquiring data...';
    $http.get('/api/theatre-newss')
      .then(function(response){
        $scope.busy = 'processing data...';
        response.data.sort(function(a,b){
          $scope.busy = 'sorting ' + new Date(a.publishedDate).getTime() + ' - ' + new Date(b.publishedDate).getTime();
          return new Date(a.publishedDate).getTime() - new Date(b.publishedDate).getTime();
        });
        angular.forEach(response.data, function(article) {
          $scope.busy = 'populating news... ' + article.title;
          $scope.TheatreNews.push(article);
        });
        $scope.busy = false;
      });
  });