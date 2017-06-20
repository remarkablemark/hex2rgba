# hex2rgba

Converts hexadecimal to RGBA:

```
hex2rgba(hexadecimal[, alpha])
```

#### Example:

```js
var hex2rgba = require('hex2rgba');
hex2rgba('#f00');         // 'rgba(255,0,0,1)'
hex2rgba('BADA55', 0.42); // 'rgba(186,218,85,0.42)'
```

## Install

```sh
$ npm install hex2rgba
```

## Testing

```sh
$ npm test
$ npm run lint
```

## License

[MIT](https://github.com/remarkablemark/hex2rgba/blob/master/LICENSE)
