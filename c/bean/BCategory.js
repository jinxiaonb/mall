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
				money = item.money,
				img = item.img;

			str +=
				"<div class='list-index'>" +
				"<p><a href=/views/detail.html?id=" + id + "><img src=" + img + " alt=''></a></p>" +
				"<p class='info'><span class='t-left'>" + title + "</span><span class='t-right'>RMB " + money + "</span></p>" +
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