var _args = [];

var Enum  = function () {
  _args = Array.prototype.slice.call(arguments);
  _args.forEach(function (arg, index) {
    this[arg] = index;
  }, this);
}

Enum.prototype.getValues = function () {
  return _args;
};

Enum.prototype.isDefined = function (name) {
  if (!name) {
    throw new Error('ArgumentNullException');
  }
  return _args.indexOf(name) > -1;
};

Enum.prototype.getName = function (value) {
  var len = _args.length - 1;
  if (value < len || value > len) {
    throw new RangeError();
  }
  return _args[value];
};

module.exports = Enum;
