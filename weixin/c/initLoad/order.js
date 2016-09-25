require(['footer', 'JURL', 'COrder', 'BOrder'], function(footer, JURL, COrder, BOrder) {
	footer.setActiveNav("order");

	COrder.initData({
		url: "/weixin/c/json/slide2.json"
	}, BOrder.initData);

	COrder.initEvent();



});