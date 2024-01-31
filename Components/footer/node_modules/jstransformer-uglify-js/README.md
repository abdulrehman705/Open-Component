# jstransformer-uglify-js

[UglifyJS](https://www.npmjs.com/package/uglify-js) support for [JSTransformers](http://github.com/jstransformers).

[![Build Status](https://img.shields.io/travis/jstransformers/jstransformer-uglify-js/master.svg)](https://travis-ci.org/jstransformers/jstransformer-uglify-js)
[![Coverage Status](https://img.shields.io/codecov/c/github/jstransformers/jstransformer-uglify-js/master.svg)](https://codecov.io/gh/jstransformers/jstransformer-uglify-js)
[![Dependency Status](https://img.shields.io/david/jstransformers/jstransformer-uglify-js/master.svg)](http://david-dm.org/jstransformers/jstransformer-uglify-js)
[![NPM version](https://img.shields.io/npm/v/jstransformer-uglify-js.svg)](https://www.npmjs.org/package/jstransformer-uglify-js)

## Installation

    npm install jstransformer-uglify-js

## API

```js
var uglify = require('jstransformer')(require('jstransformer-uglify-js'));

uglify.render('var x = 5; var y = 6;').body
//=> 'var x=5,y=6'
```

## License

MIT
