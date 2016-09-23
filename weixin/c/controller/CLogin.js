define(['reqAjax'], function(reqAjax) {

	var initData = function(data, callback) {
		reqAjax.initAjax(data, callback);
	}

	return {
		initData: initData
	}
});