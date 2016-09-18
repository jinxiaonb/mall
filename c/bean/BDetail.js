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
					"<a href=javascript:void(0);>" +
					"<img src=" + img + " data-src=" + img + " alt='' class='async'>" +
					"</a>" +
					"</li>";


			}
			str += "</ul>";
			//console.log(str);
			$('#sliderBox').html(str);
			slidefocus.slidefocus.init({
				id: "#sliderBox"
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
				money = item.money,
				img = item.img;

			str +=
				"<div class='list-index'>" +
				"<p><a href=/views/detail.html?id=" + id + "><img src=" + img + " alt=''></a></p>" +
				"<p class='info'><span class='t-left'>" + title + "</span><span class='t-right'>RMB " + money + "</span></p>" +
				"</div>";
		}

		if (tab == "index") {
			$(".index-list .scroller-content").append(str);
		} else {
			$(".hot-list .scroller-content").append(str);
		}

	}


	return {
		initSlide: initSlide,
		initData: initData
	}
});