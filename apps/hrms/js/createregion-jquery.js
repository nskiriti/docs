    function createRegion() {
	let body =
	{
		"regionid": 6,
		"regionName": "Tasmania"
	}
    $.post("http://localhost:6010/regions/create",body, function (body) {
		$("span").html(body);
	});
}


