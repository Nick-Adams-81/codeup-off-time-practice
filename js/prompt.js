'use strict';

(function() {
    // prompt asking a users name
    var name = prompt('Whats is your name?');
    alert('Nice to meet you ' + name);

    // prompt asking a users favorite food
    var food = prompt('What is your favorite food ' + name + '?');
    alert(food + ' is my favorite too ' + name + '!');

    var sport = prompt('What is your favorite sport ' + name + '?');
    alert('I love ' + sport + ' too ' + name + '!!!');


})()