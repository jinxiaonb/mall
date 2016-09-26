require(['JURL', 'CFans', 'BFans'], function(JURL, CFans, BFans) {


	CFans.initData({
		url: "/weixin/c/json/fans.json"
	}, BFans.initData);



	CFans.initEvent(BFans.initData);
});