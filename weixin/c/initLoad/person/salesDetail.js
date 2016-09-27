require(['JURL', 'CSalesDetail', 'BSalesDetail'], function(JURL, CSalesDetail, BSalesDetail) {


	CSalesDetail.initData({
		url: "/weixin/c/json/salesDetail.json"
	}, BSalesDetail.initData);



	CSalesDetail.initEvent(BSalesDetail.initData);
});