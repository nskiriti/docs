//calling a function after another function
let res = add1(2, 3);
print1(res);

function add1(n1, n2) {
  let res = n1 + n2;
  return res;
}
function print1(res) {
  console.log(res);
}

// calling a function within the function
add2(2, 3);
function add2(n1, n2) {
  let res = n1 + n2;
  print2(res);
}
function print2(res) {
  console.log(res);
}
// passing a function as a parameter
add3(2, 3, print3);
function add3(n1, n2, callback) {
  let res = n1 + n2;
  callback(res);
}
function print3(res) {
  console.log(res);
}

// defining a function as a parameter
add4(2, 3, function print4(res) {
  console.log(res);
});

function add4(n1, n2, callback) {
  let res = n1 + n2;
  callback(res);
}