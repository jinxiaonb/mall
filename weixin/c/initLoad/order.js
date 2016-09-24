require(['JURL', 'COrder', 'BOrder'], function(JURL, COrder, BOrder) {

	COrder.initData({
		url: "/weixin/c/json/slide2.json"
	}, BOrder.initData);

	COrder.initEvent();



});