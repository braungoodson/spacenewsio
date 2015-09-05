'use strict';

describe('Service: spaceNews', function () {

  // load the service's module
  beforeEach(module('spacenewsioApp'));

  // instantiate service
  var spaceNews;
  beforeEach(inject(function (_spaceNews_) {
    spaceNews = _spaceNews_;
  }));

  it('should do something', function () {
    expect(!!spaceNews).toBe(true);
  });

});
