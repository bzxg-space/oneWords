function copy() {
	var textArea = document.createElement("textarea");
	textArea.innerHTML = word.innerHTML + '\n-- 来自一言';
	document.body.appendChild(textArea);
	textArea.select();
	document.execCommand('copy');
	toast('复制成功 : )', 0);
	textArea.parentNode.removeChild(textArea);
	//document.body.removeChild(textArea);
}
