define(['cookie'], function(cookie) {


	var setActiveNav = function(msg) {
		$('#header').load('/pc/views/header.html', function() {
			//console.log("header");
			// console.log($.cookie("jforumUserInfo"));
			// console.log($.cookie("jforumUserPhone"));
			var userid = $.cookie("jforumUserInfo"),
				user_phone = $.cookie("jforumUserPhone");
			//console.log(userid, user_phone);
			if (userid) {
				$(".login").addClass("hidden");
				$(".register").addClass("hidden");
				$(".useraccount a").text(user_phone);
				$(".useraccount").removeClass("hidden");
				$(".userlogout").removeClass("hidden");
			} else {
				$(".useraccount").addClass("hidden");
				$(".userlogout").addClass("hidden");
				$(".login").removeClass("hidden");
				$(".register").removeClass("hidden");
			}

		});

		$(document).on("click", "#logout", function() {
			$.ajax({
				type: "post",
				url: "/common/logout",
				dataType: "json",
				success: function(data) {
					console.log(data);
					if (data.result) {
						location.reload();
						//location.href = "/pc/views/user/login.html";
					}
				}
			});
		});
	}

	return {
		setActiveNav: setActiveNav
	}
});