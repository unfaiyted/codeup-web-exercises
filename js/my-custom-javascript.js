"use strict";

$(document).ready(function () {


    $('li').css('font-size', '20px');
    $('h1, p, li').css('background-color', '#FFFF00');

    $('h1').each(function () {

        alert($(this).html());
    })


});