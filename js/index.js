var apis = [
	'https://v1.hitokoto.cn/?encode=text',
	'https://v1.hitokoto.cn/?c=a&encode=text',
	'https://v1.hitokoto.cn/?c=b&encode=text',
	'https://v1.hitokoto.cn/?c=c&encode=text',
	'https://v1.hitokoto.cn/?c=d&encode=text',
	'https://v1.hitokoto.cn/?c=e&encode=text',
	'https://v1.hitokoto.cn/?c=f&encode=text',
	'https://v1.hitokoto.cn/?c=g&encode=text'
];
var flag = 0;
var word = document.getElementById('word');
var lis = document.getElementsByTagName('li');
ajax(apis[0]);

function reload() {
	show(flag + 1);
}

function show(locals) {
	flag = locals - 1;
	ajax(apis[locals - 1]);
	for (var i = 0; i < lis.length; i++) {
		if (i != locals - 1) {
			lis[i].style.cssText = "border:none;border-bottom:solid 2px #00a4ff;";
		} else {
			lis[i].style.cssText = "border:none;border-bottom:solid 2px #8800ff;";
		}
	}
}

//获取内容
//by https://blog.csdn.net/qq_15243963/article/details/77970175
function ajax(url) {
	var xmlhttp = new XMLHttpRequest();
	var type = "GET"; //请求方式
	xmlhttp.open(type, url, true); //请求方式，接口，异步
	xmlhttp.send(); //发送请求
	xmlhttp.onreadystatechange = function() {
		if (xmlhttp.status == 200 && xmlhttp.readyState == 4) {
			var result = xmlhttp.response;
			if (window.screen.width > 420) {
				word.style.cssText = "font-size:22px;";
			} else {
				if (result.length <= 60) {
					word.style.cssText = "font-size:20px;";
				} else if (result.length <= 100) {
					word.style.cssText = "font-size:18px;";
				} else {
					word.style.cssText = "font-size:16px;line-height:25px;";
				}
			}
			word.innerText = result;
		}
	}
}
