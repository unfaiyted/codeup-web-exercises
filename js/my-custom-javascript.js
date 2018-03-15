"use strict";

$(document).ready(function () {


    // Change bg color on click
    $('h1').click(function () {
        $(this).css('background-color','#FFFF00');
    });

    // Change font size on double click
    $('p').dblclick(function () {
        $(this).css('font-size','18px');
    });

    // Change text color on hover
    $('li').hover(function () {
        $(this).css('color','red');

        }, function () {
        $(this).css('color','black');
        }
    );


});