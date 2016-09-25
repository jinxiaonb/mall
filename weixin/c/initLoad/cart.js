require(['footer', 'JURL', 'CCart', 'BCart'], function(footer, JURL, CCart, BCart) {

	footer.setActiveNav("cart");

	var _url = JURL.localSearch()._search;
	console.log(_url);

	CCart.initData({
		url: "/weixin/c/json/cart.json",
		id: _url.uid
	}, BCart.initData);

	CCart.initEvent();

});