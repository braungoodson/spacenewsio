'use strict';

angular.module('spacenewsioApp')
  .factory('SpaceNews', function () {
    // Service logic
    // ...

    var SpaceNews = {
      aggregate: []
    };

    $resource('/api/space-newss/ceres')

    // Public API here
    return {
      query: function() {
        return SpaceNews;
      }
    };
  });
