'use strict';

/**
 * Break and Continue
 */


function outputLog(){

}

/**
 * Prompt the user for an odd number between 1 and 50 (max). Use a loop and a break statement to continue prompting
 * the user if they enter invalid input.
 * @param max
 * @returns {string}
 */
function userOddInput(max) {
    max = (max !== undefined) ? max : 50;
    var input = prompt('Input odd number less than ' + max);
    var invalidUserInput = true;

    while(invalidUserInput === true) {

        if ((parseInt(input) % 2) !== 0 && parseInt(input) <= max) {
            break;
        }
        input = prompt('Input odd number less than ' + max);
    }
    return input;
}

//userOddInput();


/**
 * Use a loop and the continue statement to output all the odd numbers between 1 and 50,
 * except for the number the user entered.
 */

function outputLoop(max) {
    max = (max !== undefined) ? max : 50;
    var userInput = userOddInput(max);

    console.log('Number to skip: ' + userInput);

    for (var i = 1; i <= max; i++) {

        if (i % 2 === 0) {
            continue;
        }


        if (i === parseInt(userInput)) {
            console.log('OH NO!!! Skipping : ' + i);
        } else {
            console.log('Here is an odd number: ' + i);
        }

    }
}

outputLoop();
