# <a name="reference">curryable</a>

An utility to make any function repeatedly curryable

## <a name="install">Install</a>

`npm i @lcf.vs/curryable`

## <a name="usage">Usage</a>

```js
import curryable from '@lcf.vs/curryable'

const log = curryable((...values) => console.log(values), 0)

log(1, 2, 3) // [0, 1, 2, 3]
log.curry(1, 2, 3)(4, 5, 6) // [0, 1, 2, 3, 4, 5, 6]
log.curry(1, 2, 3).curry(4, 5, 6)(7, 8, 9) // [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
```

## <a name="api">API</a>

```js
import curryable from '@lcf.vs/curryable'

const fn = curryable(fn)
const newFn = fn.curry(...args)
```

```js
import {curry} from '@lcf.vs/curryable'

const newFn = curry(fn, ...args)
```


## <a name="license">License</a>

[MIT](https://github.com/Lcfvs/anticore/blob/master/licence.md)
