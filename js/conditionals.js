"use strict";

/**
 * Write some JavaScript that uses a `confirm` dialog to ask the user if they
 * would like to enter a number. If they click 'Ok', prompt the user for a
 * number, then use 3 separate alerts to tell the user:
 *
 * - whether the number is even or odd
 * - what the number plus 100 is
 * - if the number is negative or positive
 *
 * if what the user enters is not a number, use an alert to tell them that, and
 * do *not* display any of the above information.
 *
 * Can you refactor your code to use functions?
 */

function isEven(number) {
    return ((number % 2) === 0) ? 'even' : 'odd'
}

function plusHundred(number) {
    return parseInt(number)+100;
}

function sign(number) {
    if(parseInt(number) === 0) return "unsigned";
    return (number > 0) ? 'positive' : 'negative';
}

function numberEnter() {
    var  enterNumber = confirm("Do you want to enter a number?");
    if(enterNumber === true) {
            var number = prompt("What is your number?");
            alert("Your number is " + isEven(number));
            alert("100 more than your number is: " + plusHundred(number));
            alert("Your number is " + sign(number));

    }
    return

}

numberEnter();


/* ########################################################################## */

/**
 * Create a function named `analyzeColor` that accepts a string that is a color
 * name as input. This function should return a message that related to that
 * color. Only worry about the colors defined above, if the color passed is not
 * one of the ones defined above, return a message that says so
 *
 * Example:
 *  > analyzeColor('blue') // returns "blue is the color of the sky"
 *  > analyzeColor('red') // returns "Strawberries are red"
 *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
 *
 * You should use an if-else-if-else block to return different messages.
 *
 * Test your function by passing various string literals to it and
 * console.logging the function's return value
 */


function analyzeColor(color) {

    color = color.toLowerCase().replace(/\s/g,'');

    if (color === 'blue') {
        return "blue is the color of the sky";
    } else if (color === 'red') {
        return "Strawberries are red";
    } else if (color === 'yellow') {
        return "Yellow is like the sun sometimes.";
    } else if (color === 'green') {
        return "Green, are you saying I'm new?";
    } else if (color === 'orange') {
        return "Orange you going to tell me a joke?";
    } else if (color === 'indigo') {
        return "Wait where are we going?";
    } else if (color === 'violet') {
        return "These violet delights have violet ends";
    } else {
        return "I'm partially color blind, what color is " + color + "?";
    }
}


// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color everytime the page loads)
var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
var randomColor = colors[Math.floor(Math.random() * colors.length)];
/**
 * Pass the `randomColor` variable to your function and console.log the results.
 * You should see a different message everytime you refresh the page
 */
console.log(analyzeColor(randomColor));


/**
 * Refactor your above function to use a switch-case statement
 */


function analyzeColor(color) {

    color = color.toLowerCase().replace(/\s/g,'');

        switch(color) {
            case 'blue':
                return "blue is the color of the sky";
            case 'red':
                return "Strawberries are red";
            case 'yellow':
                return "Yellow is like the sun sometimes.";
            case 'green':
                return "Green, are you saying I'm new?";
            case 'orange':
                return "Orange you going to tell me a joke?";
            case 'indigo':
                return "Wait where are we going?";
            case 'violet':
                return "These violet delights have violet ends";
            default:
                return "I'm partially color blind, what color is " + color + "?";
        }


}



/**
 * Prompt the user for a color when the page loads, and pass the input from the
 * user to your `analyzeColor` function. Alert the return value from your
 * function to show it to the user.
 */

function promptColor() {
        var color = prompt("Type in a color?");
        alert(analyzeColor(color));

}

promptColor();




/* ########################################################################## */

/**
 * Suppose there's a promotion in Walmart, each customer is given a randomly
 * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
 * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
 * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
 * all for free!.
 *
 * Write a function named `calculateTotal` that accepts a lucky number and total
 * amount, and returns the discounted price.
 *
 * Example:
 * calculateTotal(0, 100) // returns 100
 * calculateTotal(4, 100) // returns 50
 * calculateTotal(5, 100) // returns 0
 *
 * Test your function by passing it various values and checking for the expected
 * return value.
 */

function calculateTotal(luckyNumber, value) {

    var discount = 0;

    switch(luckyNumber) {
        case 0:
            discount = 0;
            break;
        case 1:
            discount = 0.1;
            break;
        case 2:
            discount = 0.25;
            break;
        case 3:
            discount = 0.35;
            break;
        case 4:
            discount = 0.50;
            break;
        case 5:
            discount = 1.0;
            break;

    }

    return parseFloat(value) - ( discount * parseFloat(value));


}

/**
 * Uncomment the line below to generate a random number between 0 and 6.
 * Prompt the user for their total bill, then use your `calculateTotal` function
 * and alerts to display to the user what their lucky number was, what their
 * price before the discount was, and what their price after the discount is.
 */
// Generate a random number between 0 and 6
var luckyNumber = Math.floor(Math.random() * 6);



function userTotal() {
    var input = prompt("What was your total bill?");
    alert("Lucky Number: " + luckyNumber);
    alert("Price before discount: " + input
         +  "\nPrice after discount: " + calculateTotal(luckyNumber, input) );

}

userTotal();