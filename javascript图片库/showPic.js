function showPic(whichpic) {
	var	source = whichpic.getAttribute("href");
	console.log(whichpic);
	var placeholder = document.getElementById("placeholder");
	placeholder.setAttribute("src",source);
}