define(['client'], function(client) {

	function dialogStructure(DialogJson) {
		//		$(".JDialog-mask").removeClass("hidden");
		//		$(".JDialog").removeClass("hidden");
		if ($(".JDialog-mask").length) {
			//			$(".JDialog-mask").remove();
			//			$(".JDialog").remove();
		}
		var JDialog_mask = $("<div class='JDialog-mask'></div>");
		var JDialog = $("<div class='JDialog'>");

		var JDialog_head = $("<p class='JDialog-head overflow'><span class='JDialog-title f-left'>" + DialogJson.JDialog_title + "</span><span class='JDialog-close f-right hidden'>x</span></p>")
		var JDialog_content = $("<div class='JDialog-content'><p class='JDialog-tip'>" + DialogJson.JDialog_tip + "</p></div>");

		var JDialog_btn = $("<div class='JDialog-btn'>");
		var JDialog_submit = $("<a href='javascript:void(0);' class='JDialog-submit'>确定</a>");
		var JDialog_cancel = $("<a href='javascript:void(0);' class='JDialog-close'>取消</a>");
		JDialog_btn.append(JDialog_submit);
		//JDialog_btn.append(JDialog_cancel);

		JDialog.append(JDialog_head);
		JDialog.append(JDialog_content);
		JDialog.append(JDialog_btn);

		$("body").append(JDialog_mask);
		$("body").append(JDialog);
		var c_client = client.client();
		$(".JDialog-mask").height(c_client.c_d_height);
		$(".JDialog").css({
			"top": c_client.c_scroll_top + 100
		});
	}

	function dialogEvent(callback) {
		$(document).on("click", ".JDialog-close", function() {
			$(".JDialog-mask").remove();
			$(".JDialog").remove();
			callback();
		});

		$(document).on("click", ".JDialog-submit", function() {
			$(".JDialog-mask").remove();
			$(".JDialog").remove();
			callback();
		});
	}

	var buildDialog = function(d_json) {
		var DialogJson = {
			JDialog_type: "JAlert",
			JDialog_title: "提示",
			JDialog_tip: "成功",
			JCallback: function() {}
		};
		if (d_json.JType) {
			DialogJson.JDialog_type = d_json.JType;
		}
		if (d_json.JTitle) {
			DialogJson.JDialog_title = d_json.JTitle;
		}
		if (d_json.JMessage) {
			DialogJson.JDialog_tip = d_json.JMessage;
		}
		if (d_json.JCallback) {
			DialogJson.JCallback = d_json.JCallback;
		}

		if (DialogJson.JDialog_type == "JAlert") {
			dialogStructure(DialogJson);
			dialogEvent(DialogJson.JCallback);
		}

	};

	return {
		buildDialog: buildDialog
	}
});