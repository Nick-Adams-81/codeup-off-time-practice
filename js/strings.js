'use strict';
// --------  STRING MANIPULATION  -------- //
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

    //indexOf function
    var str = 'Nicholas Adams';
    console.log(str.indexOf(('N')));
    //logging the length of variable str
    console.log(str.length);
    // remove first character of a string(substring)
    console.log(str.substr(9));
})()