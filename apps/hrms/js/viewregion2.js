function viewregions(){
	let data = "";
	let regions = 
		[
			{
			"regionid": 5,
			"regionName": "New Zealand"
			},
			{
			"regionid": 1,
			"regionName": "Europe"
			},
			{
			"regionid": 2,
			"regionName": "Americas"
			},
			{
			"regionid": 3,
			"regionName": "Asia"
			},
			{
			"regionid": 4,
			"regionName": "Middle East and Africa"
			}
		];
	let header = "<tr><th>Region Id</th><th>Region Name</th></tr>";
	let rows = "";
	for(let i = 0; i<regions.length; i++){
		let row = "<tr><td>"+regions[i].regionid+"</td><td>"+regions[i].regionName+"</td></tr>";
		rows = rows + row;
		console.log(rows);
	};	
	data = header + rows;
	console.log(data);
	document.getElementById("tab1").innerHTML = data;
}