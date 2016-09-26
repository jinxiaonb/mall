define([], function() {

	//获取地址连接的各种数据
	var cityInit = function() {
		$.ajax({
			type: "get",
			url: "/weixin/c/json/area.json",
			dataType: "json",
			success: function(data) {
				console.log(data);

				var level1Str = '',
					level2Str = '',
					$level1 = $("#province"),
					$level2 = $("#city");

				for (key in data.province) {
					level1Str += '<option value="' + data.province[key].name + '">' + data.province[key].name + '</option>';
				}
				for (key in data.province[0].cities.city) {
					level2Str += '<option value="' + data.province[0].cities.city[key] + '">' + data.province[0].cities.city[key] + '</option>'
				}

				$level1.html(level1Str);
				$level2.html(level2Str);

				$level1.on('change', function() {
					for (key in data.province) {
						if ($level1.val() == data.province[key].name) {
							var str = '';
							for (m in data.province[key].cities.city) {
								str += '<option value="' + data.province[key].cities.city[m] + '">' + data.province[key].cities.city[m] + '</option>';
							}
							$level2.html(str);
						}
					}

				});
			}
		});
	}

	return {
		cityInit: cityInit
	};
});