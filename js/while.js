/**
 * While Loops
 */


function doubleStart() {
    i = 2;
    while(i <= 65536) {
        console.log(i);
        i= i*2;
    }

}

/**
 * #2
 */
doubleStart();


/** #3
 * An ice cream seller can't go home until she sells all of her cones.
 Write a JS program that generates a random number between 50 and 100 representing the amount of cones to sell.
 Your code should generate numbers between 1 and 5, simulating the amount of cones being bought by her clients.
 Use a do-while loop to log to the console the amount of cones sold to each person.
 */

// This is how you get a random number between 50 and 100
var allCones = Math.floor(Math.random() * 50) + 50;

function soldAmount(min,max) {
  return  Math.floor(Math.random() * max) + min;
}


function calcConeSells(coneTotal) {


   var i = 1;
   var soldAttempt;

    do {
        soldAttempt = soldAmount(1,5);

       var actualSold  = (coneTotal >= soldAttempt) ?  soldAttempt : coneTotal;

       console.log((actualSold === soldAttempt) ?  '('+ i +') ' + 'Sold: ' + actualSold  :  '('+ i +') ' + 'Could only sell...' + soldAttempt );

        coneTotal = coneTotal - actualSold;
        i++;

    } while (coneTotal > 0);

}

calcConeSells(allCones);