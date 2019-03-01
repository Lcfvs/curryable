# <a name="reference">curryable</a>

An utility to make any function repeatedly curryable

## <a name="install">Install</a>

`npm i @lcf.vs/curryable`

## <a name="usage">Usage</a>

### <a name="basic-example">Basic example</a>

```js
import curryable from '@lcf.vs/curryable'

const log = curryable((...values) => console.log(values), 0)

log(1, 2, 3) // [0, 1, 2, 3]
log.curry(1, 2, 3)(4, 5, 6) // [0, 1, 2, 3, 4, 5, 6]
log.curry(1, 2, 3).curry(4, 5, 6)(7, 8, 9) // [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
```

### <a name="real-world-example">Real world example</a>

```js
import path from 'path'
import curryable from '@lcf.vs/curryable'

const __filename = new URL(from.url).pathname
const resolve = curryable(path.resolve, __filename, '..')
// const __dirname = resolve()
const src = resolve.curry('src')
const html = src.curry('html')
const assets = src.curry('assets')
 
const paths = {
  index: html('index.html'),
  assets: [
    assets('js/index.js'),
    assets('css/style.css')
  ]
}
```

## <a name="api">API</a>

```js
/**
 * Returns a reduced function from `fn`, with a `.curry` method to repeat the
 * process on the new one
*  @function curryable
 * @param {Function} fn
 * @param {...*} args
 * @return {Function&Object}
 */
import curryable from '@lcf.vs/curryable'

function fn () {}

const args = []
const fn = curryable(fn)
const newFn = fn.curry(...args)
```

```js
/**
 * Returns a reduced function from `fn`
*  @function curry
 * @param {Function} fn
 * @param {...*} args
 * @return {Function}
 */
import {curry, isCurryable} from '@lcf.vs/curryable'

function fn () {}

const args = []
const newFn = curry(fn, ...args)
```

```js
/**
 * Checks if `fn` has the provided `.curry()` method
*  @function isCurryable
 * @param {Function} fn
 * @return {boolean}
 */
import {curryable, isCurryable} from '@lcf.vs/curryable'

function fn () {}

const args = []
const result = isCurryable(curryable(fn, ...args)) // true
```



## <a name="license">License</a>

[MIT](https://github.com/Lcfvs/curryable/blob/master/licence.md)
