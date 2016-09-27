define([], function() {

	var initData = function(data) {
		console.log(data);
		initsalesDetail(data);
	}

	function initsalesDetail(data) {
		if (data.result) {
			var item = data.salesDetail,
				id = item.id,
				orderid = item.orderid,
				fansid = item.fansid,
				money = item.money,
				total = item.total,
				status = item.status, //1未付款，2已付款
				statusStr = "",
				time = item.time,
				nickname = item.nickname,
				remark = item.remark;
			if (status == "1") {
				statusStr = "未付款";
			} else if (status == "2") {
				statusStr = "已付款";
			}

			$("#orderid").text(orderid);
			$("#fansid").text(fansid);
			$("#money").text(money);
			$("#total").text(total);
			$("#status").text(statusStr);
			$("#time").text(time);
			$("#nickname").text(nickname);
			$("#remark").text(remark);
		}
	}
	return {
		initData: initData
	}
});