$(document).ready(function () {
    var $root = $('html, body');
    $("#content").load("home.html");
    $('.collapsible').collapsible();
    $("ul.dropdown-content > li > a, ul.side-nav > li > a").on("click", function () {
        $(this).parent().siblings('li').removeClass('active');
        $(this).parent().addClass('active');
        $("#content").load($(this).attr('href'));
        //return false;
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