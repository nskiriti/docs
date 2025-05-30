function main(){
    let xhr =new XMLHttpRequest();
    xhr.open("GET", "http://localhost:6010/jobs/", true);
    xhr.send();
    let responseObject = {};
    let jobs = [];    
    xhr.onload = function(){
        console.log("callback function starts");
        if(xhr.status == 200 && xhr.readyState == 4){
            console.log(xhr.response);
            responseObject = JSON.parse(xhr.response);
            console.log(responseObject.status);
            console.log(responseObject.message);
            console.log(responseObject.result);
            jobs = responseObject.result;
            let header = "<tr><th>jobId</th><th>jobTitle</th><th>minSalary</th><th>maxSalary</th></tr>"
            let data = "";
            let rows = "";
            for(let job of jobs){
                let row = "<tr><td>"+ job.jobId+"</td><td>"+job.jobTitle+"</td><td>"+job.minSalary+"</td><td>"+job.maxSalary+"</td></tr>";
                rows = rows + row;
            };
            data = header + rows;
            document.getElementById("message").innerHTML ="<table>"+data+"</table>" ;
        };
    };
};