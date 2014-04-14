$(function() {
    $('header').css('min-height', $(window).height());
    $('.scroll.down')
        .transition('set looping')
        .transition('bounce', '2500ms');
});