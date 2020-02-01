'use strict'

/*
 * Create a function `yell` that takes a string
 * and return the same string but all in upper case
 *
 * @next cut
 */

const yell = (str) => {
    let min = []
    let Str = ""

    for(let i = 0; i < str.length; i++){
        min.push(str[i].charCodeAt(0))
    }

    const maj = min.map(x => x - 32)

    for(let i = 0; i < str.length; i++){
        Str += String.fromCharCode(maj[i])
    }
    return Str
}
// You must write your own tests
const assert = require('assert')

assert.strictEqual(typeof yell, 'function')
assert.strictEqual(yell.length, 1)
assert.strictEqual(yell("abcdefghijklmnopqrstuvwxyz"), "ABCDEFGHIJKLMNOPQRSTUVWXYZ")
assert.strictEqual(yell("masterid"), "MASTERID")
assert.strictEqual(yell("matrixid"), "MATRIXID")

// throw Error('No tests !')
