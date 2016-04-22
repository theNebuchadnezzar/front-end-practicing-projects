function showPic(whichpic) {
	var	source = whichpic.getAttribute("href");
	var	picTitle = whichpic.getAttribute("title");
	var placeholder = document.getElementById("placeholder");
	var	description = document.getElementById("description")；
	placeholder.setAttribute("src",source);
	description.firstChild.nodeValue = picTitle;
}