define([], function() {

	var initProvinceData = function(data) {
		//console.log(data);
		if (data.result) {
			var list = data.province,
				len = list.length,
				str = "";
			for (var i = 0; i < len; i++) {
				var item = list[i],
					id = item.id,
					name = item.name;

				str += "<option value=" + id + ">" + name + "</option>";
			}
			$("#province").append(str);
		}
	}

	var initCityData = function(data) {
		//console.log(data);
		if (data.result) {
			var list = data.city,
				len = list.length,
				str = "";
			for (var i = 0; i < len; i++) {
				var item = list[i],
					id = item.id,
					name = item.name;

				str += "<option value=" + id + ">" + name + "</option>";
			}
			$("#city").append(str);
		}
	}

	var initData = function(data) {
		//console.log(data);
		addressShow(data);
	}

	function addressShow(data) {
		if (data.result) {
			var address = data.address[0],
				id = address.id,
				name = address.name,
				phone = address.phone,
				province = address.province,
				pid = address.pid,
				city = address.city,
				cid = address.cid,
				detail = address.detail,
				isdefault = address.isdefault;
			//console.log(address);

			$("#name").val(name);
			$("#phone").val(phone);
			$("#province").find("option[value='" + pid + "']").attr("selected", true);
			$("#city").find("option[value=" + cid + "]").attr("selected", true);
			$("#detail").val(detail);

			if (isdefault == "1") {
				$(".isdefault").addClass("selected");
				$(".isdefault").attr("data-def", "1");
			}
		}
	}

	return {
		initProvinceData: initProvinceData,
		initCityData: initCityData,
		initData: initData
	}
});