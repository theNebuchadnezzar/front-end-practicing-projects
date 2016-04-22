function showPic(whichPic) {
	var	source = whichPic.getAttribute("herf");
	var placeholder = document.getElementById('placeholder');
	placeholder.setAttribute("src",source);
}