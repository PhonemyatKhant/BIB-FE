$(document).ready(function () {
    $('.hl-box > div').heightLine({
        fontSizeCheck: true, minWidth: 500,
    })
    $('.add-content').click(function () {
        $('.hl-box > div').eq(1).append('kasjkfjas asdlkfjlskdj sadlkfjal j akdljsfa')
        $('.hl-box > div').heightLine("refresh")
    })
    $('.delete-content').click(function () {
        $('.hl-box > div').eq(1).empty()
        $('.hl-box > div').heightLine("refresh")
    })
})