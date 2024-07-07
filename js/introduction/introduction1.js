function externalJavascript(){
	document.getElementById("p3").innerHTML="This text is from external js file"
}
function changeImage(){
	document.getElementById("image1").src="bulbon.gif";
	document.getElementById("b1").style.color="red";
	document.getElementById("p4").style.visibility="hidden";
}
function changeLink(){
	document.getElementById("a1").href="https://olympics.com/en/paris-2024";
	document.getElementById("a1").target="_blank"
}