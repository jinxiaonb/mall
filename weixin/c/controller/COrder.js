define(['reqAjax'], function(reqAjax) {

	var initData = function(data, callback) {
		reqAjax.initAjax(data, callback);
	}


	var initEvent = function() {
		$(document).on("touchstart", "#header-order li", function() {
			var _this = $(this),
				_class = "." + _this.attr("data-tab");
			if ($(_class).hasClass("hidden")) {
				_this.siblings("li").removeClass("selected").end().addClass("selected");
				$(_class).siblings(".c-order").addClass("hidden").end().removeClass("hidden");
			}

		});
	}

	return {
		initData: initData,
		initEvent: initEvent
	}
});