function main() {
    console.log("Main method start");
    // sync();
    async();
    console.log("Main method end");
};

function sync() {
    console.log("sync method start");
    let url = "https://restcountries.com/v3.1/all";
    let xhr = new XMLHttpRequest;
    xhr.open("GET", url, false);
    xhr.send();
    console.log(xhr.status);
    if (xhr.status == 200) {
        console.log(xhr.response);
        console.log(typeof (xhr.response));
        let countries = [];// ask for rest service end point(middleware), if there is no rest service ready, please share atleast JSON data.
        countries = JSON.parse(xhr.response);// reverse is stringify
        console.log(typeof (countries));
        let rows = "";
        let header = "<tr><th>Country Name</th><th>Official Name</th></tr>";
        for (let country of countries) {
            let common = (country.name).common;
            let official = (country.name).official;
            let row = `<tr><td>${common}</td><td>${official}</td></tr>`;
            rows = rows + row;
        };
        document.getElementById("countries").innerHTML = header + rows;
    };

    console.log("sync method end");
};

function async() {
    console.log("async method start");
    let url = "https://restcountries.com/v3.1/all";
    let xhr = new XMLHttpRequest;
    xhr.open("GET", url, true);
    xhr.send();
    console.log(xhr.status);
    xhr.onerror = function () {
        console.log("lookslike there is an error in opening request");
    };
    xhr.onprogress = function () {
        document.getElementById("countries").innerHTML = "Table loading";
    };
    xhr.onload = function () {
        console.log("callback function starts");
        if (xhr.status == 200) {
            console.log(xhr.response);
            console.log(typeof (xhr.response));
            let countries = [];
            countries = JSON.parse(xhr.response);
            console.log(typeof (countries));
            let rows = "";
            let header = "<tr><th>Country Name</th><th>Official Name</th><th>Capital City</th><th>Korean Translation</th><th>Car Side</th></tr>";
            for (let country of countries) {
                let common = (country.name).common;
                let official = (country.name).official;
                let capital = country.capital;
                let translation = ((country.translations).kor).official;
                let carside = ((country.car).side);
                let row = `<tr><td>${common}</td><td>${official}</td><td>${capital}</td><td>${translation}</td><td>${carside}</td></tr>`;
                rows = rows + row;
            };
            document.getElementById("countries").innerHTML = header + rows;
        };
        console.log("callback function end");
    }
    console.log("async method end");
};