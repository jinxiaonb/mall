require(['JURL', 'CSales', 'BSales'], function(JURL, CSales, BSales) {


	CSales.initData({
		url: "/weixin/c/json/sales.json"
	}, BSales.initData);



	CSales.initEvent(BSales.initData);
});