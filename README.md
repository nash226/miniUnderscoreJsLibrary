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

- Core functions and their purposes:

  ### Array Methods
  - **first(array)** — Returns the first element of an array.
  - **last(array)** — Returns the last element of an array.
  - **without(array, ...values)** — Returns a new array excluding all specified values.
  - **range(start, end)** — Returns an array of numbers from `start` up to (but not including) `end`. If one argument is given, it starts from `0`.
  - **pluck(array, key)** — Extracts values for the given key from an array of objects.
  - **where(array, properties)** — Returns all objects that match the given key-value pairs.
  - **findWhere(array, properties)** — Returns the first object that matches the given key-value pairs.
  - **lastIndexOf(array, value)** — Returns the last index at which a given value can be found.
  - **sample(array, [n])** — Returns one or multiple random elements from the array.

  ### Object Methods
  - **keys(object)** — Returns an array of an object’s own enumerable property names.
  - **values(object)** — Returns an array of an object’s own enumerable property values.
  - **extend(target, ...sources)** — Copies properties from one or more source objects into the target object.
  - **pick(object, ...keys)** — Returns a new object containing only the specified keys.
  - **omit(object, ...keys)** — Returns a new object excluding the specified keys.
  - **has(object, key)** — Checks whether the object has the specified key as its own property.

  ### Type Checking
  - **isElement(value)** — Returns true if the value is a DOM element.
  - **isArray(value)** — Returns true if the value is an array.
  - **isObject(value)** — Returns true if the value is an object or function.
  - **isFunction(value)** — Returns true if the value is a function.
  - **isBoolean(value)** — Returns true if the value is a boolean or Boolean object.
  - **isString(value)** — Returns true if the value is a string or String object.
  - **isNumber(value)** — Returns true if the value is a number or Number object.

- Fully tested in the browser with visual pass/fail output
- No dependencies — written entirely in vanilla JavaScript

---

## Example Usage

```js
_.range(5);             // [0, 1, 2, 3, 4]
_([1, 2, 3, 4]).first() // 1
_([1, 2, 3, 4]).last()  // 4
_([1, 2, 3, 4]).without(2, 4); // [1, 3]

const data = [{foo: 'bar'}, {foo: 'baz'}];
_([data]).pluck('foo'); // ['bar', 'baz']
```

---

## Tests

To run the automated tests:

1. Open **index.html** in your browser.
2. All results will appear as a list showing pass or fail for each test.

---

## Project Structure

```
.
├── underscore.js     # Main library implementation
├── tests.js          # Test suite
├── index.html        # Browser runner for tests
└── README.md
```

---
