'use strict';

var expect = require('chai').expect;
var greet = require("../greet.js");

describe('greet.js', function() {

  it('should greet someone', function() {
    expect(greet.greet('Stephanie')).to.eql('hello Stephanie');
  });
});
