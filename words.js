'use strict'

/*
 * Create a function `words` that take a string
 * and return an array of each words using space as a delimiter
 *
 * @next whisper
 */

 const words = (str) => {
    let sentences = ""
    //let len = str.length - Math.floor(str.length/2)
    let arr = []
    for(let i = 0; i < str.length; i++){

        if(str[i] === ' '){
            arr.push(sentences)
            sentences = ""
        }

        else{
            sentences += str[i]
            if(i === (str.length - 1)){
                arr.push(sentences)
            }
        } 
    }
    return arr
 }


//* Begin of tests
const assert = require('assert')

assert.strictEqual(typeof words, 'function')
assert.strictEqual(words.length, 1)
assert.deepStrictEqual(words('a b c'), [ 'a', 'b', 'c' ])
assert.deepStrictEqual(words('a 1 c'), [ 'a', '1', 'c' ])
assert.deepStrictEqual(words('a 1 c d e f'), [ 'a', '1', 'c', 'd', 'e', 'f' ])
assert.deepStrictEqual(words('wol.lol lo,lol'), [ 'wol.lol', 'lo,lol'])
// End of tests */
