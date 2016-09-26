require(['JURL', 'CAtmhistory', 'BAtmhistory'], function(JURL, CAtmhistory, BAtmhistory) {


	CAtmhistory.initData({
		url: "/weixin/c/json/atmhistory.json"
	}, BAtmhistory.initData);

	CAtmhistory.initEvent();
});