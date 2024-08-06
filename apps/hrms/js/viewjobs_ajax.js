function main(){
    let xhr =new XMLHttpRequest();
    xhr.open("GET", "http://localhost:6010/jobs/", true);
    xhr.send();
    let jobs = [];
    xhr.onload = function(){
        console.log("callback function starts");
        if(xhr.status == 200){
            console.log(xhr.response);
            jobs = JSON.parse(xhr.response);
            console.log(jobs.result);
            let header = "<tr><th>jobId</th><th>jobTitle</th><th>minSalary</th><th></th></tr>"
            let data = "";
            let rows = "";
            for(let ele of jobs.result){
                let row = "<tr><td>"+ ele.jobId+"</td><td>"+ele.jobTitle+"</td><td>"+ele.minSalary+"</td><td>"+ele.maxSalary+"</td></tr>";
                rows = rows + row;
            };
            data = header + rows;
            document.getElementById("message").innerHTML = data;
        };
    };
};