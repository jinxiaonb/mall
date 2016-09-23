define([], function() {

	var error = {
		phoneEmpty: "* 手机号码不能为空！",
		phoneNotString: "* 手机号码只能为数字！",
		phoneLength: "* 请填写11位的手机号码！",
		phoneError: "* 该手机号码不正确！",
		phoneNotExists: "* 该手机号码已经注册！",
		phoneExists: "* 该手机号码已经注册！"
	};

	var jv = {
		flag: false,
		textTip: "",
		isEmpty: function(text) {
			this.flag = false;
			this.flag = text == "" ? this.flag = false : this.flag = true;
			return this.flag;
		},
		isPhone: function(text) {
			if (!this.isEmpty(text)) {
				this.textTip = error.phoneEmpty;
				return this.flag;
			}
			//console.log(!this.number(text));
			if (!this.number(text)) {
				this.textTip = error.phoneNotString;
				return this.flag;
			}
			//console.log((this.textLength(text) !== 11));
			if (!(this.textLength(text) == 11)) {
				this.flag = false;
				this.textTip = error.phoneLength;
				return this.flag;
			}
			//console.log(!this.phone(text));
			if (!this.phone(text)) {
				this.textTip = error.phoneError;
				return this.flag;
			}
			this.textTip = "";
			return this.flag;
		},
		textLength: function(text) {
			var len = text.toString().length;
			return len;
		},
		email: function(text) {
			this.flag = false;
			var reg = /^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/;
			if (reg.test(text)) {
				this.flag = true;
			}
			return this.flag;
		},
		phone: function(text) {
			this.flag = false;
			var reg = /^1[3|4|5|7|8][0-9]\d{8,8}$/;
			if (reg.test(text)) {
				this.flag = true;
			}

			return this.flag;
		},
		number: function(text) {
			this.flag = false;
			var reg = /^[0-9]*$/;
			if (reg.test(text)) {
				this.flag = true;
			}
			return this.flag;
		},
		number1f: function(text) {
			this.flag = false;
			var reg = /^[0-9]+([.]{1}[0-9]{1})?$/;
			if (reg.test(text)) {
				this.flag = true;
			}
			return this.flag;
		}
	};

	return {
		jv: jv
	};
});