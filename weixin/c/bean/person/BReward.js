define([], function() {

	var initData = function(data) {
		console.log(data);
		if (data.result) {
			$("#carry").text(data.reward.carry);
			$("#total").text(data.reward.total);
		}
	}

	return {
		initData: initData
	}
});