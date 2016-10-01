define(['reqAjax', 'JDialog'], function(reqAjax, JDialog) {

	var initData = function(data, callback) {
		reqAjax.initAjax(data, callback);
	}


	var initEvent = function(callback) {
		$(document).on("touchstart", "#confirm", function() {
			var _this = $(this),
				_company = $("#company").val(),
				_expressnum = $("#express").val(),
				_orderid = _this.attr("data-orderid"),
				para = {
					express: _company,
					orderno: _expressnum,
					orderid: _orderid
				};
			if (_expressnum == "") {
				JDialog.buildDialog({
					JMessage: "快递单号不能为空！"
				});
				return false;
			}

			$.ajax({
				type: "post",
				url: "/goods/getTrackInfo.html",
				data: para,
				dataType: "json",
				success: function(data) {
					console.log(data);
				}
			})
		});
	}

	return {
		initData: initData,
		initEvent: initEvent
	}
});