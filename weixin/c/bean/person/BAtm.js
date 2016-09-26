define([], function() {

	var initData = function(data) {
		if (data.result) {
			$("#carry").text(data.reward.carry);
		}
	}

	return {
		initData: initData
	}
});