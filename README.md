# JavaScript Utility Library

A lightweight JavaScript utility library inspired by Underscore.js.  
Implements core helper methods for arrays, objects, and type checking — all supporting both static (`_.method(obj)`) and chainable (`_(obj).method()`) syntax.  

Includes a built-in browser-based test suite that verifies functionality and edge cases.

---

## Features

- Chainable and static syntax:
  ```js
  _(array).first();
  _.first(array);
  ```

- Core functions:
  - first, last, without, range, pluck, where, findWhere
  - keys, values, extend, pick, omit, has
  - Type checks: isElement, isArray, isObject, isFunction, isBoolean, isString, isNumber
- Fully tested in the browser with visual pass/fail output
