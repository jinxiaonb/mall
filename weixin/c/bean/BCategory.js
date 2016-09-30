define([], function() {

	var initData = function(data) {
		console.log(data);
		if (data.result) {
			dataShow(data);
		}

	}

	function dataShow(data) {
		var goods = data.goods,
			_len = goods.length,
			append = data.append,
			str = "";
		for (var i = 0; i < _len; i++) {
			var item = goods[i],
				id = item.id,
				title = item.title,
				subtitle = item.subtitle,
				money = item.money,
				oldmoney = item.oldmoney,
				img = item.img;

			// str +=
			// 	"<div class='list-index'>" +
			// 	"<p><a href=/weixin/views/detail.html?id=" + id + "><img src=" + img + " alt=''></a></p>" +
			// 	"<p class='title'>" + title + "</p>" +
			// 	"<p class='info'><span class='t-left'>" + subtitle + "</span><span class='t-right'>￥" + money + "<i>￥" + oldmoney + "</i></span></p>" +
			// 	"</div>";

			str += "<div class='list-index'>" +
				"<p><a href=/weixin/views/detail.html?id=" + id + "><img src=" + img + " alt=''></a></p>" +
				"<div class='c-list'>" +
				"<p class='title overflow'><span class='f-left t-left'>" + title + "</span><span class='f-right t-right'>￥" + money + "</span></p>" +
				"<p class='info overflow'><span class='f-left t-left'>" + subtitle + "</span><span class='f-right t-right'><i>￥" + oldmoney + "</i></span></p>" +
				"</div>" +
				"</div>";
		}

		if (append) {
			$(".index-list .scroller-content").append(str);
		} else {
			$(".index-list .scroller-content").empty();
			$(".index-list .scroller-content").append(str);
		}

	}


	return {
		initData: initData
	}
});