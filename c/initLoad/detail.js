require(['JURL', 'CDetail', 'BDetail'], function(JURL, CDetail, BDetail) {

	//console.log(JURL.localSearch());
	//init.init();
	//
	CDetail.initData({
		url: "/c/json/slide.json"
	}, BDetail.initSlide);


	CDetail.initEvent();

});