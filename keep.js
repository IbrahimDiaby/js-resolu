'use strict'

/*
 * Create a function `keepFirst` takes a string
 * and only keep the 2 first characters
 *
 * Create a function `keepLast` takes a string
 * and only keep the 2 last characters
 *
 * Create a function `keepFirstLast` takes a string
 * and only keep 2 characters from the third character
 *
 * @next capitalize
 */

const keepFirst = (str) => {
    let words = ""
    for(let i = 0; i < 2; i++){
        words += str[i]
    }
    return words
 }

 const keepLast = (str) => {
    let words = ""
    for(let i = str.length-2; i < str.length; i++){
        words += str[i]
    }
    return words
 }

 const keepFirstLast = (str) => {
    let words = ""
    for(let i = 2; i < 4; i++){
        words += str[i]
    }
    return words
 }

// You must write your own tests
//throw Error('No tests !')
const assert = require('assert')

assert.strictEqual(typeof keepFirst, 'function')
assert.strictEqual(typeof keepLast, 'function')
assert.strictEqual(typeof keepFirstLast, 'function')

assert.strictEqual(keepFirst.length, 1)
assert.strictEqual(keepLast.length, 1)
assert.strictEqual(keepFirstLast.length, 1)

assert.strictEqual(keepFirst('baab'), 'ba')
assert.strictEqual(keepFirst('Falled'), 'Fa')

assert.strictEqual(keepLast('abba'), 'ba')
assert.strictEqual(keepLast('MrLefa'), 'fa')

assert.strictEqual(keepFirstLast('MasterID'), 'st')
assert.strictEqual(keepFirstLast('MatrixID'), 'tr')
