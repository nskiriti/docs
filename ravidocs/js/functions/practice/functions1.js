// function as a value
function add1(n1, n2){
	let x = n1 + n2;
	console.log(x);
	return x;
}

function main(){
	console.log("main method start");
	add1(10,15);
	console.log("main method end");
}