"use strict";

$(document).ready(function() {


    $('li').css('font-size', '20px').css('background-color', '#FFFF00');
    $('h1').css('background-color', '#FFFF00');
    $('p').css('background-color', '#FFFF00');


    $('h1').each(function () {

        alert($(this).html());
   })


});