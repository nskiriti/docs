function bulbOn() {
    console.log("bulbOn");
    document.getElementById("img1").src = "bulbon.gif";
	document.getElementById("p1").innerHTML = "Bulb ON";
	window.document.getElementById("p1").style.color = "yellow";
    window.document.getElementById("p2").style.display = "initial";
}
function bulbOff() {
    console.log("bulbOff");
    document.getElementById("img1").src = "bulboff.gif";
	document.getElementById("p1").innerHTML = "Bulb OFF";
	document.getElementById("p1").style.color = "grey";
    document.getElementById("p2").style.display = "none";
}

/*
action is performed by the user. //button click
event will be triggered // onclick
subsequent function will be executed. // javascript
*/