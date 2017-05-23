$(document).ready(function () {
    var $root = $('html, body');
    $(".dropdown-button").dropdown({
        constrain_width: false,
        hover: true,
        belowOrigin: true
    });
    $('.button-collapse').sideNav({
        draggable: true
    });
    $("#content").load("home.html");
    $('.collapsible').collapsible();
    $("ul.dropdown-content > li > a, ul.side-nav > li > a").on("click", function () {
        $(this).parent().siblings('li').removeClass('active');
        $(this).parent().addClass('active');
        $("#content").load($(this).attr('href'));
        $('.button-collapse').sideNav('hide');
        return false;
    });    
});