$(document).ready(function () {
    $('.sec-list li a, .top-btn a').click(function (e) {
        let href = $(this).attr('href')

        $('html, body').animate({
            scrollTop: $(href).offset().top
        }, '300')

        e.preventDefault()
    })
})