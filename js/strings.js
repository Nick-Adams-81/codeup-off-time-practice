'use strict';

(function() {

    // function returning a string
    function readInput(str) {
        return str;
    }
    console.log(readInput('hello'));

    // function finding a strings length
    function stringLength(str) {
        return str.length
    }
    console.log(stringLength('hello people'));

    // reversing a string
    function reverseString(str) {
        return str. split('').reverse().join('')
    }
    console.log(reverseString('hello world'));
})()