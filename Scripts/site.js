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
    $('ul.dropdown-content > li > a, ul.side-nav > li > a').on("click", function (e) {
        e.preventDefault();
        var href = $(this).attr('href');
        getContent(href, true);
        $(this).parent().siblings('li').removeClass('active');
        $(this).parent().addClass('active');
        $('.button-collapse').sideNav('hide');
    });
});

window.addEventListener("popstate", function (e) {
    getContent(location.pathname, false);
    $(function () {
        var current = location.pathname.replace('/', '');
        $('ul.dropdown-content > li > a, ul.side-nav > li > a').each(function () {
            var $this = $(this);            
            if ($this.attr('href').indexOf(current) !== -1) {
                $this.parent().addClass('active');
                if (current == 'index.html') {
                    $('#loadHome, loadHomem').parent().addClass('active');
                }
                $this.parent().siblings('li').removeClass('active');
            }
            
        })
    });
});

function getContent(url, addEntry) {
    $.get(url).done(function (data) {
        if (url != '/index.html') {
            $('#content').load(url);            
        } else if (url == '/index.html') {
            $('#content').load('home.html');
        }
        if (addEntry == true) {
            history.pushState(null, null, url);
        }
    });
};

