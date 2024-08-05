function createRegionAjax() {
    let regionId = document.getElementById("regionid").value;
    regionId = parseInt(regionId);
    let regionName = document.getElementById("regionName").value;
    let requestBody = { "regionid": regionId, "regionName": regionName };
    let requestBodyJson = JSON.stringify(requestBody);
    console.log(requestBodyJson);
    let xhr = new XMLHttpRequest();
    xhr.open("POST", "http://localhost:6010/regions/create");
    xhr.send(requestBodyJson);
    xhr.onreadystatechange = function () {
        console.log("callback fn start readyState = " + xhr.readyState);
        if (xhr.status == 200 && xhr.readyState == 4) {
            console.log("if block start");
            console.log("region Id is updated to " + regionId + "region Name is updated to " + regionName);
            document.getElementById("message").innerHTML = "Entry Added succesfully";
        }
    };
    xhr.onload = function () {
        console.log("onload");
    };
    xhr.onprogress = function () {
        console.log("on progress");
    };
    xhr.onerror = function (){
        console.log("on error");
    };
}
