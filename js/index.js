'use strict';
// IIFE function that will wrap all our js
(function() {
    // finding the length of a string //
    function  stringLength(str) {
        for(var i = 0; i < str.length; i++) {
            return str.length;
        }
    }
    console.log(stringLength('hello cruel worl'));

    // reversing a string //
    function revString(str) {
        return str.split('').reverse().join('');
    }
    console.log(revString('hello'));

    // basic math //

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
})()