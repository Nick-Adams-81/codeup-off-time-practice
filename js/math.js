'use strict';
// IIFE function that will wrap all our js
(function() {


    // Addition
    function add(a, b) {
        return a + b;
    }
    console.log(add(2, 4));

    // subtraction
    function subtract(a, b) {
        return a - b;
    }
    console.log(subtract(6, 3));

    // Multiply
    function multiply(a, b) {
        return a * b;
    }
    console.log(multiply(3, 6));

    // Divide
    function divide(a, b) {
        return a / b;
    }
    console.log(divide(9, 3));

    // Remainder(modulus operator)
    function remainder(a, b) {
        return a % b;
    }
    console.log(remainder(9, 7));

    // Creating three parameters that will take in an operator and two numbers
    // and using if, else if, and else statements to check the operator and run appropriate math
    function doMath(operator, a, b) {
        if(operator === '+') {
            return a + b;
        } else if(operator === '-') {
            return a - b;
        } else if(operator === '*') {
            return a * b;
        } else if(operator === '/') {
            return a / b;
        } else {
            return a % b;
        }
    }

    console.log(doMath("*", 6, 5));


})()