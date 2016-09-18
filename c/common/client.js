define([],function(){
	
	var client = function(){
		var c_w_width = $(window).width();
		var c_d_width = $(document).width();
		var c_b_width = $(document.body).outerWidth(true);
		
		var c_scroll_left = $(document).scrollLeft();

		var c_w_height = $(window).height();
		var c_d_height = $(document).height();
		var c_b_height = $(document.body).outerHeight(true);
		
		var c_scroll_top = $(document).scrollTop();
		
		var _obj = {
			c_w_width : c_w_width,
			c_d_width : c_d_width,
			c_b_width : c_b_width,
			c_w_height : c_w_height,
			c_d_height : c_d_height,
			c_b_height : c_b_height,
			c_scroll_left : c_scroll_left,
			c_scroll_top : c_scroll_top
		};
		return _obj;
	};
	
	function getX(e){
		e = e || window.event;
		return e.pageX || e.clientX + document.body.scroolLeft;
	}
	function getY(e){
		e = e || window.event;
		return e.pageY || e.clientY + document.body.scrollTop;
	}
	var mouseXY = function(e){
		var x = getX(e);
		var y = getY(e);
		var _obj = {
			x:x,
			y:y
		};
		
		return _obj;
	};
	
	return {
		client : client,
		mouseXY : mouseXY
	};
});