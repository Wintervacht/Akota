$(document).ready(function () {
    var $root = $('html, body');
    $('ul.side-nav > li > a, ul.dropdown-content > li > a').click(function () {
        $root.animate({
            scrollTop: $('[name="' + $.attr(this, 'href').substr(1) + '"]').offset().top
        }, 700);
        $('.button-collapse').sideNav('hide');
        return false;
    });

    if ($(window).width() < 600) {
        $('#vertical').removeClass('valign-wrapper');
    };

    $(".dropdown-button").dropdown({
        constrain_width: false,
        hover: false,
        belowOrigin: true
    });

    $('.button-collapse').sideNav({
        closeOnClick: true
    });
});