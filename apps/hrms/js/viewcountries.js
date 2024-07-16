function viewcountries(){
	let countries = [
		{
			country: "India",
			value: "#f00"
		},
		{
			country: "Australia",
			value: "#0f0"
		},
		{
			country: "Sweden",
			value: "#00f"
		},
		{
			country: "Denmark",
			value: "#0ff"
		},
		{
			country: "Austria",
			value: "#f0f"
		},
		{
			country: "France",
			value: "#ff0"
		},
		{
			country: "Italy",
			value: "#000"
		}
];

	let data ="";
	let rows = "";
	let header = "<tr><th>Country</th><th>Code</th></tr>";
	for(i = 0; i<countries.length; i++){
		let row = "<tr><td>"+countries[i].country+"</td><td>"+countries[i].value+"</td></tr>";
		console.log(row);
		rows = rows + row;
		console.log(rows);
	}
	data = header + rows;
	document.getElementById("tab1").innerHTML = data;
}