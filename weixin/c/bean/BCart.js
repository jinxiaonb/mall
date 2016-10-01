define([], function() {

	var initData = function(data) {
		console.log(data);
		cartShow(data);
	}

	function cartShow(data) {


		if (data.result) {

			var cart = data.cart,
				_len = cart.length,
				str = "";

			for (var i = 0; i < _len; i++) {
				var item = cart[i],
					id = item.id, //商品id
					title = item.title, //商品名称
					specsid = item.specsid, //规格id
					spec1 = item.spec1 != undefined ? item.spec1 : "", //规格1名称
					spec2 = item.spec2 != undefined ? item.spec2 : "", //规格2名称
					price = item.price, //价格
					num = item.num, //数量
					stock = item.stock, //库存
					img = item.img; //商品图片
				str += "<div class='c-list' data-num=" + num + " data-id=" + id + " data-specsid=" + specsid + ">" +
					"<div class='cart-box overflow'>" +
					"<div class='cart-img f-left'><img src=" + img + " alt=''></div>" +
					"<div class='cart-info f-right'>" +
					"<h5>" + title + "</h5>" +
					"<p class='specs'><span>(规格：" + spec1 + "、" + spec2 + ")</span></p>" +
					"<div class='cart-ope'>" +
					"<p><span class='price'>￥" + price + "</span></p>" +
					"<p class='num-ope'><i class='iconfont minus'>&#xe608;</i><input type='text' data-stock=" + stock + " data-price=" + price + " value=" + num + " class='num'><i class='iconfont add'>&#xe607;</i></p>" +
					"<p><i class='iconfont del'>&#xe605;</i></p>" +
					"</div>" +
					"</div>" +
					"</div>" +
					"</div>";
			}

			$("#cart-list").append(str);
			$("#total").html("￥" + data.total);
			$("#checkout").attr("data-total", data.total);
		} else {
			$("#cart-list").addClass("hidden");
			$("#guarantee").addClass("hidden");
			$(".checkout").addClass("hidden");
			$(".info").addClass("hidden");
			$(".none-cart").removeClass("hidden");
		}
	}

	return {
		initData: initData
	}
});