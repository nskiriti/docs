function main() {
	//forLoop();
	whileLoop();
	//doWhileLoop();

}

function forLoop() {
	const cars = ["BMW", "Volvo", "Saab", "Ford", "Fiat", "Audi"];
	let text = "";
	let i = 0;
	for (; i < cars.length;) {
		text += cars[i] + "<br>";
		//text = taxt + cars[i] + "<br>";
		console.log(cars[i]);
		if (i == cars.length) {
			break;
		}
		i++;
	}
	document.getElementById("demo").innerHTML = text;
}

function whileLoop() {
	const cars = ["BMW", "Volvo", "Saab", "Ford", "Fiat", "Audi"];
	let text = "";
	let length = 0;
	let i = 0;
	while (i < length) {
		text += cars[i] + "<br>";
		console.log(cars[i]);
		i++
	}
}

function doWhileLoop() {
	const cars = ["BMW", "Volvo", "Saab", "Ford", "Fiat", "Audi"];
	let text = "";
	let length = 0;
	let i = 0;
	do {
		text += cars[i] + "<br>";
		console.log(cars[i]);
		i++
	}
	while (i < length)
}