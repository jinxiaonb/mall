require(['JURL', 'CAddressAdd', 'BAddressAdd', 'city'], function(JURL, CAddressAdd, BAddressAdd, city) {

	var _url = JURL.localSearch()._search; //_url对象为{id:1,item:34}

	//console.log(_url);
	var para = {
		url: "/weixin/c/json/addressAdd.json"
	}
	city.cityInit();

	//当编辑地址的时候获取地址信息
	if (_url.aid != undefined) {
		para.aid = _url.aid;


		$("#save").attr("data-id", _url.aid);
		//$(".isdefault").attr("data-daf", _url.aid);
		CAddressAdd.initData(para, BAddressAdd.initData);
	}

	CAddressAdd.initEvent();

});