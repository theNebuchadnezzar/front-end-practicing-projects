function getReady() {
if (!document.getElementById) {return false;}
if (!document.getElementById("imageCollection")) {return false;}
if (!document.getElementByTagName) {return false;}
var	collection = document.getElementById('imageCollection');
var link = collection.getElementsByTagName('a');
for (var i = 0 ; i < link.length; i++) {
	link[i].onclick = function () {
		return showPic(this);
	}
	//link[i].onkeypress = link[i].onclick;
}

}

function showPic(whichpic) {
	//验证placeholder的存在
	if (!document.getElementById("placeholder")) {return false;}
	var	source = whichpic.getAttribute("href");
	var placeholder = document.getElementById("placeholder");
	if (placeholder.nodeName != "IMG") {return false;}
	placeholder.setAttribute("src",source);

	//将description元素变为可选的
	if (document.getElementById("description")) {		
		var	picTitle = whichpic.getAttribute("title")?whichpic.getAttribute("title"):"";
		var	description = document.getElementById("description");
		if (description.firstChild.nodeType == 3) {
		description.firstChild.nodeValue = picTitle;
		}
	}
	return false;
}

function addLoadEvent(func) {
	var oldonload = window.onload;
	if (typeof window.onload !="function") {
		window.onload = func;
	}else{
		window.onload = function(){
			oldonload();
			func();
		}
	}
}

addLoadEvent(getReady);