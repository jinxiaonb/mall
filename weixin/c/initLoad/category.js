require(['footer', 'JURL', 'CCategory', 'BCategory', 'iscrollss'], function(footer, JURL, CCategory, BCategory, iscrollss) {

	footer.setActiveNav("category");

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