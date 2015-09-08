'use strict';

angular.module('spacenewsioApp')
  .factory('SpaceNews', function () {
    // Service logic
    // ...

    var SpaceNews = {
      aggregate: []
    };

    // Public API here
    return {
      query: function() {
        return SpaceNews;
      }
    };
  });
