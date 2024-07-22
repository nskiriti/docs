function main(){
   // sync();    
   async();
};
// This is the method to get the all the countries in a synchronous manner - This is API
function sync(){
    console.log("sync method start");
    let url = "https://restcountries.com/v3.1/all";
    let xhr = new XMLHttpRequest();
    xhr.open("GET", url, false);
    xhr.send();  
    if (xhr.status == 200){
       // console.log(xhr.response);
        let countries = [];
        countries = JSON.parse(xhr.response);
        console.log(countries.length);
        console.log(typeof countries);
        console.log(Array.isArray(countries));
        let header = "<tr><th>Country Name</th><th>Official Name</th></tr>";
        let rows = "";        
        for(let country of countries){
           // console.log((country.name).common);
           // console.log((country.name).official);
            let common = (country.name).common;
            let official = (country.name).official;
            let row = `<tr><td>${common}</td><td>${official}</td></tr>`;
            rows += row;
        };
        document.getElementById("countries").innerHTML = header + rows;
    }
    console.log("sync method end");
}
// This is the method to get the all the countries in asynchronous manner - This is API
function async(){
    console.log("async method start");
    let url = "https://restcountries.com/v3.1/all";
    let xhr = new XMLHttpRequest();
    xhr.open("GET", url, true);
    xhr.send();  
    console.log(xhr.status);
    xhr.onprogress = function(){
        console.log("on progress");        
    };
    xhr.onerror = function(){
        console.log("on error");
    };
    xhr.onload = function(){
        console.log("callback function start");
        if (xhr.status == 200){
            console.log("inside if");
            let countries = [];
            countries = JSON.parse(xhr.response);
            console.log(countries.length);
            console.log(typeof countries);
            console.log(Array.isArray(countries));
            let header = "<tr><th>Country Name</th><th>Official Name</th></tr>";
            let rows = "";        
            for(let country of countries){
               // console.log((country.name).common);
               // console.log((country.name).official);
                let common = (country.name).common;
                let official = (country.name).official;
                let row = `<tr><td>${common}</td><td>${official}</td></tr>`;
                rows += row;
            };
            document.getElementById("countries").innerHTML = header + rows;
        }
        console.log("callback function end");    
    };
       console.log("async method end");
}