//(menu.js / header fixed JS) 

$(document).ready(function () {
    $('.menu-toggle').click(function () {
        $(this).toggleClass('active');
        $('.nav-list').toggleClass('show')
    });
});

$(window).on("scroll", function () {
    if ($(window).scrollTop() > 50) {
        $(".header").addClass("active");
    } else {
        $(".header").removeClass("active");
    }
});
