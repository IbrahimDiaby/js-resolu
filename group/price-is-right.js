'use strict'

/*
 * Price is right
 * 1 can of soup is 650 FCFA
 * 3 can of soup is 1500 FCFA
 * 1 can of soup contains 500 ml
 *
 * Create a function `getCostCount` that takes a number of cans
 * and return the cost (and applying the 3 for 1500 FCFA discount)
 *
 * Create a function `getCostMl` that takes a quantity in milliliters
 * and return the cost (and applying the 3 for 1500 FCFA discount)
 */

 const getCostCount = (cans) => {
    if(cans === 1){
        return 650
    }

    else if(cans > 0 && cans < 3){
        return 650 + getCostCount(cans - 1)
    }

    else if(cans >= 3 ){
        return 1500 + getCostCount(cans-3)
    }

    else{
        return 0
    }
 }

 const getCostMl = (ml) => {
    if(ml === 500){
        return 650
    }

    else if(ml > 500 && ml < 1500){
        return 650 + getCostMl(ml-500)
    }

    else if(ml >= 1500){
        return 1500 + getCostMl(ml-1500)
    }

    else{
        return (ml*650)/500
    }
 }

// You must write your own tests
// throw Error('No tests !')

const assert = require("assert")

assert.strictEqual(typeof getCostCount, "function")
assert.strictEqual(typeof getCostMl, "function")
assert.strictEqual(getCostCount.length, 1)
assert.strictEqual(getCostMl.length, 1)
assert.strictEqual(getCostCount(1), 650)
assert.strictEqual(getCostMl(500), 650)
assert.strictEqual(getCostCount(2), 1300)
assert.strictEqual(getCostMl(1000), 1300)
assert.strictEqual(getCostCount(3), 1500)
assert.strictEqual(getCostMl(1500), 1500)
assert.strictEqual(getCostCount(5), 2800)
assert.strictEqual(getCostMl(2500), 2800)
assert.strictEqual(getCostCount(6), 3000)
assert.strictEqual(getCostMl(3000), 3000)
// assert.strictEqual(getCostCount(7), 3650)
assert.strictEqual(getCostMl(3250), 3325)




// console.log(getCostCount(6))
// console.log(getCostMl(3105))