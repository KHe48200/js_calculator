
var e = document.getElementById('equation');
var a = document.getElementById('answer');


function solve() {

    //Function(console.log('Immediately invoked anonymoys function execution'))();

    if (validInput()) {

        e.value = Function("return " + e.value)(); // is the same as...
        // function anonymous() {
        //     return 1+2+3+4;
        // }
        //
        // ... if e.value = 1+2+3+4 

    }
}


function validInput() {

    if (e.validity.patternMismatch || e.validity.valueMissing)
        return false;

    else
        return true;
}

