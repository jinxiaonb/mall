(function(window, document) {
	var currentPosition = 0; //记录当前页面位置
	var currentPoint = -1; //记录当前点的位置
	var pageNow = 1; //当前页码
	var points = null; //页码数

	var app = {
		init: function() {
			document.addEventListener('DOMContentLoaded', function() {
				points = document.querySelectorAll('.pagenumber div');
				app.bindTouchEvent();
				app.bindBtnClick();
				app.setPageNow();
			}.bind(app), false);
		}(),

		bindBtnClick: function() {

		},

		transform: function(translate) {
			this.style.webkitTransform = "translate3d(" + translate + "px,0,0)";
			currentPosition = translate;
		},

		setPageNow: function() {
			if (currentPoint != -1) {
				points[currentPoint].className = '';
			}
			currentPoint = pageNow - 1;
			points[currentPoint].className = 'now';
		},

		bindTouchEvent: function() {
			var slide = document.querySelector("#slide");
			var viewport = document.querySelector("#viewport");
			var pageWidth = window.innerWidth;
			var maxWidth = -pageWidth * (points.length - 1);
			var startX, startY;
			var initialPos = 0; // 手指按下的屏幕位置
			var moveLength = 0; // 手指当前滑动的距离
			var direction = "left"; //滑动的方向
			var isMove = false; //是否发生左右滑动
			var startT = 0; //记录手指按下去的时间

			slide.addEventListener("touchstart", function(e) {
				e.preventDefault();
				var touch = e.touches[0];
				startX = touch.pageX;
				startY = touch.pageY;
				initialPos = currentPosition; //本次滑动前的初始位置
				viewport.style.webkitTransition = "";
				startT = new Date().getTime();
				isMove = false;
			}.bind(this), false);

			slide.addEventListener("touchmove", function(e) {
				e.preventDefault();
				var touch = e.touches[0];
				var deltaX = touch.pageX - startX;
				var deltaY = touch.pageY - startY;
				//console.log(deltaX, deltaY);
				//如果X方向上的位移大于Y方向，则认为是左右滑动
				if (Math.abs(deltaX) > Math.abs(deltaY)) {
					moveLength = deltaX;
					var translate = initialPos + deltaX;

					console.log(initialPos, deltaX, translate);
					if (translate <= 0 && translate >= maxWidth) {
						this.transform.call(viewport, translate);
						isMove = true;
					}
					direction = deltaX > 0 ? "right" : "left";
				}
			}.bind(this), false);

			slide.addEventListener("touchend", function(e) {
				e.preventDefault();
				var translate = 0;
				var deltaT = new Date().getTime() - startT;
				if (isMove) {
					viewport.style.webkitTransition = "0.3s ease -webkit-transform";
					if (deltaT < 300) {
						translate = direction == "left" ?
							currentPosition - (pageWidth + moveLength) : currentPosition + pageWidth - moveLength;
						translate = translate > 0 ? 0 : translate;
						translate = translate < maxWidth ? maxWidth : translate;
					} else {
						if (Math.abs(moveLength) / pageWidth < 0.5) {
							translate = currentPosition - moveLength;
						} else {
							translate = direction == "left" ?
								currentPosition - (pageWidth + moveLength) : currentPosition + pageWidth - moveLength;
							translate = translate > 0 ? 0 : translate;
							translate = translate < maxWidth ? maxWidth : translate;
						}
					}

					this.transform.call(viewport, translate);
					pageNow = Math.round(Math.abs(translate) / pageWidth) + 1;

					setTimeout(function() {
						this.setPageNow();
					}.bind(this), 100);
				}
			}.bind(this), false);
		}
	}

})(window, document);