define(['reqAjax', 'iscrollss'], function(reqAjax, iscrollss) {

	var initData = function(data, callback) {
		reqAjax.initAjax(data, callback);
	}


	var initEvent = function() {
		$(document).on("touchstart click", ".tab span", function() {
			var _this = $(this),
				_id = _this.attr("id");
			if (_id == "index") {
				if ($(".c-index").hasClass("hidden")) {
					$(".c-hot").addClass("hidden");
					$(".c-index").removeClass("hidden");
					_this.siblings("span").removeClass("selected");
					_this.addClass("selected");
				}

			} else {
				if ($(".c-hot").hasClass("hidden")) {
					$(".c-index").addClass("hidden");
					$(".c-hot").removeClass("hidden");
					_this.siblings("span").removeClass("selected");
					_this.addClass("selected");
				}
			}
		});
	}

	var initMore = function(callback) {
		var num = 1,
			hotnum = 1;
		$(document).scroll(function() {
			var _wh = $(window).height(),
				_rh = $(document).height(),
				_dh = $(document).scrollTop(),
				_lH = _rh - _wh - _dh,
				tabSel = $(".tab span.selected").attr("id"),
				url = "",
				para = {
					tab: tabSel,
					url: url,
					num: num,
					hotnum: hotnum
				};
			if (_lH == 0) {
				//加载更多
				if (tabSel == "index") {
					url = "/weixin/c/json/index.json";
					num++;
					para.num = num;

				} else {
					url = "/weixin/c/json/hot.json";
					hotnum++;
					para.hotnum = hotnum;
				}

				para.url = url;
				console.log(para);
				reqAjax.initAjax(para, callback);
			}
		});
	}

	var initLoadMore = function() {
		var myScroll,
			upIcon = $("#up-icon"),
			downIcon = $("#down-icon");

		myScroll = new IScroll('#wrapper', {
			probeType: 3,
			mouseWheel: true
		});

		myScroll.on("scroll", function() {
			var y = this.y,
				maxY = this.maxScrollY - y,
				downHasClass = downIcon.hasClass("reverse_icon"),
				upHasClass = upIcon.hasClass("reverse_icon");

			if (y >= 40) {
				!downHasClass && downIcon.addClass("reverse_icon");
				return "";
			} else if (y < 40 && y > 0) {
				downHasClass && downIcon.removeClass("reverse_icon");
				return "";
			}

			if (maxY >= 40) {
				!upHasClass && upIcon.addClass("reverse_icon");
				return "";
			} else if (maxY < 40 && maxY >= 0) {
				upHasClass && upIcon.removeClass("reverse_icon");
				return "";
			}
		});

		myScroll.on("slideDown", function() {
			if (this.y > 40) {
				//alert("slideDown");
				upIcon.removeClass("reverse_icon")
			}
		});

		myScroll.on("slideUp", function() {
			if (this.maxScrollY - this.y > 40) {
				alert("slideUp");
				upIcon.removeClass("reverse_icon")
			}
		});
	}

	return {
		initData: initData,
		initEvent: initEvent,
		initMore: initMore,
		initLoadMore: initLoadMore
	}
});