# isomorphic-url-shim

Node and browser module that returns either the native URL interface or a shimmed one.

## Usage

ES2015 (webpack, rollup, etc)
```
import { URL } from 'isomorphic-url-shim'
```

Node.js
```
const { URL } = require('isomorphic-url-shim')
```


## Notes

It's [UMD](https://github.com/umdjs/umd) compatible.

Uses [url-ponyfill](https://github.com/jccr/url-ponyfill) as the shim.