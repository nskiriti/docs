function main() {
    //stringPrimitive();
    //stringObject();
    stringCompare();
    StringMethods();
}

function stringPrimitive() {
    let name = "Ravi";
    console.log("name = " + name);
}

function stringObject() {
    let name = new String("Ravi");
    console.log("name = " + name);
}

function stringCompare() {
    let name1 = "Ravi";
    let name2 = new String("Ravi");
    console.log("typeof name1 = "+typeof name1)
    console.log("typeof name2 = "+typeof name2)

    if(name1 == name2){
        console.log(" == equal")
    } else {
        console.log("== not equal")
    }

    if(name1 === name2){
        console.log("=== equal")
    } else {
        console.log("=== not equal")
    }
function StringMethods() {

}
}