define(['reqAjax'], function(reqAjax) {

	var initData = function(data, callback) {
		reqAjax.initAjax(data, callback);
	}


	var initEvent = function() {

		//默认地址事件
		$(document).on("touchstart", ".isdefault", function() {
			var _this = $(this),
				_id = _this.attr("data-id"),
				para = {
					id: _id
				};

			if (_this.hasClass("selected")) {
				_this.removeClass("selected");
				_this.attr("data-def", "0");
			} else {
				_this.addClass("selected");
				_this.attr("data-def", "1");
			}
		});

		//保存事件
		$(document).on("touchstart", "#save", function() {
			var _this = $(this),
				_id = _this.attr("data-id"),
				_def = $(".isdefault").attr("data-def"),
				name = $("#name").val(),
				phone = $("#phone").val(),
				detail = $("#detail").val(),
				province = $("#province").find("option:selected").text(),
				provinceVal = $("#province").find("option:selected").val(),
				city = $("#city").find("option:selected").text(),
				cityVal = $("#city").find("option:selected").val(),
				para = {
					id: _id,
					isdefault: _def,
					name: name,
					phone: phone,
					detail: detail,
					province: province,
					provinceVal: provinceVal,
					city: city,
					cityVal: cityVal
				};

			console.log(para);
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