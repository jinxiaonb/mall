define(['reqAjax', 'JDialog'], function(reqAjax, JDialog) {

	var initData = function(data, callback) {
		reqAjax.initAjax(data, callback);
	}

	var initEvent = function(callback) {
		$(document).on("touchstart", "#search", function() {
			var fansid = $("#fansid").val(),
				para = {
					url: "/weixin/c/json/sales.json",
					id: fansid
				};
			console.log(para);
			reqAjax.initAjax(para, callback);
		});
	}

	return {
		initData: initData,
		initEvent: initEvent
	}
});