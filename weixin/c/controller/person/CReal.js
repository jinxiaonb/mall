define(['JDialog'], function(JDialog) {


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
			console.log(para);
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