function main(){
	console.log("main method start");
	//loop1(5);
	loop2(100);
	console.log("main method End");
}

function loop1(n){
	for(let i=0; i<=n; i++){
		employeeId(i);
		
	}
}

function loop2(k){
	for(let i=k; i>0; i--){
		employeeId(i);
	}
	
}

function employeeId(empId){	
	console.log(" employeeID " + empId);
	
}
	