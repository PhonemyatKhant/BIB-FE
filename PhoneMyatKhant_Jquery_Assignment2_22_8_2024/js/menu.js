$(document).ready(function () {
    $('.menu-toggle').click(function () {
        var right = 0
        if ($(this).hasClass('active')) {
            $('.gnav').css({ "right": "-300px" })
            $(this).removeClass('active')
        } else {
            $(this).addClass('active')
            $('.gnav').css({ "right": "0" })
        }
    })
})