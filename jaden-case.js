'use strict'

/*
 * Jaden Smith Case
 *
 * Make a function `jadenCase` that takes a String
 * and return jadenCase each words: "How are you ?" -> "How Are You ?"
 *
 * @next total
 */

const jadenCase = str => {
    let Str = ""
    let arr = []
    let test = true
    for(let i = 0; i < str.length; i++){
        if(test === true ){
            if((str[i].charCodeAt(0) >= 65 && str[i].charCodeAt(0) <= 90)){
                arr.push(str[i].charCodeAt(0))
            }

            else if((str[i].charCodeAt(0) >= 97 && str[i].charCodeAt(0) <= 122)){
                arr.push(str[i].charCodeAt(0) - 32)
            }

            else{
                arr.push(str[i].charCodeAt(0))
            }

            test = false
        }

        else if(str[i] === ' '){
            test = true
        }

        else{
            if((str[i].charCodeAt(0) >= 65 && str[i].charCodeAt(0) <= 90)){
                arr.push(str[i].charCodeAt(0) + 32)
            }

            else if((str[i].charCodeAt(0) >= 97 && str[i].charCodeAt(0) <= 122)){
                arr.push(str[i].charCodeAt(0))
            }

            else{
                arr.push(str[i].charCodeAt(0))
            }
        }
    }

    for(let i = 0; i < str.length; i++){
        Str += String.fromCharCode(arr[i])
    }

    return Str
}

// You must write your own tests
const assert = require('assert')

assert.strictEqual(typeof jadenCase, 'function')
assert.strictEqual(jadenCase.length, 1)
assert.strictEqual(jadenCase("maman"), "Maman")
assert.strictEqual(jadenCase("masterid"), "Masterid")
assert.strictEqual(jadenCase("matrixid"), "Matrixid")

//throw Error('No tests !')
