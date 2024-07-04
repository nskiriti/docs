function main() {
    console.log("main function start");
    identifiers();
    console.log("main function end");
}

function identifiers() {
    console.log("identifiers function start");
    num1 = 123;
    num2 = 223;
    num$ = 323;
    num_ = 423;
    $num = 523;
    _num = 623;
    num7 = 723; // case sensitive
    NUM7 = 723; // case sensitive
    // num# = 123;
    // can't have a special characters other than _ and $
    // num& = 124;
    // can't have a special characters other than _ and $
    // 1num = 123;
    // can't start variable-name with digit.
    // 2num = 124;
    // can't start variable-name with digit.
    // for = 123;
    // reserved words are not allowed.
    // if = 321;
    // reserved words are not allowed.
    res = num1 + num2;
    console.log(res);
    console.log("identifiers function end");
}