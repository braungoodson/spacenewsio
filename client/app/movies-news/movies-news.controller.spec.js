'use strict';

describe('Controller: MoviesNewsCtrl', function () {

  // load the controller's module
  beforeEach(module('spacenewsioApp'));

  var MoviesNewsCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MoviesNewsCtrl = $controller('MoviesNewsCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
