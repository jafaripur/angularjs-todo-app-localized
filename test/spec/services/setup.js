'use strict';

describe('Service: Setup', function () {

  // load the service's module
  beforeEach(module('appNevisApp'));

  // instantiate service
  var Setup;
  beforeEach(inject(function (_Setup_) {
    Setup = _Setup_;
  }));

  it('should do something', function () {
    expect(!!Setup).toBe(true);
  });

});
