require.config({
	baseUrl: "/weixin/c",
	paths: {
		"footer": "common/footer",

		"BIndex": "bean/BIndex",
		"CIndex": "controller/CIndex",
		"BDetail": "bean/BDetail",
		"CDetail": "controller/CDetail",
		"BCategory": "bean/BCategory",
		"CCategory": "controller/CCategory",
		"BBrand": "bean/BBrand",
		"CBrand": "controller/CBrand",
		"BCart": "bean/BCart",
		"CCart": "controller/CCart",
		"BOrder": "bean/BOrder",
		"COrder": "controller/COrder",
		"BUser": "bean/BUser",
		"CUser": "controller/CUser",
		"BLogin": "bean/BLogin",
		"CLogin": "controller/CLogin",
		"BRegister": "bean/BRegister",
		"CRegister": "controller/CRegister",

		"BPerson": "bean/BPerson",
		"CPerson": "controller/CPerson",
		"BAddress": "bean/BAddress",
		"CAddress": "controller/CAddress",
		"BAddressAdd": "bean/BAddressAdd",
		"CAddressAdd": "controller/CAddressAdd",

		"jquery": "lib/jquery",
		"city": "util/city",
		"slidefocus": "plugin/slidefocus",
		"reqAjax": "req/reqAjax",
		"JValidate": "plugin/JValidate", //self plugin
		"JURL": "plugin/JURL",
		"JDialog": "plugin/JDialog/JDialog",
		"client": "common/client",
		"JFileUpload": "plugin/JFileUpload",
		"iscrollss": "lib/iscrollss"
	},
	waitSeconds: 10,
	map: {
		'*': {
			'css': 'lib/css'
		}
	},
	shim: {
		'JDialog': ['css!/weixin/c/plugin/JDialog/JDialog.css'],
		"cookie": {
			deps: ['jquery'],
			exports: "jquery.cookie"
		}
	}
});