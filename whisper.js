'use strict'

/*
 * Create a function `whisper` that takes a string
 * and return the same string but all in lower case
 *
 * @next yell
 */

const whisper = (str) => {
    let min = []
    let Str = ""

    for(let i = 0; i < str.length; i++){
        min.push(str[i].charCodeAt(0))
    }

    const maj = min.map(x => x + 32)

    for(let i = 0; i < str.length; i++){
        Str += String.fromCharCode(maj[i])
    }
    return Str
}
// You must write your own tests
const assert = require('assert')

assert.strictEqual(typeof whisper, 'function')
assert.strictEqual(whisper.length, 1)
assert.strictEqual(whisper("ABCDEFGHIJKLMNOPQRSTUVWXYZ"), "abcdefghijklmnopqrstuvwxyz")
assert.strictEqual(whisper("MASTERID"), "masterid")
assert.strictEqual(whisper("MATRIXID"), "matrixid")

// throw Error('No tests !')
