function createRegion() {
let regionid =	document.getElementById("regionId").value;
let regionName =	document.getElementById("regionName").value;
regionid = parseInt(regionid);
let requestBody = {"regionid":regionid,"regionName":regionName};
let requestData = JSON.stringify(requestBody);
		$.ajax({
		url: 'http://localhost:6010/regions/create',
		data: requestData,
		type: 'post',
		dataType: 'json',
		contentType: 'application/json',
		success: function (data) {
			console.log(data);
			console.log(data.message);
			console.log(data.status);
		},
	});
}