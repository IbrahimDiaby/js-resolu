'use strict'

/*
 * Create function `fizzBuzz` that print numbers from 1 to 100
 * But for multiples of three, print "Fizz” instead of the number
 * and for the multiples of five, print "Buzz".
 * For numbers which are multiples of both three and five, print "FizzBuzz".
 *
 * use console.log to print
 *
 * Français:
 * Créer la fonction `FizzBuzz` qui affiche les nombres de 1 à 100
 * Mais pour les multiples de trois, affiche "Fizz" à la place du nombre
 * et pour les multiples de cinq, affiche "Buzz".
 * Pour les nombres qui sont des multiples de trois et de cinq, affiche "FizzBuzz".
 *
 * Utilisez console.log pour afficher.
 * @next price-is-right
 */

//  const fizzBuzz = () => {
//     for(let i = 1; i <= 100; i++){
//         if(i%3 === 0){
//             if(i%5 === 0){
//                 console.log("FizzBuzz")
//             }

//             else{
//                 console.log("Fizz")
//             }
//         }

//         else if(i%5 === 0){
//             console.log("Buzz")
//         }

//         else{
//             console.log(i)
//         }
//     }
//  }


// fizzBuzz()

const fizzBuzz = (i) => {
    if(i%3 === 0){
        if(i%5 === 0){
            return "FizzBuzz"
        }

        else{
            return "Fizz"
        }
    }

    else if(i%5 === 0){
        return "Buzz"
    }

    else{
        return `${i}`
    }
}


// You must write your own tests
//throw Error('No tests !')

const assert = require("assert")

assert.strictEqual(typeof fizzBuzz, "function")
assert.strictEqual(fizzBuzz.length, 1)
assert.strictEqual(fizzBuzz(3), "Fizz")
assert.strictEqual(fizzBuzz(5), "Buzz")
assert.strictEqual(fizzBuzz(15), "FizzBuzz")
assert.strictEqual(fizzBuzz(2), '2')