
function add1(n1,n2) {
	let res1 = n1 + n2;
	console.log(res1);
}

function add2(n1, n2) {
	return n1 + n2;
}
function getRegionNameById(req) {
	//TODO validate the req object
	let res = {
		"regionid": 1,
		"regionName": "Asia"
		}
		
	return res;
}
function postRegion(data, success, failure){
	//later
	if(data == null) {
		success();
	}
	else {
		failure();
	}
}
function response() {
	console.log("region created sucessfully.");
}
function error() {
	console.log("regionid is already exist.");
}

function main() {
	//function call
			   //add1(10,12);
			   
	// function in a value	   
	//let res2 = add2(13,14);
	//console.log(res2);
	
	// function in a expression
	//let res3 = function(n1,n2){
	//	return n1 + n2; 
	//}
	//console.log(res3(15,16));
	
	//let req = {"regionid": 1}
	
	//let res = getRegionNameById(req);
	//console.log("regionName = " +res.regionName);
	let req = {
		"regionid": 1,
		"regionName": "Asia"
		}
	postRegion(req, response, error);
}

main();