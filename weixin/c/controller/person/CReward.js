define(['reqAjax'], function(reqAjax) {

	var initData = function(data, callback) {
		console.log(data);
		reqAjax.initAjax(data, callback);
	}



	return {
		initData: initData
	}
});