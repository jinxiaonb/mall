require(['JURL', 'CAtm', 'BAtm'], function(JURL, CAtm, BAtm) {


	CAtm.initData({
		url: "/weixin/c/json/reward.json"
	}, BAtm.initData);

	CAtm.initEvent();
});