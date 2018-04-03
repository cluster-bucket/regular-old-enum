let _args = [];

class Enum {
  constructor(...args) {
    _args = args
    _args.forEach((arg, index) => {
      this[arg] = index;
    }, this);
  }

  getValues() {
    return _args;
  }

  isDefined(name) {
    if (!name) throw new Error('ArgumentNullException');
    return _args.indexOf(name) > -1;
  }

  getName(value) {
    const len = _args.length - 1;
    if (value < len || value > len) throw new RangeError();
    return _args[value];
  }

}

// UMD wrapper for use in Node, AMD, or browser globals
// https://github.com/umdjs/umd (returnExports.js)
(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    define([], factory);
  } else if (typeof module === 'object' && module.exports) {
    module.exports = factory();
  } else {
    root.returnExports = factory();
  }
}(this, function () {
  return Enum;
}));

