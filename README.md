# regular-old-enum

This is a regular old enum in JavaScript without any complicated shit that
everyone thinks they need to have in their enum.

Installation
------------

```js
npm install regular-old-enum --save
```

Usage
-----

**Require that shit**

```js
var Enum = require('regular-old-enum');
```

**Create an enum and get a value**

```js
var words = new Enum('Hello', 'World');
words.World; // 1
```

**Iterate all values on the enum**

```js
var words = new Enum('first', 'second');
words.getValues().forEach(function (name, value) {
  console.log(name + ': ' + value);
});
// first: 0
// second: 1
```

**Check if a name is defined**

```js
var words = new Enum('dork');
words.isDefined('nerd'); // false
```

**Get the name of a value**

```js
var words = new Enum('Bob', 'Anuj');
words.getName(words.Anuj); // 'Anuj' 
```

Versioning
----------

This project is maintained under the [Semantic Versioning guidelines][semver].
Releases will be numbered with the following format:

> Given a version number MAJOR.MINOR.PATCH, increment the:
>
> 1. MAJOR version when you make incompatible API changes,
> 2. MINOR version when you add functionality in a backwards-compatible manner, and
> 3. PATCH version when you make backwards-compatible bug fixes.

Development
-----------

If you want to work on this project, you'll need to have [node][node]
and [npm][npm] installed. Once you have got that taken care of, clone the
repo and then run `npm install` to install all the required dependencies.

* Run `npm test` to run the unit tests

Contributors
------------

* [Dustin Boston][dblogit]

License
-------

regular-old-enum is free software. See the LICENSE file for more information.

[node]: http://nodejs.org/
[npm]: https://npmjs.org/
[dblogit]: http://dblogit.com
[semver]: http://semver.org/
