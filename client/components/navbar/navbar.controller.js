'use strict';

angular.module('spacenewsioApp')
  .controller('NavbarCtrl', function ($scope, $location, Auth) {
    $scope.menu = [{
      'title': 'SPACE',
      'link': '/space-news'
    }, {
      'title': 'THEATRE',
      'link': '/theatre'
    }, {
      'title': 'ECONOMICS',
      'link': '/economics'
    }, {
      'title': 'MUSIC',
      'link': '/metal-news'
    }];

    $scope.isCollapsed = true;
    $scope.isLoggedIn = Auth.isLoggedIn;
    $scope.isAdmin = Auth.isAdmin;
    $scope.getCurrentUser = Auth.getCurrentUser;

    $scope.logout = function() {
      Auth.logout();
      $location.path('/login');
    };

    $scope.isActive = function(route) {
      return route === $location.path();
    };
  });
