'use strict';

describe('Controller: SpaceNewsCtrl', function () {

  // load the controller's module
  beforeEach(module('spacenewsioApp'));

  var SpaceNewsCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    SpaceNewsCtrl = $controller('SpaceNewsCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
