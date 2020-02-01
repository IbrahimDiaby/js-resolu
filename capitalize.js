'use strict'

/*
 * Create a function `capitalize` takes a string
 * and transform to upper case only the first letter
 *
 * @next jaden-case
 */

const capitalize = str => {
    let Str = ""
    let arr = []

    for(let i = 0; i < str.length; i++){
        arr.push(str[i].charCodeAt(0))
    }

    Str += String.fromCharCode(arr[0] - 32)
    
    for(let i = 1; i < str.length; i++){
        Str += str[i]
    }

    return Str
}

// You must write your own tests
const assert = require('assert')

assert.strictEqual(typeof capitalize, 'function')
assert.strictEqual(capitalize.length, 1)
assert.strictEqual(capitalize("maman"), "Maman")
assert.strictEqual(capitalize("masterid"), "Masterid")
assert.strictEqual(capitalize("matrixid"), "Matrixid")

//throw Error('No tests !')
