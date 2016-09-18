require(['JURL', 'CIndex', 'BIndex'], function(JURL, CIndex, BIndex) {

	//console.log(JURL.localSearch());
	//init.init();
	//
	CIndex.initData({
		url: "/c/json/slide.json"
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