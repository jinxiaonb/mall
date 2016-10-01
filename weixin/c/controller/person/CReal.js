define(['JDialog', 'JValidate'], function(JDialog, JValidate) {


	var initEvent = function() {

		$(document).on("touchstart", "#confirm", function() {
			var weixin = $("#weixin").val(),
				phone = $("#phone").val(),
				realname = $("#realname").val(),
				idnum = $("#idnum").val(),
				alipay = $("#alipay").val(),
				para = {
					url: "/weixin/c/json/sales.json",
					weixin: weixin,
					phone: phone,
					realname: realname,
					idnum: idnum,
					alipay: alipay
				};

			if (!JValidate.jv.isPhone(phone)) {
				JDialog.buildDialog({
					JMessage: "请填写合法的手机号码"
				});
			} else if (!JValidate.jv.isIDCard(idnum)) {
				JDialog.buildDialog({
					JMessage: "请填写正确的身份证号"
				});
			}

			$.ajax({
				type: "get",
				url: "/weixin/c/json/sales.json",
				data: para,
				dataType: "json",
				success: function(data) {
					console.log(data);
				}
			});
		});
	}

	return {
		initEvent: initEvent
	}
});