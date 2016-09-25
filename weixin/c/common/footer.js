define([], function() {


	var setActiveNav = function(msg) {
		$('#footer').load('/weixin/views/footer.html', function() {
			$("." + msg).siblings("li").removeClass("selected").end().addClass("selected");
		});
	}

	return {
		setActiveNav: setActiveNav
	}
});