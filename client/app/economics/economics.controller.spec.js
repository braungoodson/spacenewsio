'use strict';

describe('Controller: EconomicsCtrl', function () {

  // load the controller's module
  beforeEach(module('spacenewsioApp'));

  var EconomicsCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    EconomicsCtrl = $controller('EconomicsCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
