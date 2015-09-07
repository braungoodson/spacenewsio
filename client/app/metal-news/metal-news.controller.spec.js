'use strict';

describe('Controller: MetalNewsCtrl', function () {

  // load the controller's module
  beforeEach(module('spacenewsioApp'));

  var MetalNewsCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MetalNewsCtrl = $controller('MetalNewsCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
