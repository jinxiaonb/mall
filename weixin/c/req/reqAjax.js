define([], function() {

	var initAjax = function(para, callback) {
		ajaxCommont(para, callback);
	}

	function ajaxCommont(para, callback) {
		//console.log(para);
		$.ajax({
			type: "get",
			url: para.url,
			data: para,
			dataType: "json",
			success: function(data) {
				callback(data);
			}
		});
	}

	return {
		initAjax: initAjax
	}
});