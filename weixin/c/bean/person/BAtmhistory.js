define([], function() {

	var initData = function(data) {
		console.log(data);
		inithistory(data);
	}

	function inithistory(data) {
		if (data.result) {
			var list = data.atmhistory,
				len = list.length,
				str = "";

			for (var i = 0; i < len; i++) {
				var item = list[i],
					id = item.id,
					time = item.time,
					carry = item.carry;

				str += "<div class='list'>" +
					"<p class='overflow'>" +
					"<span class='f-left'>编号:" + id + "</span>" +
					"<em class='f-right'>" + time + "</em>" +
					"</p>" +
					"<h3 class='overflow'>" +
					"<span class='f-left'>金额:" + carry + "</span>" +
					"<em class='f-right'>提现成功</em>" +
					"</h3>" +
					"</div>"
			}
			$(".atm").html(str);
		}
	}
	return {
		initData: initData
	}
});