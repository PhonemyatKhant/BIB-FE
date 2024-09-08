//Home Page Tabs 
$(document).ready(function () {
    $('.tab-blk').hide();
    $('.tab-blk').eq(0).show();
    $('.tab-btns li').eq(0).removeClass('active')
    $('.tab-btns li').eq(0).addClass('active')

    $('.tab-btns li').eq(0).click(function () {
        $('.tab-btns li').removeClass('active')
        $('.tab-btns li').eq(0).addClass('active')
        $('.tab-blk').hide();
        $('.tab-blk').eq(0).show();
    });
    $('.tab-btns li').eq(1).click(function () {
        $('.tab-btns li').removeClass('active')
        $('.tab-btns li').eq(1).addClass('active')
        $('.tab-blk').hide();
        $('.tab-blk').eq(1).show();
    });
    $('.tab-btns li').eq(2).click(function () {
        $('.tab-btns li').removeClass('active')
        $('.tab-btns li').eq(2).addClass('active')
        $('.tab-blk').hide();
        $('.tab-blk').eq(2).show();
    });
    //world news tabs 
    $('.tab-content').hide();
    $('.tab-content').eq(0).show();
    $('.wn-tabs-btns li').eq(0).removeClass('active')
    $('.wn-tabs-btns li').eq(0).addClass('active')

    $('.wn-tabs-btns li').eq(0).click(function () {
        $('.wn-tabs-btns li').removeClass('active')
        $('.wn-tabs-btns li').eq(0).addClass('active')
        $('.tab-content').hide();
        $('.tab-content').eq(0).show();
    });
    $('.wn-tabs-btns li').eq(1).click(function () {
        $('.wn-tabs-btns li').removeClass('active')
        $('.wn-tabs-btns li').eq(1).addClass('active')
        $('.tab-content').hide();
        $('.tab-content').eq(1).show();
    });
    $('.wn-tabs-btns li').eq(2).click(function () {
        $('.wn-tabs-btns li').removeClass('active')
        $('.wn-tabs-btns li').eq(2).addClass('active')
        $('.tab-content').hide();
        $('.tab-content').eq(2).show();
    });
});