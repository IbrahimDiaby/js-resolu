'use strict'

/*
 * Create the function `cutFirst` that takes a string and remove the 2 last characters
 * Create the function `cutLast` that takes a string and remove the 2 first charcters
 * Create the function `cutFistLast` that takes a string
 * and remove the 2 first charcters and 2 last characters
 *
 * @next keep
 */

 const cutFirst = (str) => {
    let words = ""
    for(let i = 0; i < str.length-2; i++){
        words += str[i]
    }
    return words
 }

 const cutLast = (str) => {
    let words = ""
    for(let i = 2; i < str.length; i++){
        words += str[i]
    }
    return words
 }

 const cutFirstLast = (str) => {
    let words = ""
    words = cutFirst(str)
    words = cutLast(words)
    return words
 }

// You must write your own tests
//throw Error('No tests !')

//* Begin of tests
const assert = require('assert')

assert.strictEqual(typeof cutFirst, 'function')
assert.strictEqual(typeof cutLast, 'function')
assert.strictEqual(typeof cutFirstLast, 'function')

assert.strictEqual(cutFirst.length, 1)
assert.strictEqual(cutLast.length, 1)
assert.strictEqual(cutFirstLast.length, 1)

assert.strictEqual(cutFirst('baab'), 'ba')
assert.strictEqual(cutFirst('Falled'), 'Fall')

assert.strictEqual(cutLast('abba'), 'ba')
assert.strictEqual(cutLast('MrLefa'), 'Lefa')

assert.strictEqual(cutFirstLast('MasterID'), 'ster')
assert.strictEqual(cutFirstLast('MatrixID'), 'trix')

// End of tests */