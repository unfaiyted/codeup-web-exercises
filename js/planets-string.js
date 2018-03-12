(function(){
    "use strict";

    var planetsString = "Mercury|Venus|Earth|Mars|Jupiter|Saturn|Uranus|Neptune";
    var planetsArray;

    /**
     * Convert planetsString to an array, and save it in a variable named
     * planetsArray.
     * console.log planetsArray to check your work
     */
    planetsArray = planetsString.split('|');

    console.log(planetsArray);

    /**
     * Create a string with <br> tags between each planet. console.log() your
     * results. Why might this be useful?
     *  -> Formatting the output to be displayed in a webpage.

     */
    var multiLinePlanetString = '';

    planetsArray.forEach(function (planet) {

        multiLinePlanetString = multiLinePlanetString + planet + "<br>";

    });

    console.log(multiLinePlanetString);


    /**
     * BONUSSSSSSSSSES
     * Create another string that would display your planets in an undordered
     * list. You will need an opening AND closing <ul> tags around the entire
     * string, and <li> tags around each planet.
     */

    var htmlPlanetString = '<ul>';

    planetsArray.forEach(function (planet) {

        htmlPlanetString += '\n<li>' + planet + '<\\li>';

    });

    htmlPlanetString += "\n<\\ul>";

    console.log(htmlPlanetString);


})();
