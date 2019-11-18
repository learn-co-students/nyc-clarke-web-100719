// function definition
// function sayHello(){
const sayHello = function(){
    hello = "sup dawg"
    console.log(hello);
}
// assigning functions to values and anonymous functions
const alex = {
    name: 'alex',
    sayHello: sayHello,
    sayGoodbye: function(){ console.log('bye guys :( see you downstairs')}
}

// LOOKING TO GET AHEAD? Checkout Object.assign and Array.from for copying object/arrays into new locations in memory
// const alex2 = Object.assign()

// HIGHER ORDER FUNCTIONS 
// 1. Take a function as an argument
function outerFunc(innerFunc){
    // console.log('INSIDE OUTERFUNC',innerFunc)
    // console.log(innerFunc(5))
    return innerFunc(5)
}
function multiplierBy2(num){
    return num * 2
}

outerFunc(multiplierBy2)
console.log(outerFunc(multiplierBy2))
// outerFunc(sayHello)

// 2. Return a function
function multiplyBy(outerNum){
    return function(num){
        return num * outerNum
    }
}

// now multipleBy137 contains function(num){ return num * outerNum } and 137 is outerNum
const multipleBy137 = multiplyBy(137)

// invoking multipleBy137(10) makes 10 num during this invocation of the function 
multipleBy137(10)

// BENEFIT OF HOFS
// this guy doesn't have to know ANYTHING about the calculations of taxCalculator
function calculateTotalCost(taxCalculator, amount){
    let taxes = taxCalculator(amount)

    return taxes + amount
}

function NJSalesTax(amount){
    return 0.06625 * amount
}

function NYSalesTax(amount){
    return 0.08875 * amount
}

function NYIncomeTax(amount){
    // this behavior can be BANANAS 
    return // whatever taxes after calculation 
}

// WHEN DO WE USE CALLBACKS?
// LOOKING AHEAD callbacks and the DOM
// button.addEventListener('click', function(){})

// Array methods including map, filter, and forEach
[1,2,3].map(function(num){ return num * 2 })






// NOTES ON HOISTING AND LET/CONST

// let hello = "Hi"
// console.log("BEFORE", hello) ==> BEFORE Hi


// sayHello() ==> sup dawg

// console.log('AFTER', hello) ==> AFTER sup dawg


// // sayHello('hey friends')


// alternate  definition  of sayHello that uses default arguments
// function sayHello(message="hey"){
//     console.log(message)

//     // returning to get out of your code? use semicolon
//     // return;

//     // anything after return is NEVER EXECUTED
//     // console.log('byeeee')
// }

// // reference
// sayHello

// // invocation of the function
// sayHello('saying hello a second time')
// // var a = sayHello()

// // console.log(a)



// Differences between functions in ruby and JS 
// function instead of def
// syntax curlyBois
// parentheses required for js but not ruby
// camelCase in JS and snake_case in ruby 