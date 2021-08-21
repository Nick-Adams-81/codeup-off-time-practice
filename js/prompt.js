'use strict';

(function() {

    // ---------- PROMPTS AND ALERTS ---------- //

    // prompt asking a users name
    var name = prompt('Whats is your name?');
    alert('Nice to meet you ' + name);

    // prompt asking a users favorite food
    var food = prompt('What is your favorite food ' + name + '?');
    alert(food + ' is my favorite too ' + name + '!');

    // prompt asking user what there favorite sport is
    var sport = prompt('What is your favorite sport ' + name + '?');
    alert('I love ' + sport + ' too ' + name + '!!!');

    // verifying user info up til this point
    alert('So ' + name + ', your favorite food is ' + food + ', and your favorite sport is ' + sport + '.');

    // asking the user one last question
    var lastQ = prompt('Last question ' + name + ', who has the best coding bootcamp ever?');
    alert('That\'s right ' + name + '! ' + lastQ + ' has the best coding bootcamp ever!!!');
    alert('Well ' + name + ', it was nice to meet you! We should go to a ' + sport + ' game soon and get some ' + food + ' when were there, ' +
        'when you have free time from ' + lastQ + ' that is!');

})();