async function viewregions(){
	let data = "";
	let regions = [];
	//Get the json data from rest service
	await $.getJSON("http://localhost:6010/regions/", function(response){
		console.log("isArray " + Array.isArray(response));
		regions = response;		
	});		
	let header = "<tr><th>Region Id</th><th>Region Name</th></tr>";
	let rows = "";
	for(let region of regions ){
		let row = "<tr><td>"+region.regionid+"</td><td>"+region.regionName+"</td></tr>";
		rows = rows + row;
	};	
	data = header + rows;
	$("table").html(data);
}