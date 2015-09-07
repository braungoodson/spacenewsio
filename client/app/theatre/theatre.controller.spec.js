'use strict';

describe('Controller: TheatreCtrl', function () {

  // load the controller's module
  beforeEach(module('spacenewsioApp'));

  var TheatreCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    TheatreCtrl = $controller('TheatreCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
