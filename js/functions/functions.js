
function calculate(sign) {
	
	let s1 = document.getElementById("n1").value;
	let s2 = document.getElementById("n2").value;
	let num1 = parseInt(s1);
	let num2 = parseInt(s2);
	
	let res = calculateNode(num1, num2, sign);
	console.log(res);
	document.getElementById("res").innerHTML = res;
}

function calculateNode(n1, n2, sign) {
	console.log("calculateNode method start");
	let res = 0;
	switch (sign) {
		case "+": {
			res = add(n1, n2);
			break;
		}
		case "-": {
			res = sub(n1, n2);
			break;
		}
		case "*": {
			res = mul(n1, n2);
			break;
		}
		case "/": {
			res = div(n1, n2);
			break;
		}
	}
	return res;
}

function add(n1, n2) {
	return n1 + n2;

}

function sub(n1, n2) {
	return n1 - n2
}

function mul(n1, n2) {
	return n1 * n2;
}

function div(n1, n2) {
	return n1 / n2;
}