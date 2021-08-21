'use strict';

(function() {


    // for loop counting up
    for(var i = 0; i < 10; i++)
        console.log(i);

    // for loop counting down
    for(var i = 10; i > 0; i--) {
        console.log(i);
    }

    // while loop
    var num = 0;
    while(num < 6) {
        console.log(num);
        num++;
    }

    // do while loop
    var number = 0;
    do {
        console.log(number);
        number++;
    } while(number < 9);


})()