'use strict';

(function() {

    var names = ['Nick', 'Chris', 'Jenny'];

    // finding the length of an array
    console.log(names.length);

    // finding the index of one item in the array
    console.log(names.indexOf('Jenny'));

    // inserting an item to the front of the array

    names.unshift('T-1000');
    console.log(names);

})()