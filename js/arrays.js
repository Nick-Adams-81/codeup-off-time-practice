'use strict';

(function() {

    var names = ['Nick', 'Chris', 'Jenny', 'leon', 'Neo', 'Mr. Pink'];

    // finding the length of an array
    console.log(names.length);

    // finding the index of one item in the array
    console.log(names.indexOf('Jenny'));

    // inserting an item to the front of the array
    names.unshift('T-1000');
    console.log(names);

    // inserting an item to the end of an array
    names.push('Hal-9000');
    console.log(names);

    // removing an item from beginning of an array
    names.shift();
    console.log(names);

    // removing an item from the end of an array
    names.pop();
    console.log(names);

    // selecting specific items in an array
    var newNames = names.slice(0,3);
    console.log(newNames);

    // looping forward through an array
    for(var i = 0; i < names.length; i++) {
        console.log(names[i]);
    }
})()