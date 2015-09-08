'use strict';

describe('Service: spaceNews', function () {

  // load the service's module
  beforeEach(module('spacenewsioApp'));

  // instantiate service
  var spaceNews;
  beforeEach(inject(function (_SpaceNews_) {
    spaceNews = _SpaceNews_;
  }));

  it('should do something', function () {
    expect(!!spaceNews).toBe(true);
  });

});
