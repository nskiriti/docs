function createRegion() {
	let reqBody = {
		"regionid": 9,
		"regionName": "Japan"
	};
	console.log(typeof reqBody);
	$.ajax({
		url: 'http://localhost:6010/regions/create',
		data: JSON.stringify(reqBody),
		type: 'post',
		dataType: 'json',
		contentType: 'application/json',
		success: function (data) {
			console.log(data);
		},
	});
}