'use strict';
// --------  STRING METHODS  -------- //
// IIFE function that wraps all our code
(function() {

    // function returning a single parameter
    function readInput(str) {
        return str;
    }
    console.log(readInput('hello'));

    // function finding a parameters length
    function stringLength(str) {
        return str.length;
    }
    console.log(stringLength('hello people'));

    // reversing a string
    function reverseString(str) {
        return str.split('').reverse().join('');
    }
    console.log(reverseString('hello world'));

    //indexOf function
    var str = 'Nicholas Adams';
    console.log(str.indexOf('c'));

    // logging the length of variable str
    console.log(str.length);

    // remove first character of a string(substring or substr)
    console.log(str.substr(7));

    // changing the str variable to all upper case
    console.log(str.toUpperCase());

    // changing the str variable to all lower case
    console.log(str.toLowerCase());

    // replacing parts of our string using the replace method
    console.log(str.replace('Nicholas', 'Nick'));

})()