define(['reqAjax', 'JDialog'], function(reqAjax, JDialog) {

	var initData = function(data, callback) {
		reqAjax.initAjax(data, callback);
	}


	var initEvent = function() {
		$(document).on("touchstart", "#shareperson", function() {
			JDialog.buildDialog({
				JMessage: "在微信象盟公众号商城或象盟 APP内任意消费一单，即可成为分享达人，获取高额分享收益。"
			});
		});
	}


	return {
		initData: initData,
		initEvent: initEvent
	}
});