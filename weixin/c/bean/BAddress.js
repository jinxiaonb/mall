define([], function() {

	var initData = function(data) {
		console.log(data);
		addressShow(data);
	}

	function addressShow(data) {
		if (data.result) {
			var list = data.address,
				len = list.length,
				str = "";

			for (var i = 0; i < len; i++) {
				var item = list[i],
					province = item.province,
					city = item.city,
					detail = item.detail,
					id = item.id,
					name = item.name,
					phone = item.phone,
					isdefault = item.isdefault,
					se = 'list overflow';
				if (isdefault == "1") {
					se = 'list overflow selected';
				}

				str += "<div class='" + se + "' data-id=" + id + ">" +
					"<div class='f-left'><a href=/weixin/views/person/addressAdd.html?aid=" + id + ">" +
					"<p class='overflow'>" +
					"<span class='f-left'>" + name + "</span>" +
					"<span class='f-right'>" + phone + "</span>" +
					"</p>" +
					"<p class='a-detail'>" + province + city + detail + "</p>" +
					"</a></div>" +
					"<div class='f-right'>" +
					"<i class='iconfont chdefault'>&#xe616;</i>" +
					"</div>" +
					"</div>"
			}
			$(".list-add").append(str);
		} else {
			$(".none-add").removeClass("hidden");
			$(".list-add").removeClass("hidden");
		}
	}

	return {
		initData: initData
	}
});