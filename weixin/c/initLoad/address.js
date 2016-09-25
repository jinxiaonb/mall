require(['JURL', 'CAddress', 'BAddress'], function(JURL, CAddress, BAddress) {


	CAddress.initData({
		uid: "1",
		url: "/weixin/c/json/address.json"
	}, BAddress.initData);

	CAddress.initEvent();

});