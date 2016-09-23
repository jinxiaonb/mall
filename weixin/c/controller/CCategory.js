define(['reqAjax', 'BCategory'], function(reqAjax, BCategory) {

	var initEvent = function() {
		$(document).on("touchstart", ".nav span", function() {
			var _this = $(this),
				para = {
					url: "/weixin/c/json/category2.json"
				};
			if (!_this.hasClass("selected")) {
				_this.siblings("span").removeClass("selected");
				_this.addClass("selected");
				var type = twoType();
				para.type = type;
				para.num = type.num;
				para.append = false;

				console.log(para);
				reqAjax.initAjax(para, BCategory.initData);
			}
		});

		$(document).on("touchstart", ".tab span", function() {
			var _this = $(this),
				para = {
					url: "/weixin/c/json/category2.json"
				};
			if (!_this.hasClass("selected")) {
				_this.siblings("span").removeClass("selected");
				_this.addClass("selected");
				var type = twoType();
				para.type = type;
				para.num = type.num;
				para.append = false;

				console.log(para);
				reqAjax.initAjax(para, BCategory.initData);
			}
		});


	}

	function twoType() {
		var oneLevel = $(".nav span.selected").attr("data-type"),
			oneNum = $(".nav span.selected").attr("data-num"),
			twoLevel = $(".tab span.selected").attr("data-type"),
			para = {
				num: oneNum,
				oneLevel: oneLevel,
				twoLevel: twoLevel
			};

		return para;
	}

	var initMore = function() {
		console.log();
		$(document).scroll(function() {
			var _wh = $(window).height(),
				_rh = $(document).height(),
				_dh = $(document).scrollTop(),
				_lH = _rh - _wh - _dh;
			if (_lH == 0) {
				var para = {},
					type = twoType(),
					url = url,
					num = $("#nav span.selected").attr("data-num");
				para.type = type;
				para.url = "/weixin/c/json/category.json";
				para.append = true;
				para.num = ++num;
				$("#nav span.selected").attr("data-num", num);
				console.log(para);
				reqAjax.initAjax(para, BCategory.initData);
			}


		});
	}

	return {
		initMore: initMore,
		initEvent: initEvent
	}
});