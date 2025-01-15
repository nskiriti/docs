function bulbon(){
	console.log("bulb on method start");
	document.getElementById("bulbStatus").innerHTML = "Bulb ON";
	document.getElementById("bulbStatus").style.color = "yellow";
	document.getElementById("bulboffimg").src = "bulbon.gif";
	document.getElementById("p2").style.display = "initial";
}

function bulboff(){
	console.log("bulb off method start");
	document.getElementById("bulbStatus").innerHTML = "Bulb off";
	document.getElementById("bulbStatus").style.color = "red";
	document.getElementById("bulboffimg").src = "bulboff.gif";
	document.getElementById("p2").style.display = "none";	
}
/*
action is performed by the user. //button click
event will be triggered // onclick
subsequent function will be executed. // javascript
*/