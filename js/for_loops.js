'use strict';

/**
 * FOR LOOPS
 * */


/**
 * Create a function named showMultiplicationTable that accepts a number and console.logs the multiplication
 * table for that number (just multiply by the numbers 1 through 10)
 * @param number
 */
function showMultiplicationTable(number) {
    var total;

    for(var i = 1; i <= 10; i++) {
        total = i*number;
        console.log(number + ' x ' + i + ' = ' + total);
    }


}

showMultiplicationTable(10);


/**
 * Returns random value between min and max values
 * @param min
 * @param max
 * @returns {*}
 */
function randomValue(min,max) {
    return  Math.floor(Math.random() * (max - min + 1)) + min;
}


/**
 *  Use a for loop and the code from the previous lessons to generate 10 random numbers
 *  between 20 and 200 and output to the console whether each number is odd or even. For example:
 * @param number
 * @param min
 * @param max
 */
function showRandomValues(number, min, max) {

    var random;
    for(var i = 1; i <= number; i++) {
        random = randomValue(min, max);
        console.log((random % 2 === 0) ? random + ' is even' : random + ' is odd');
    }

}

// 10 Random values between 20 and 200.
showRandomValues(10,20, 200);


/**
 * Shows digits the number of times the digit represents.
 * i.e One 1, Two, 2's...
 * @param max
 */
function showDigitsMultipleTimes(max) {
    var string;

    for(var i = 1; i <= max;i++) {
         string = '';
        for (var k=1; k <= i;k++) {
            string = string + i;
        }
        console.log(string);
    }


}

showDigitsMultipleTimes(9);

/**
 * Subtract the value from max and print out the new value till zeroed out
 * @param max
 * @param subtract
 */
function subtractValueFromMax(max, subtract) {
    for (var i = max; i >= 0; i= i- subtract) {
       console.log(i);
    }

}

subtractValueFromMax(100, 5);