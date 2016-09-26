define(['reqAjax', 'JDialog'], function(reqAjax, JDialog) {

	var initData = function(data, callback) {
		reqAjax.initAjax(data, callback);
	}

	var initEvent = function() {

	}

	return {
		initData: initData,
		initEvent: initEvent
	}
});