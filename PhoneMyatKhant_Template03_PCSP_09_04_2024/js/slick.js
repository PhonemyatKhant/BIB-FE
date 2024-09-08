$(document).ready(function () {
    $('.slick-prev').text("")
    $('.slick-prev').css({ "width": "20px", "height": "40px" })
    $('.slick-next').text("")
    $('.slick-next').css({ "width": "20px", "height": "40px" })
    $('.slick-dots li button').text("")
})
$('.multiple-items').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    dots: true
});
