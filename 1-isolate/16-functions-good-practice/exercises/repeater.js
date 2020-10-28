'use strict';

/* Repeater

  write a function that repeats a string, with all the good practices

  - documentation
  - default parameters
  - type guards

*/

/**
 * ___
 * @param {string} text - ___
 * @param {number} repeats - ___
 * @returns {string} ___
 */
const repeat = () => {

};

const _1_expect = 'aaaa';
const _1_actual = repeat('aaaa', 1);
console.assert(_1_actual === _1_expect, 'Test 1');

const _2_expect = '';
const _2_actual = repeat('', 12);
console.assert(_2_actual === _2_expect, 'Test 2');

const _3_expect = '';
const _3_actual = repeat('hoy!', 0);
console.assert(_3_actual === _3_expect, 'Test 3');

const _4_expect = 'abcabcabc';
const _4_actual = repeat('abc', 3);
console.assert(_4_actual === _4_expect, 'Test 4');


// test default parameters
const _5_expect = '-+-';
const _5_actual = repeat('-+-');
console.assert(_5_actual === _5_expect, 'Test 5: second default parameter');

const _6_expect = '';
const _6_actual = repeat();
console.assert(_6_actual === _6_expect, 'Test 6: both default parameters');


// test type guards
try {
  repeat(true, 1);
  console.assert(false, 'Test 7: did not throw an error');
} catch (err) {
  console.assert(err.name === 'TypeError', 'Test 7 a: error name');
  console.assert(err.message === 'text is not a string', 'Test 7 b: error message');
}

try {
  repeat('hi', null);
  console.assert(false, 'Test 8: did not throw an error');
} catch (err) {
  console.assert(err.name === 'TypeError', 'Test 7 a: error name');
  console.assert(err.message === 'repeats is not a number', 'Test 7 b: error message');
}

try {
  repeat(14, 'tree');
  console.assert(false, 'Test 9: did not throw an error');
} catch (err) {
  console.assert(err.name === 'TypeError', 'Test 7 a: error name');
  console.assert(err.message === 'text is not a string', 'Test 7 b: error message');
}
