define([], function() {

	var initData = function(data) {
		console.log(data);
		initfans(data);
	}

	function initfans(data) {
		if (data.result) {
			var list = data.fans,
				len = list.length,
				str = "";
			for (var i = 0; i < len; i++) {
				var item = list[i],
					id = item.id,
					time = item.time,
					img = item.img,
					name = item.name;

				str += "<div class='c-list overflow'>" +
					"<div class='img f-left'><img src=" + img + " alt=''></div>" +
					"<div class='info f-right'>" +
					"<h3>" + name + "</h3>" +
					"<p class='overflow'>" +
					"<span class='f-left'>ID:" + id + "</span>" +
					"<em class='f-right'>" + time + "关注</em>" +
					"</p>" +
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