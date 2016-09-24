define(['reqAjax', 'JDialog'], function(reqAjax, JDialog) {

	var initData = function(data, callback) {
		reqAjax.initAjax(data, callback);
	}

	var initEvent = function() {

		//商品减少
		$(document).on("touchstart", ".minus", function() {
			var _this = $(this),
				_id = _this.parents(".c-list").attr("data-id"),
				_val = _this.siblings("input").val(),
				_price = _this.siblings("input").attr("data-price"),
				_stock = _this.siblings("input").attr("data-stock");
			--_val;

			if (_val < 1) {
				JDialog.buildDialog({
					JMessage: "商品数量至少为1件"
				});
				_this.siblings("input").val("1");
				_this.parents(".c-list").attr("data-num", "1");
				return false;
			}
			_this.siblings("input").val(_val);
			_this.parents(".c-list").attr("data-num", _val);
			totalPrice();
			var para = {
				id: _id,
				num: _val
			};
			// $.ajax({
			// 	type: "post",
			// 	url: "xxxx",
			// 	data: para,
			// 	dataType: "json",
			// 	success: function(data) {
			// 		console.log(data);
			// 	}
			// });

		});
		//商品增加
		$(document).on("touchstart", ".add", function() {
			var _this = $(this),
				_id = _this.parents(".c-list").attr("data-id"),
				_val = _this.siblings("input").val(),
				_price = _this.siblings("input").attr("data-price"),
				_stock = _this.siblings("input").attr("data-stock");
			++_val;
			if (_val > _stock) {
				JDialog.buildDialog({
					JMessage: "商品数量超过了库存数量"
				});
				_this.siblings("input").val(_stock);
				_this.parents(".c-list").attr("data-num", _stock);
				return false;
			}
			_this.siblings("input").val(_val);
			_this.parents(".c-list").attr("data-num", _val);
			totalPrice();
			var para = {
				id: _id,
				num: _val
			};

			//此处应该异步请求
			// $.ajax({
			// 	type: "post",
			// 	url: "xxxx",
			// 	data: para,
			// 	dataType: "json",
			// 	success: function(data) {
			// 		console.log(data);
			// 	}
			// });
		});

		//商品删除
		$(document).on("touchstart", ".del", function() {
			var _this = $(this),
				_parents = _this.parents(".c-list"),
				_id = _parents.attr("data-id");
			var para = {
				id: _id
			};


			JDialog.buildDialog({
				JMessage: "确认要删除该商品？",
				JCallback: function() {
					//
					_parents.remove();
					totalPrice();
					// $.ajax({
					// 	type: "post",
					// 	url: "xxxx",
					// 	data: para,
					// 	dataType: "json",
					// 	success: function(data) {

					// 		console.log(data);
					// 	}
					// });
				}
			});
		});

		//当点击商品减少，增加或者删除时调用，重新计算商品总价格
		function totalPrice() {
			var list = $(".num"),
				_len = list.length,
				_outerTotal = 0;

			if (_len > 0) {
				for (var i = 0; i < _len; i++) {
					var item = $(list[i]),
						_val = parseFloat(item.val()),
						_price = parseFloat(item.attr("data-price")),
						_total = _val * _price;
					_outerTotal += _total;
					console.log(i, _val, _price, _total);
				}
				console.log(_outerTotal);
				$("#total").html("￥" + _outerTotal);
			}
		}

		//去结算
		$(document).on("touchstart", "#checkout", function() {
			var _this = $(this),
				_total = _this.attr("data-total");

			var list = $(".c-list"),
				_len = list.length,
				para = {
					total: _total
				},
				arr = [];
			para.arr = arr;
			console.log(_len);
			if (_len > 0) {
				for (var i = 0; i < _len; i++) {
					var item = $(list[i]),
						_id = item.attr("data-id"),
						_specsid = item.attr("data-specsid"),
						_num = item.attr("data-num"),
						innerpara = {
							id: _id,
							specsid: _specsid,
							num: _num
						};
					arr.push(innerpara);
				}
			}
			console.log(para);
			//如何把购物车的商品参数带着跳转到支付页面
			location.href = "/weixin/views/pay.html";
		});
	}

	return {
		initData: initData,
		initEvent: initEvent
	}
});