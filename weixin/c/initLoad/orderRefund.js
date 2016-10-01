require(['JURL', 'COrderRefund', 'BOrderRefund'], function(JURL, COrderRefund, BOrderRefund) {

	var urlpara = JURL.localSearch()._search,
		para = {};
	console.log(urlpara);
	para.ordergoodsid = urlpara.ordergoodsid;
	COrderRefund.initData({
		urlpara: urlpara,
		url: "/weixin/c/json/slide2.json"
	}, BOrderRefund.initData);

	COrderRefund.initEvent();



});