require(['footer', 'JURL', 'CPerson', 'BPerson'], function(footer, JURL, CPerson, BPerson) {

	footer.setActiveNav("person");
	//console.log(JURL.localSearch());
	//init.init();
	//
	CPerson.initData({
		url: "/weixin/c/json/slide2.json"
	}, BPerson.initData);

	CPerson.initEvent();
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