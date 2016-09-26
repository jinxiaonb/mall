require(['JURL', 'CDetail', 'BDetail'], function(JURL, CDetail, BDetail) {

	//console.log(JURL.localSearch());
	//init.init();
	//
	//获取地址URL的id对象，xiangmeng/index.html?id=1&item=34
	var _url = JURL.localSearch()._search; //_url对象为{id:1,item:34}
	console.log(_url);

	$("#confirm").attr("data-id", _url.id);
	$(".add-cart").attr("data-id", _url.id);

	CDetail.initData({
		url: "/weixin/c/json/slide.json",
		id: _url.id,
		itemid: _url.itemid
	}, BDetail.initSlide);

	CDetail.initData({
		url: "/weixin/c/json/specs.json",
		id: _url.id
	}, BDetail.initSpecs);

	CDetail.initEvent();

});