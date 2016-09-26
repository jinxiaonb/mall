require(['JURL', 'CReward', 'BReward'], function(JURL, CReward, BReward) {

	//footer.setActiveNav("person");
	//console.log(JURL.localSearch());
	//init.init();
	//
	CReward.initData({
		url: "/weixin/c/json/reward.json"
	}, BReward.initData);

	//CPerson.initEvent();
	//CPerson.initMore(BPerson.initData);
	//CIndex.initLoadMore();
	// var myScroll = new iscroll('#header', {
	// 	scrollX: true,
	// 	scrollY: false,
	// 	mouseWheel: true,
	// 	preventDefaultException: {
	// 		tagName: /^(INPUT|TEXTAREA|BUTTON|SELECT|A)$/
	// 	}
	// });


});