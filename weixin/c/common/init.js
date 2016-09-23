//html字体、页面宽高初始化
(function(doc, win) {
	var docEl = doc.documentElement,
		docBody = document.body,
		resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
		recalc = function() {
			var clientWidth = docEl.clientWidth,
				clientHeight = docEl.clientHeight;
			if (!clientWidth) return;
			docEl.style.fontSize = 20 * (clientWidth / 320) + 'px';
			docBody.style.width = clientWidth + 'px';
			//docBody.style.height = clientHeight + 'px';
		};
	if (!doc.addEventListener) return;
	win.addEventListener(resizeEvt, recalc, false);
	doc.addEventListener('DOMContentLoaded', recalc, false);
})(document, window);