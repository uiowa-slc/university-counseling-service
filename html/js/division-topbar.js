$(window).load(function() {	

	// Division-topbar Menu dropdown
    var $directory = $('.division-directory'),
    $menulink = $('.studentlife-toggle');
    $menulink.click(function() {
        $menulink.toggleClass('active');
        $directory.slideToggle();
        return false;
    });

	// $('.division-studentlife').click(function() {
	// 	$(this).toggleClass("active");
	// 	$('.division-directory').slideToggle();
	// 	return false;
	// });
    
    // $('.search-toggle').click(function() {
    //     $(this).toggleClass('active');
    //     $('.division-search').slideToggle();
    //     return false;
    // });

});