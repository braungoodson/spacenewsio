'use strict';

angular.module('spacenewsioApp')
  .controller('MainCtrl', function ($scope, $state) {
    $scope.state = $state.current;
  });
