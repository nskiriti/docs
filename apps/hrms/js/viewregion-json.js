function viewRegions(){
	let data = "";
	let regions = [];
	//get the JSON Data from the json file.

		let header = "<tr><th>Region Id</th><th>Region Name</th></tr>"
		let rows = "";
		for(let i = 0; i < regions.length; i++){
			let row = "<tr><td>"+regions[i].regionid+"</td><td>"+regions[i].regionName+"</td></tr>";
			rows +=row;
		}
		console.log(rows);
		data = header + rows;
		document.getElementById("data").innerHTML = data;
}
		
		