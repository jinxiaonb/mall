require(['JURL', 'CCart', 'BCart'], function(JURL, CCart, BCart) {


	CCart.initData({
		url: "/weixin/c/json/cart.json"
	}, BCart.initData);

	CCart.initEvent();

});