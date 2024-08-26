function main() {
    console.log("main method start");
    let promise = producer();
    //debugger;
    consumer(promise);
    console.log("main method end");
}

function consumer(promise) {
    console.log("consumer method start");
    console.log("promise = " + promise);
    //debugger;
    promise.then(resolveCBF, rejectCBF);
    console.log("consumer method end");
}

function producer() {
    console.log(" producer method start");
    let promise = new Promise(function (resolveCBP, rejectCBP) {
        let xhr = new XMLHttpRequest();
        let method = "GET";
        //let url = "https://restcountries.com/v3.1/all";
        //xhr.open(method, url);
        //xhr.send();
        //xhr.onload = function () {
            //console.log("response = " + xhr.response);
            let status = 404;
            if (xhr.status == 200) {
                //resolveCBP(xhr.response);
                setTimeout(resolveCBP, 10000, xhr.response);
                //debugger;
            } else {
                //rejectCBP(xhr.response);
                let error = new Error("something went wrong")
                setTimeout(rejectCBP, 10000, error);
                //debugger;
            }
        //}
    });
    console.log(" producer method end");
    return promise;
}

function resolveCBF(value) {
    console.log(" resolveCBF method start");
    console.log("response = " + value);
    //debugger;
    console.log(" resolveCBF method end");
}

function rejectCBF(error) {
    console.log(" rejectCBF method start");
    console.log("error = " + error);
    //debugger;
    console.log(" rejectCBF method end");
}