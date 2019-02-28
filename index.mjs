const assign = Object.assign

const members = {
  /**
   * Returns a reduced function from `this`, with a `.curry` method to repeat
   * the process on the new one
   * @param {...*} args
   * @return {Function&object}
   */
  curry (...args) {
    return assign(curry(this, ...args), members)
  }
}

/**
 * Returns a reduced function from `fn`, with a `.curry` method to repeat the
 * process on the new one
 * @param {Function} fn
 * @param {...*} args
 * @return {Function&Object}
 */
export default function curryable (fn, ...args) {
  return members.curry.call(fn, ...args)
}

/**
 * Returns a reduced function from `fn`
 * @param {Function} fn
 * @param {...*} args
 * @return {Function}
 */
export function curry (fn, ...args) {
  return fn.bind(this, ...args)
}

/**
 * Checks if `fn` has the provided `.curry()` method
 * @param {Function} fn
 * @return {boolean}
 */
export function isCurryable (fn) {
  return fn && fn.curry === members.curry
}
