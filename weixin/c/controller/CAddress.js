define(['reqAjax'], function(reqAjax) {

	var initData = function(data, callback) {
		reqAjax.initAjax(data, callback);
	}


	var initEvent = function() {
		$(document).on("touchstart", ".chdefault", function() {
			var _this = $(this),
				_parents = _this.parents(".list"),
				_id = _parents.attr("data-id"),
				para = {
					id: _id
				};

			console.log(_parents);
			_parents.siblings("div.list").removeClass("selected").end().addClass("selected");
			
			// $.ajax({
			// 	type: "post",
			// 	url: "xxx",
			// 	data: para,
			// 	dataType: "json",
			// 	success: function(data) {
			// 		console.log(data);
			// 	}
			// });
		});
	}

	return {
		initData: initData,
		initEvent: initEvent
	}
});