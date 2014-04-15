$(function() {
    $('header').css('min-height', $(window).height());
    $('.right.menu.open').on("click",function(e){
		$('.ui.vertical.menu').toggle();
	});
});