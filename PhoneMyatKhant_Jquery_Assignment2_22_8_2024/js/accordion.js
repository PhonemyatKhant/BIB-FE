$(document).ready(function () {
    $('.accordion-content').hide();

    $('.accordion-ttl').click(function () {
        $(this).toggleClass('active');
        $(this).next('.accordion-content').slideToggle();
        $('.accordion-ttl').not(this).removeClass('active').next('.accordion-content').slideUp();
    });
});
