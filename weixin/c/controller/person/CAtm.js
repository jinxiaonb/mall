define(['reqAjax', 'JDialog'], function(reqAjax, JDialog) {

	var initData = function(data, callback) {
		reqAjax.initAjax(data, callback);
	}

	var initEvent = function() {
		$(document).on("touchstart", "#applyCarry", function() {
			var _val = $("#money").val(),
				_total = $("#carry").text(),
				para = {
					"money": _val
				}
			if (_val > _total) {
				JDialog.buildDialog({
					JMessage: "提现金额不能高于可提现金额"
				});
				return false;
			}
			// $.ajax({
			// 	type: "post",
			// 	url: "xxx",
			// 	data: para,
			// 	dataType: "json",
			// 	success: function(data) {
			// 		console.log();
			// 	}
			// });
		});
	}

	return {
		initData: initData,
		initEvent: initEvent
	}
});