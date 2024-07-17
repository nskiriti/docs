function viewregions(){
	let data = "";
	let regions = [];
	//Get the json data from rest service
	$.getJSON("https://www.hostname.com:portNumber/hrms/regions/", function(response){
	//Get the json data from regions.json file	
	//$.getJSON("/model/regions.json", function(response){
		console.log(response);
		regions = response;
	});
		
	let header = "<tr><th>Region Id</th><th>Region Name</th></tr>";
	let rows = "";
	for(let i = 0; i<regions.length; i++){
		let row = "<tr><td>"+regions[i].regionid+"</td><td>"+regions[i].regionName+"</td></tr>";
		rows = rows + row;
		console.log(rows);
	};	
	data = header + rows;
	console.log(data);
	//document.getElementById("tab1").innerHTML = data; 
	$("table").html(data);
}