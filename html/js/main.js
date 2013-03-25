$(window).load(function() {
	// add js class to body if javascript enabled
    //$('body').addClass('js');

    // Division-topbar Menu dropdown
    // var $menu = $('.univ-nav'),
    // $menulink = $('.menu-link');
    // $menulink.click(function() {
    //     $menulink.toggleClass('active');
    //     $menu.toggleClass('active');
    //     return false;
    // });

	// Flexslider
	// $('.flexslider').flexslider({
	// 	slideshow: false
	// });

    $('.division-studentlife').click(function() {
        $(this).toggleClass("active");
        $('.division-directory').slideToggle();
        return false;
    });
    $('.search-toggle').click(function() {
        $(this).toggleClass('active');
        $('.division-search').slideToggle();
        return false;
    });
});
