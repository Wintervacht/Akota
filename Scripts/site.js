﻿$(document).ready(function () {
    var $root = $('html, body');
    $("#content").load("home.html");
    $('.collapsible').collapsible();
    $("ul.dropdown-content > li > a, ul.side-nav > li > a").on("click", function () {
        $(this).parent().siblings('li').removeClass('active');
        $(this).parent().addClass('active');
        //$("#content").load($(this).attr('href'));
    });
    $("#loadHome, #loadHomem").on("click", function () {
        $("#content").load("home.html");
    });
    $("#loadCursus, #loadCursusm").on("click", function () {
        $("#content").load("aanbod.html");
    });
    $("#loadForm, #loadFormm").on("click", function () {
        $("#content").load("boeken.html");
    });
    $("#loadContact, #loadContactm").on("click", function () {
        $("#content").load("contact.html");
    });
    $(".dropdown-button").dropdown({
        constrain_width: false,
        hover: true,
        belowOrigin: true
    });
    $('.button-collapse').sideNav({
        closeOnClick: true,
        draggable: true
    });
});