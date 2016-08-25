require(['JURL', 'iscroll'], function(JURL, iscroll) {

	console.log(JURL.localSearch());
	//init.init();
	var myScroll = new iscroll('#header', {
		scrollX: true,
		scrollY: false,
		mouseWheel: true,
		preventDefaultException: {
			tagName: /^(INPUT|TEXTAREA|BUTTON|SELECT|A)$/
		}
	});
});