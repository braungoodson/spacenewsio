'use strict';

angular.module('spacenewsioApp')
  .factory('SpaceNews', function ($rootScope) {
    // Service logic
    // ...

    var meaningOfLife = {
      data: []
    };

    // Public API here
    return {
      someMethod: function () {
        return meaningOfLife;
      }
    };
  });
