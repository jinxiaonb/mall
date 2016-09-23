require(['JURL', 'CCategory', 'iscrollss'], function(JURL, CCategory, iscrollss) {

	CCategory.initEvent();
	CCategory.initMore();

	var myScroll = new IScroll('#nav', {
		scrollX: true,
		scrollY: false,
		mouseWheel: true,
		preventDefaultException: {
			tagName: /^(INPUT|TEXTAREA|BUTTON|SELECT|A)$/
		}
	});
});