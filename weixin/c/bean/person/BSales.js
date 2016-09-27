define([], function() {

	var initData = function(data) {
		console.log(data);
		initsales(data);
	}

	function initsales(data) {
		if (data.result) {
			var list = data.sales,
				len = list.length,
				str = "";
			$(".total").text(data.total);
			$(".fansales").text(data.fansales);
			for (var i = 0; i < len; i++) {
				var item = list[i],
					id = item.id,
					orderid = item.orderid,
					money = item.money,
					time = item.time,
					img = item.img,
					name = item.name;

				str += "<div class='c-list'>" +
					"<h2 class='overflow title'><span class='f-left'>订单编号:" + orderid + "</span><em class='f-right'>" + time + "</em></h2>" +
					"<div class='overflow'>" +
					"<a href=/weixin/views/person/salesDetail.html?orderid=" + orderid + "><div class='img f-left'><img src=" + img + " alt=''></div>" +
					"<div class='info f-right'>" +
					"<h3 class='overflow'>" +
					"<span class='f-left'>" + name + "</span><em class='f-right'>已付款</em>" +
					"</h3>" +
					"<p class='overflow'>" +
					"<span class='f-left'>ID:" + id + "</span>" +
					"<em class='f-right'>￥" + money + "</em>" +
					"</p>" +
					"</div></a>" +
					"</div>" +
					"</div>";
			}
			$(".list").html(str);
		}
	}
	return {
		initData: initData
	}
});