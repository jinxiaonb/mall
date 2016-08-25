define([], function() {

	var imgUpload = {
		init: function(ele, userava, pattern, uploadurl) { //ele:input file id,userava:上传后返回的图片地址
			$("#" + ele).change(function(e) {
				var _this = $(this);
				var _fileInput = _this[0];
				//console.log(_fileInput);
				var byteSize = _fileInput.files[0].size;
				//console.log(_fileInput.files[0]);
				//console.log(byteSize);
				if (!(_this.val().match(/.*(.jpg|.gif|.png|.txt|.doc|.docx|.pdf)$/))) {
					//tip.setErrorText($(".error"),"上传的图片类型必须是jpg，gif或png格式！");
					return false;
				}
				imgUpload.ajaxFileUpload(ele, userava, pattern, uploadurl);
			});
		},
		ajaxFileUpload: function(element, userava, pattern, uploadurl) {
			var formData = new FormData();
			formData.append('uploadFile', document.getElementById(element).files[0]);
			//return false;
			$.ajax({
				url: uploadurl,
				type: 'post',
				success: function(data) {
					console.log(data);
					if (data.result) {
						if (pattern == "a") {
							$(userava).attr("href", data.fileUrl);
						} else if (pattern == "img") {
							$(userava).attr("src", data.imageUrl);
						} else if (pattern == "file") {
							$(userava).val(data.fileUrl);
						}
					}
				},
				data: formData,
				cache: false,
				contentType: false,
				processData: false
			});

			return false;
		}
	};

	return imgUpload;
});