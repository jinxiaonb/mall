define(['slidefocus'], function(slidefocus) {
	var initSlide = function(data) {
		//console.log(data);
		slideShow(data.slide);
	}

	function slideShow(data) {
		//console.log(data);
		var _len = data.length,
			str = "<ul>";
		if (_len > 0) {
			for (var i = 0; i < _len; i++) {
				var item = data[i],
					id = item.id,
					img = item.img;
				str +=
					"<li>" +
					"<a href=/weixin/views/detail.html?id=" + id + ">" +
					"<img src=" + img + " data-src=" + img + " alt='' class='async'>" +
					"</a>" +
					"</li>";


			}
			str += "</ul>";
			//console.log(str);
			$('#sliderBox').html(str);
			slidefocus.slidefocus.init({
				id: "#sliderBox",
				height: "56.25%"
			});
		}
	}

	var initData = function(data) {
		console.log(data);
		if (data.result) {
			dataShow(data);
		}

	}

	function dataShow(data) {
		var goods = data.goods,
			_len = goods.length,
			tab = data.tab,
			str = "";
		for (var i = 0; i < _len; i++) {
			var item = goods[i],
				id = item.id,
				title = item.title,
				subtitle = item.subtitle,
				money = item.money,
				oldmoney = item.oldmoney,
				img = item.img;


			str += "<div class='list-index'>" +
				"<p><a href=/weixin/views/detail.html?id=" + id + "><img src=" + img + " alt=''></a></p>" +
				"<div class='c-list'>" +
				"<p class='title overflow'><span class='f-left t-left'>" + title + "</span><span class='f-right t-right'>￥" + money + "</span></p>" +
				"<p class='info overflow'><span class='f-left t-left'>" + subtitle + "</span><span class='f-right t-right'><i>￥" + oldmoney + "</i></span></p>" +
				"</div>" +
				"</div>";
		}

		$(".index-list .scroller-content").append(str);


		// if (tab == "index") {

		// } else {
		// 	$(".hot-list .scroller-content").append(str);
		// }

	}


	return {
		initSlide: initSlide,
		initData: initData
	}
});