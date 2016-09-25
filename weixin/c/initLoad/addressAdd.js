require(['JURL', 'CAddressAdd', 'BAddressAdd'], function(JURL, CAddressAdd, BAddressAdd) {

	var _url = JURL.localSearch()._search; //_url对象为{id:1,item:34}
	//console.log(_url);
	var para = {
		url: "/weixin/c/json/addressAdd.json"
	}

	//初始化省区的数据
	CAddressAdd.initData({
		url: "/weixin/c/json/province.json"
	}, BAddressAdd.initProvinceData);



	//当编辑地址的时候获取地址信息
	if (_url.aid != undefined) {
		para.aid = _url.aid;

		//初始化市区列表
		CAddressAdd.initData({
			url: "/weixin/c/json/city.json"
		}, BAddressAdd.initCityData);

		$("#save").attr("data-id", _url.aid);
		//$(".isdefault").attr("data-daf", _url.aid);
		CAddressAdd.initData(para, BAddressAdd.initData);
	}

	CAddressAdd.initEvent();

});