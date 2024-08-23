$(document).ready(function () {
    $('.tabs-nav li:first-child').addClass('tab-active')
    $('.tab-content').hide()
    $('.tab-content:first').show()


    $('.tabs-nav li').click(function (e) {
        $('.tabs-nav li').removeClass('tab-active')
        $(this).addClass('tab-active')
        $('.tab-content').hide()

        let activeTab = $(this).find('a').attr('href')
        $(activeTab).fadeIn()
        e.preventDefault()
        return false
    })
})