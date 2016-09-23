require(['JURL', 'CIndex', 'BIndex'], function(JURL, CIndex, BIndex) {

	//console.log(JURL.localSearch());
	//init.init();
	//
	CIndex.initData({
		url: "/weixin/c/json/slide2.json"
	}, BIndex.initSlide);


	CIndex.initEvent();
	CIndex.initMore(BIndex.initData);
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