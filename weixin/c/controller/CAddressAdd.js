define(['reqAjax', 'JValidate', "JDialog"], function(reqAjax, JValidate, JDialog) {

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
			if (name == "") {
				JDialog.buildDialog({
					JMessage: "请填写收件人姓名"
				});
				return false;
			} else if (!JValidate.jv.isPhone(phone)) {
				JDialog.buildDialog({
					JMessage: "请填写合法的手机号码"
				});
				return false;
			} else if (detail == "") {
				JDialog.buildDialog({
					JMessage: "请填写详细的收货地址"
				});
				return false;
			}
			//console.log(para);
			$.ajax({
				type: "get",
				url: "/weixin/c/json/addressAdd.json",
				data: para,
				dataType: "json",
				success: function(data) {
					console.log(data);
					if (data.result) {
						console.log(_id);
						JDialog.buildDialog({
							JMessage: "地址保存成功",
							JCallback: function() {
								if (_id != "0") {
									location.href = "/weixin/views/person/address.html?orderids=" + orderids;
								} else {
									location.href = "/weixin/views/person/address.html";
								}
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