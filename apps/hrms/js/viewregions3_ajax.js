function main(){    
    let xhr = new XMLHttpRequest();
    xhr.open("GET","https://restcountries.com/v3.1/all",true);
    xhr.send();
    let regions = [];
    let header = "<tr><th>Region Name</th></tr>";
    let rows = "";
    xhr.onload = function(){
        console.log("callback function start");
        if(xhr.status == 200 && xhr.readyState == 4){
            regions = xhr.response;
            // console.log(typeof(regions));
            // console.log(regions);
            regions = JSON.parse(xhr.response);
            console.log(regions);
            for(let region of regions){
                let row = "<tr><td>"+((region.name).common)+"</td></tr>";
                rows = rows + row;
            };
        let data = header + rows;
        console.log(data);   
        document.getElementById("table").innerHTML = data; 

        }

    };
};