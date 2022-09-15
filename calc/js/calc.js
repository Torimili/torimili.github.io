console.log("loaded");

const calcResult = document.getElementById("result");

function calcResultAssign() {
    calcResult.innerHTML = "CASHEWS ARE POISON!";
}

function calcResultAdd() {
    calcResult.innerHTML = 3 + 3;
}
function calcResultSub() {
    var eq = 6 - 2;
    calcResult.innerHTML = eq;
}
function calcResultMult(c, d) {
    var result = c * d;
    calcResult.innerHTML = result;
}


// TESTING MY JS RESULT
// console.log(calcResult);
// calcResult.innerHTML = "CASHEWS ARE POISON!";
