'use strict';

(function() {

    // var names = ['Nick', 'Chris', 'Jenny', 'leon', 'Neo', 'Mr. Pink'];
    //
    // // finding the length of an array
    // console.log(names.length);
    //
    // // finding the index of one item in the array
    // console.log(names.indexOf('Jenny'));
    //
    // // inserting an item to the front of the array
    // names.unshift('T-1000');
    // console.log(names);
    //
    // // inserting an item to the end of an array
    // names.push('Hal-9000');
    // console.log(names);
    //
    // // removing an item from beginning of an array
    // names.shift();
    // console.log(names);
    //
    // // removing an item from the end of an array
    // names.pop();
    // console.log(names);
    //
    // // selecting specific items in an array
    // var newNames = names.slice(0,3);
    // console.log(newNames);
    //
    // // looping forward through an array
    // for(var i = 0; i < names.length; i++) {
    //     console.log(names[i]);
    // }
    //
    // // looping backward through an array
    // for(var i = names.length - 1; i >= 0; i--) {
    //     console.log(names[i])
    // }
    //
    // // forEach loop
    // names.forEach(function(name, index, array) {
    //     console.log('This name: ' + name + ', is at index: ' + index);
    //     // how to log a specific item in array using its index
    //     console.log(array[1]);
    // })

    // turning a string into an array

    var namesString = 'Nick|Walt|Jenny|T-1000|Hal-9000';
    console.log(namesString)
    var newNamesString = namesString.split('|');
    console.log(newNamesString);
})()