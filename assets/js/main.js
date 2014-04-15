$(function() {
    $('header').css('min-height', $(window).height());
    $('.scroll.down')
        .transition('set looping')
        .transition('bounce', '2500ms');

    var navbar = $('.ui.sidebar.navbar')
    .sidebar({overlay: true})
    .sidebar('attach events', '.menu.item');
});