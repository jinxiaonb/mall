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
				id: "#sliderBox",
				height: "100%"
			});
		}
	}

	var initSpecs = function(data) {
		//console.log(data);
		if (data.result) {
			specsShow(data);
		}

	}

	function specsShow(data) {
		var title = data.specs.title,
			titleLen = title.length,
			titleStr1 = "",
			titleStr2 = "",
			list1 = data.specs.list1,
			list1Len = list1.length,
			list1Str = "",
			list2 = data.specs.list2,
			list2Len = list2.length,
			list2Str = "",
			list = data.list,
			listLen = list.length;
		var title1 = title[0],
			title2 = title[1];
		for (var i = 0; i < list1Len; i++) {
			var item = list1[i],
				listname = item.listname,
				name = item.name;
			list1Str += "<em data-listname=" + listname + ">" + name + "</em>";
		}

		for (var i = 0; i < list2Len; i++) {
			var item = list2[i],
				listname = item.listname,
				name = item.name;
			list2Str += "<em data-listname=" + listname + ">" + name + "</em>";
		}

		titleStr1 = "<div class='c-specs' id='specs1'>" +
			"<span>" + title1 + "：</span>" + list1Str +
			"</div>";
		titleStr2 = "<div class='c-specs' id='specs2'>" +
			"<span>" + title2 + "：</span>" + list2Str +
			"</div>";

		$("#c-specs").empty();
		$("#c-specs").append(titleStr1);
		$("#c-specs").append(titleStr2);


		$(document).on("touchstart", "#specs1 em", function() {

			var _this = $(this),
				_thisSib = $("#specs1 em.selected"),
				_thisSibLen = _thisSib.length,
				_listname = _this.attr("data-listname"),
				_specs2Selected = $("#specs2 em.selected"),
				_specs2SelectedLen = _specs2Selected.length;
			//console.log(_thisSibLen);
			if (_thisSibLen > 1) {
				_this.siblings("em").removeClass("selected unselected");
				hasSelected();
				return false;
			}

			_this.siblings("em").removeClass("selected unselected");
			_this.removeClass("unselected").addClass("selected");
			$("#specs2 em").removeClass("selected unselected");

			for (var j = 0; j < listLen; j++) {
				var jj = list[j],
					specsChoice0 = jj[0],
					specsChoice1 = jj[1],
					specsChoice2 = jj[2],
					specsChoice3 = jj[3];
				if (_listname == specsChoice0) {
					if (specsChoice2 != 0) {
						$("#specs2 em[data-listname=" + specsChoice1 + "]").addClass("selected");
					} else {
						$("#specs2 em[data-listname=" + specsChoice1 + "]").addClass("unselected");
					}
				}
			}
			hasSelected();
		});

		$(document).on("touchstart", "#specs2 em", function() {
			var _this = $(this),
				_thisSib = $("#specs2 em.selected"),
				_thisSibLen = _thisSib.length,
				_listname = _this.attr("data-listname"),
				_specs1Selected = $("#specs1 em.selected"),
				_specs1SelectedLen = _specs1Selected.length;

			if (_thisSibLen > 1) {
				_this.siblings("em").removeClass("selected unselected");
				hasSelected();
				return false;
			}

			_this.siblings("em").removeClass("selected unselected");
			_this.removeClass("unselected").addClass("selected");
			$("#specs1 em").removeClass("selected unselected");

			for (var j = 0; j < listLen; j++) {
				var jj = list[j],
					specsChoice0 = jj[0],
					specsChoice1 = jj[1],
					specsChoice2 = jj[2],
					specsChoice3 = jj[3];

				if (_listname == specsChoice1) {
					if (specsChoice2 != 0) {
						$("#specs1 em[data-listname=" + specsChoice0 + "]").addClass("selected");
					} else {
						$("#specs1 em[data-listname=" + specsChoice0 + "]").addClass("unselected");
					}
				}
			}
			hasSelected();
		});

		function hasSelected() {
			var _selected1 = $("#specs1 em.selected"),
				_selected1Len = _selected1.length,
				_selected2 = $("#specs2 em.selected"),
				_selected2Len = _selected2.length;
			//console.log(_selected1Len, _selected2Len);

			if (_selected1Len == 1 && _selected2Len == 1) {
				var _listname1 = _selected1.attr("data-listname"),
					_text1 = _selected1.text(),
					_listname2 = _selected2.attr("data-listname"),
					_text2 = _selected2.text();

				//console.log(_listname1, _listname2);
				for (var k = 0; k < listLen; k++) {
					var kk = list[k],
						specsChoice0 = kk[0],
						specsChoice1 = kk[1],
						specsChoice2 = kk[2],
						specsChoice3 = kk[3],
						specsChoice4 = kk[4],
						specsChoice5 = kk[5];

					if (_listname1 == specsChoice0 && _listname2 == specsChoice1) {
						//console.log(specsChoice0, _text1, specsChoice1, _text2, specsChoice2, specsChoice3, specsChoice4);
						$("img.goods-small").attr("src", specsChoice3);
						$("em.price").text("￥" + specsChoice4);
						$("em.stock").text(specsChoice2);
						$("em.sizes").text(_text1 + " " + _text2);
						$("#confirm").attr("data-specsid", specsChoice5);
					}
				}
			}
		}
	}



	return {
		initSlide: initSlide,
		initSpecs: initSpecs
	}
});