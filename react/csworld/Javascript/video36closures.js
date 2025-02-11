function counterSecure(){
	console.log("counterSecure fn start");
	let count = 0;
	function inner(){
		console.log("inner fn start");
		count = count+1;
		document.getElementById("clickCounter").innerText = `clicked:${count}`;
		console.log("inner fn end");
	}
	console.log("counterSecure fn end");
	return inner;
}

let updateCounter = counterSecure();
