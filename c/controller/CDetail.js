define(['reqAjax', 'JDialog'], function(reqAjax, JDialog) {

	var initData = function(data, callback) {
		reqAjax.initAjax(data, callback);
	}


	var initEvent = function() {
		$(document).on("touchstart click", ".add-cart", function() {
			var _this = $(this),
				_specs = $("#specs");

			_specs.removeClass("hidden");
			_specs.addClass("animated bouncelnUp");
		});

		$(document).on("touchstart click", "#close", function() {
			var _this = $(this),
				_specs = $("#specs");


			_specs.addClass("animated bouncelnDown");
			_specs.addClass("hidden");
		});

		$(document).on("touchstart click", "#confirm", function() {
			var _this = $(this),
				_specs = $("#specs"),
				_id = _this.attr("data-id"),
				_specs1 = $("#specs1 em.selected").text(),
				_specs2 = $("#specs2 em.selected").text(),
				_num = $("#num").val(),
				para = {
					id: _id,
					specs1: _specs1,
					specs2: _specs2,
					num: _num
				};
			console.log(para);
			$.ajax({
				type: "get",
				url: "/c/json/slide.json",
				data: para,
				dataType: "json",
				success: function(data) {
					console.log(data);
					if (data.result) {
						JDialog.buildDialog({
							JMessage: "加入购物车成功",
							JCallback: function() {
								_specs.addClass("animated bouncelnDown");
								_specs.addClass("hidden");
							}
						})

					}

				}
			});



		});
	}



	return {
		initData: initData,
		initEvent: initEvent
	}
});