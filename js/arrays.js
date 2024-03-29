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

    // turning a string into an array using split

    var namesString = 'Nick|Walt|Jenny|T-1000|Hal-9000';
    console.log(namesString)
    var newNamesArray = namesString.split('|');
    console.log(newNamesArray);

    // turning an array into a string with join
    var newNamesString = newNamesArray.join(',');
    console.log(newNamesString);

    // taking special chars out of a string using a forEach loop

    var numbers = '123-456-7890|555-555-5555|987-654-3210';
    var newNumbers = numbers.split('|');
    console.log(newNumbers);

    newNumbers.forEach(function(number) {
        var newNumber = number.split('-').join('');
        console.log(newNumber);
    })

    console.log(newNumbers);

    newNumbers.forEach(function(number, index, array) {
        console.log(number, index, array);
    })

    function add(a, b) {
        if(isNaN(parseInt(a)) || isNaN(parseInt(b))) return false
        else return parseInt(a) + parseInt(b)
    }
    function increment(input) {
        if(isNaN(parseInt(input))) return false
        else return ++input
    }
    function square(input) {
        if(isNaN(parseInt(input))) return false
        else return input * input
    }

    const palindrome = (input) => {
        if(typeof input !== 'string') {
            return false
        } else {
            let forward = input.toLowerCase()
            let reverse = input.split('').reverse().join('').toLowerCase()
            return forward === reverse;
        }

    }

    function revStr(input) {
        return input.split('').reverse().join('')
    }

    const revNum = (num) => {
        return parseFloat(num.toString().split('').reverse().join(''))
    }

    console.log(revStr('hello'));
    console.log(palindrome('bob'));
    console.log(increment(2));
    console.log(add(2, 5));
    console.log(square(6));
    console.log(revNum(12345));







})()