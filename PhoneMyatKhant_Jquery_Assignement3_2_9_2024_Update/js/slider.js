$(document).ready(function () {
    $('.slick-prev,.slick-next').text("");
});

$('.single-item').slick();

$('.multiple-items').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3
});


$('.responsive').slick({
    dots: false,
    infinite: false,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: false
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
});


$('.variable-width').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    centerMode: true,
    variableWidth: true
});

$('.one-time').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    adaptiveHeight: true
});
$('.data-atb-slick').slick({
    dots: false,
    infinite: true,
    speed: 300,

});
$('.center-mode').slick({
    dots: false,
    infinite: true,
    speed: 300,
    centerMode: true,
    centerPadding: '60px',
    slidesToShow: 3
});

$('.lazy').slick({
    lazyLoad: 'ondemand',
    slidesToShow: 3,
    slidesToScroll: 1
});
$('.auto-play').slick({
    dots: false,
    infinite: true,
    speed: 300,
    autoplay: true,
    autoplaySpeed: 500,
    slidesToShow: 3
});

$('.fade').slick({
    dots: false,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear'
});


let slideIndex = 0;

$('.add-remove').slick({
    slidesToShow: 3,
    slidesToScroll: 3
});

$('.js-add-slide').on('click', function () {
    $('.add-remove').slick('slickAdd', '<div><img src="/img/back-pain.jpeg" alt="backpain"></div>');
    slideIndex++;
});

$('.js-remove-slide').on('click', function () {
    if (slideIndex > 0) {
        $('.add-remove').slick('slickRemove', slideIndex - 1);
        slideIndex--;
    }
});


$('.filtering').slick({
    slidesToShow: 4,
    slidesToScroll: 4
});

var filtered = false;

$('.js-filter').on('click', function () {
    if (filtered === false) {
        $('.filtering').slick('slickFilter', '.filter-this');
        $(this).text('Unfilter Slides');
        filtered = true;
    } else {
        $('.filtering').slick('slickUnfilter');
        $(this).text('Filter Slides');
        filtered = false;
    }
});

$('.slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.slider-nav'
});
$('.slider-nav').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.slider-for',
    dots: false,
    centerMode: true,
    focusOnSelect: true
});
$('.single-item-rtl').slick({
    rtl: true
});
