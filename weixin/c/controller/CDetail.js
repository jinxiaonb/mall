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


		$(document).on("touchstart", "#mini", function() {
			var _this = $(this),
				_num = parseInt($("#num").val()),
				_stock = $("em.stock").text();
			--_num;
			if (_num < 1) {
				JDialog.buildDialog({
					JMessage: "数量最少为一件"
				});
				$("#num").val(_stock);
			} else {
				$("#num").val(_num);
			}
		});
		$(document).on("touchstart", "#add", function() {
			var _this = $(this),
				_num = parseInt($("#num").val()),
				_stock = parseInt($("em.stock").text());
			++_num;
			//console.log(_num, _stock);

			if (_num > _stock) {
				JDialog.buildDialog({
					JMessage: "所购买数量超过了库存数量"
				});
				$("#num").val(_stock);
			} else {
				$("#num").val(_num);
			}
		});

		$(document).on("touchstart", "#confirm", function() {
			var _this = $(this),
				_specs = $("#specs"),
				_id = _this.attr("data-id"),
				_specsid = _this.attr("data-specsid"),
				_specs1 = $("#specs1 em.selected").text(),
				_specs2 = $("#specs2 em.selected").text(),
				_num = $("#num").val(),
				para = {
					id: _id,
					specsid: _specsid,
					specs1: _specs1,
					specs2: _specs2,
					num: _num
				};
			console.log(para);
			$.ajax({
				type: "get",
				url: "/weixin/c/json/slide.json",
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
						});

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