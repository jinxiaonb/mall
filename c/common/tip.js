define(function(){
	var tip = {
		if_null:true,
		not_null:"",
		is_null:"不能为空！",
		is_error:"错误！",
		is_notCommon:"不相同",
		is_errorString:"内容不能出现英文输入法的\'和\"字符"
	};
	
	var quotVali = function(message){
		var flag = (message.indexOf('\'') > -1) || (message.indexOf('\"') > -1);
		return flag;
		//console.log(flag);
	}
	
	var judgeMessage = function(message){
		if(message == "" || message == null || message == undefined){
			message = "";
		}
		return message;
	};
	
	var judgeBooleanMessage = function(message){
		tip.if_null = true;
		if(message == "" || message == null || message == undefined){
			tip.if_null = true;
		}else{
			tip.if_null = false;
		}
		return tip.if_null;
	};
	
	var judgeTextLengthMessage = function(message,minlength,maxlength){
		var _length = message.length;
		tip.if_null = true;
		if(_length > maxlength || minlength > _length){
			tip.if_null = true;
		}else{
			tip.if_null = false;
		}
		return tip.if_null;
	};
	
	var ifLengthOver = function(message,minlength,maxlength){
		return judgeTextLengthMessage(message,minlength,maxlength);
	}
	
	var ifNull = function(message){
		return judgeBooleanMessage(message);;
	};
	
	var notNull = function(){
		return tip.not_null;
	};
	
	var isNull = function(message){
		message = judgeMessage(message);
		return message+tip.is_null;
	};
	
	var isError = function(message){
		message = judgeMessage(message);
		return message+tip.is_error;
	};
	
	var isNotCommon = function(message){
		message = judgeMessage(message);
		return message+tip.is_notCommon;
	};
	
	var setErrorText = function(ele,message){
		$(ele).text(message);
	};
	
	return {
		notNull : notNull,
		isNull : isNull,
		isError : isError,
		ifNull : ifNull,
		ifLengthOver : ifLengthOver,
		isNotCommon : isNotCommon,
		setErrorText : setErrorText,
		quotVali : quotVali
	};
});