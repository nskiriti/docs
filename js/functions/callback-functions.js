function main() {
  post("employeeId:101", success, failure);
}

function post(data, responseCB, errorCB) {
  if (confirm(data)) {
    responseCB();
  }
  else {
    errorCB();
  }
}

function success() {
  alert("This is Success");
}

function failure() {
  alert("There is an error");
}