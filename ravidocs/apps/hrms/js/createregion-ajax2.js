function main(){
    let regionId = document.getElementById("regionid").value;
    let regionName = document.getElementById("regionname").value;
    regionId = parseInt(regionId);
    let data = {"regionid":regionId,"regionName":regionName};
    let requestData = JSON.stringify(data);
    let xhr = new XMLHttpRequest();
    xhr.open("POST", "http://localhost:6010/regions/create");
    xhr.send(requestData);
    xhr.onreadystatechange = function(){
        console.log("callback function start");
        if(xhr.status == 200 && xhr.readyState == 4){
            document.getElementById("message").innerHTML = "Record added successfully";
        };
    };

};