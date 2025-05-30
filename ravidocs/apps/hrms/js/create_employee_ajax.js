function createemployee() {
    let employeeId = document.getElementById("employeeId").value;
    employeeId = parseInt(employeeId);
    let firstName = document.getElementById("firstName").value;
    let lastName = document.getElementById("lastName").value;
    let email = document.getElementById("email").value;
    let phoneNumber = document.getElementById("phoneNumber").value;
    let hireDate = document.getElementById("hireDate").value;
    console.log(hireDate);
    console.log(typeof (hireDate));
    let salary = document.getElementById("salary").value;
    salary = parseInt(salary);
    let jobId = document.getElementById("jobId").value;
    let commisionPct = document.getElementById("commisionPct").value;
    commisionPct = parseInt(commisionPct);
    let managerId = document.getElementById("managerId").value;
    managerId = parseInt(managerId);
    let departmentId = document.getElementById("departmentId").value;
    departmentId = parseInt(departmentId);
    let requestBody = {
        "employeeId": employeeId,
        "firstName": firstName,
        "lastName": lastName,
        "email": email,
        "phoneNumber": phoneNumber,
        "hireDate": hireDate,
        "salary": salary,
        "jobId": jobId,
        "commisionPct": commisionPct,
        "managerId": managerId,
        "departmentId": departmentId
    };
    let finalRequestBody = JSON.stringify(requestBody);
    console.log(finalRequestBody);
    let xhr = new XMLHttpRequest();
    xhr.open("POST","http://localhost:6010/employees/");
    xhr.send(finalRequestBody);
    xhr.onreadystatechange = function(){
        console.log("callback fn start "+ xhr.readyState);
        if(xhr.status == 200 && xhr.readyState == 4){
            document.getElementById("message").innerHTML ="Record created succefully";
        };
    };
    xhr.onprogress = function(){
        console.log("on progress "+ xhr.readyState);
        };
    xhr.onerror = function(){
        console.log("on error "+ xhr.readyState);
        document.getElementById("message").innerHTML = "Record creation unsuccefull";
    };   
};