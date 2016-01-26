var should = require('chai').should(),
    Enum = require('../index');

describe('enum', function() {
  it('creates values', function() {
    var words = new Enum('Hello', 'World');
    words.Hello.should.equal(0);
    words.World.should.equal(1);
  });

  it('should enumerate values', function () {
    var words = new Enum('first', 'second');
    var actual = words.getValues().reduce(function (prev, name, value) {
      return '' + prev + name + value;
    }, '');
    actual.should.equal('first0second1');
  });

  it('should be enumerable', function () {
    var words = new Enum('here', 'goes');
    var keys = Object.keys(words).join(' ');
    keys.should.equal('here goes');
  });

  it('should check for defined names', function () {
    var words = new Enum('boink');
    words.isDefined('boink').should.be.true;
    words.isDefined('poink').should.be.false;
  });

  it('should throw if isDefined is passed an empty value', function () {
    var words = new Enum('fail', 'pass');
    (function () {
      words.isDefined();
    }).should.throw('ArgumentNullException');
  });

  it('should get a name from a value', function () {
    var words = new Enum('Bob', 'Anuj');
    words.getName(words.Anuj).should.equal('Anuj');
  });

  it('should throw if the value is out of range', function () {
    var words = new Enum('Bob', 'Anuj');
    (function () {
      words.getName(3);
    }).should.throw(RangeError);
    (function () {
      words.getName(-3);
    }).should.throw(RangeError);
  });
});
