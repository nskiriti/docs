function main() {
	// ifTrue();
	// ifFalse();
	// ifElseTrue();
	// ifElseFalse();
	// ifCondition();
	 ifElseCondition();
	// elseIfLadder1();
	//elseIfLadder2();
	//switchCaseBreak1();
	//switchCaseBreak2();
}

function ifTrue() {
	if (1 == 1) {
		console.log("ifTrue() true Condition");
	}
}

function ifFalse() {
	if (1 == 2) {
		console.log("ifFalse() false condition");
	}
}

function ifElseTrue() {
	if (1 == 1) {
		console.log("ifElseTrue true condition");
	} else {
		console.log("ifElseTrue false condition");
	}
}

function ifElseFalse() {
	if (1 == 2) {
		console.log("ifElseFalse true condition");
	} else {
		console.log("ifElseFalse false condition");
	}
}

function ifCondition() {
	let age = 17;
	if (age >= 18) {
		console.log("You are eligible to apply for Voter card");
	}
}

function ifElseCondition() {
	let ageString = document.getElementById("age").value;
	let age = parseInt(ageString);
	let message = "";
	if (age >= 18) {
		message = "You are eligible to apply for Voter card";
	} else {
		message = "You are not eligible to apply for Voter card. Please apply after " + (18 - age) + " years";
	}
	document.getElementById("message").innerHTML = message;
}

function elseIfLadder1() {
	let cls = 7;
	if (cls <= 5) {
		console.log("Go to Primary school");
	} else if (cls <= 10) {
		console.log("Go to High school");
	} else if (cls <= 12) {
		console.log("GO to inter college");
	} else if (cls <= 15) {
		console.log("GO to degree college");
	} else {
		console.log("GO to PG college");
	}
}
function elseIfLadder2() {
	const hour = new Date().getHours();
	let greeting;
	if (hour < 10) {
		greeting = "Good Morning";
	} else if (hour < 12) {
		greeting = "Good Afternoon";
	} else if (hour < 16) {
		greeting = "Good Evening";
	} else if (hour < 20) {
		greeting = "Good Day";
	} else {
		greeting = "Good Noon";
	}
	console.log(greeting);
}

function switchCaseBreak1() {
	const day = 5;
	let greeting;
	switch(day) {
		case 0:
			greeting = "Sunday";
			break; 
		case 1:
			greeting = "Monday";
			break;
		case 2:
			greeting = "Tuesday";
			break;
		case 3:
			greeting = "Wednesday";
			break;
		case 4:
			greeting = "Thursday";
			break;
		case 5:
			greeting = "Friday";
			break;
		case 6:
			greeting = "Saturday";
			break;
		default:
			greeting = "Worng Day";
	}
	console.log(greeting);
}
function switchCaseBreak2() {
	const hour = new Date().getHours();
	let greeting;
	switch(hour) {
		case 0:
			greeting = "No Greet";
			break; 
		case 1:
			greeting = "No Greet";
			break;
		case 2:
			greeting = "No Greet";
			break;
		case 3:
			greeting = "No Greet";
			break;
		case 4:
			greeting = "No Greet";
			break;
		case 5:
			greeting = "Good morning";
			break;
		case 6:
			greeting = "Good morning";
			break;
		case 7:
			greeting = "Good morning";
			break; 
		case 8:
			greeting = "Good morning";
			break;
		case 9:
			greeting = "Good morning";
			break;
		case 10:
			greeting = "Good morning";
			break;
		case 11:
			greeting = "Good morning";
			break;
		case 12:
			greeting = "Good afternoon";
			break;
		case 13:
			greeting = "Good afternoon";
			break;
		case 14:
			greeting = "Good afternoon";
			break; 
		case 15:
			greeting = "Good afternoon";
			break;
		case 14:
			greeting = "Good afternoon";
			break;
		case 17:
			greeting = "Good afternoon";
			break;
		case 18:
			greeting = "Good evening";
			break;
		case 19:
			greeting = "Good evening";
			break;
		case 20:
			greeting = "Good evening";
			break;
		case 21:
			greeting = "Good night";
			break; 
		case 22:
			greeting = "Good night";
			break;
		case 23:
			greeting = "Good night";
			break;
	}
	console.log(greeting);
}