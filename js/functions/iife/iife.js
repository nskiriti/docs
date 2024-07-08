(
	function () {
		console.log ("This is IIFE Function");
	}
)
();

(
	function (a, b) {
		console.log ("This is IIFE Function with params = "+(a+b));
	}
)
(2, 3);

function normalFunction1(){
	console.log ("This is normalFunction1");
}



function normalFunction2(){
	console.log ("This is normalFunction2");
}
normalFunction2();


