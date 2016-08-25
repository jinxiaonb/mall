require.config({
	baseUrl: "/c",
	paths: {
		"reqAjax": "req/reqAjax",
		"JValidate": "plugin/JValidate", //self plugin
		"JURL": "plugin/JURL",
		"JFileUpload": "plugin/JFileUpload",
		"iscroll": "lib/iscroll"
	},
	waitSeconds: 10,
	map: {
		'*': {
			'css': 'lib/css'
		}
	},
	shim: {
		'JDialog': ['css!/plugin/JDialog/JDialog.css'],
		"cookie": {
			deps: ['jquery'],
			exports: "jquery.cookie"
		}
	}
});