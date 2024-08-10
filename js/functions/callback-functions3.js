function main() {
  console.log("main function start");
  async(successCallbackFunction, failureCallbackFunction);
  console.log("main function end");
}

function async(successCallbackParam, failureCallbackParam) {
  console.log("async function start");
  let url = "https://restcountries.com/v3.1/all";
  let xhr = new XMLHttpRequest();
  xhr.open("GET", url);
  xhr.send();
  console.log(xhr.status);

  xhr.onprogress = function () {
    console.log("on progress");
  };

  xhr.onerror = function () {
    console.log("on error");
    failureCallbackParam("Error");
  };

  xhr.onload = function () {
    console.log("on load");
    if (xhr.status == 200) {
      successCallbackParam(xhr.response);
    }
  };
  footer();
  console.log("async function end");
}

function successCallbackFunction(response) {
  console.log("successCallbackFunction function start");
  countries = JSON.parse(response);
  console.log(countries.length);
  console.log(typeof countries);
  console.log(Array.isArray(countries));
  let header = "<tr><th>Country Name</th><th>Official Name</th></tr>";
  let rows = "";
  for (let country of countries) {
    let common = (country.name).common;
    let official = (country.name).official;
    let row = `<tr><td>${common}</td><td>${official}</td></tr>`;
    rows += row;
  };
  document.getElementById("countries").innerHTML = header + rows;
  console.log("successCallbackFunction function end");
}
function failureCallbackFunction(error) {
  console.log(error);
}
function footer() {
  console.log("footer function start");
  console.log("footer function end");
}