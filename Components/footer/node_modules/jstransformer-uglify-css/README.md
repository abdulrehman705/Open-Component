# jstransformer-uglify-css

When moving jade to pug, you need to rename your `uglify-css` filter to `clean-css`. If you want a smooth transition (for instance you use precompiled jade views in a cdn and want to make them work with pug too) you can use this module to ensure your `uglify-css` filters keep working when rendering with the new runtime.

Ideally, you should use this only as migration path.

## Installation

    npm install jstransformer-clean-css

## API

```js
var clean = require('jstransformer')(require('jstransformer-uglify-css'))

clean.render('a { font-weight: bold; }').body
//=> 'a{font-weight:bold;}'
```

## License

MIT
