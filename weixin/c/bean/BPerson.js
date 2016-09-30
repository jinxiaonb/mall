define([], function() {

	var initData = function(data) {
		console.log(data);
		personInit(data);
	}

	function personInit(data) {
		if (data.result) {
			var person = data.person,
				avator = person.avator,
				idcard = person.idcard,
				fans = person.fans,
				isShare = person.isShare,
				name = person.name,
				rec = person.rec,
				reward = person.reward,
				sales = person.sales,
				total = person.total,
				uid = person.uid;
			$("#avator").attr("src", avator);
			$("#username").text(name);
			$("#idcard").text("ID:" + idcard);
			$("#total").text("累计购物:￥" + total);

			// if (!isShare) {
			// 	$(".shareman").addClass("hidden");
			// 	$(".unshareman").removeClass("hidden");
			// } else {
			// 	$(".unshareman").addClass("hidden");
			// 	$(".shareman").removeClass("hidden");
			// }
			$("#rec").text(rec);
			$("#reward span").text("￥" + reward);
			$("#fans span").text(fans + "人");
			$("#sales span").text("￥" + sales);
		}
	}

	return {
		initData: initData
	}
});