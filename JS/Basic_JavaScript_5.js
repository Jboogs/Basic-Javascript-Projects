var name = "Justin";
var age = 30;

document.write(typeof(age));

document.write(isNaN("Hello"));
document.write(isNaN(9005));

function notANumber() {
    document.getElementById("notANum").innerHTML = 0/0;
}

function positiveInfin() {
    document.getElementById("posInfin").innerHTML = 2.98E405;
}

function negativeInfin() {
    document.getElementById("negInfin").innerHTML = -2.98E705;
}

document.write(3>1);
document.write(90000<1);

// This console log will be logged to the web console

console.log(78+86);
console.log(5>90);

window.alert("9001" + 90);

console.log(age == name);
console.log(900E108 == 900E108);

console.log("Hello" === "Hello");
console.log(5 === "Not the same");
console.log(90 === "90");
console.log("Hello" === "Goodbye");
//AND operator
console.log("hello" === "hello" && 5 == "5");
console.log(10 === "10" && 10 === 10);
//OR operator
console.log(12 === 12 || 12 >=13);
console.log("hello" === "goodbye" || 12 > 89);

//Functions for the NOT operator
function notOpFuncTrue() {
    document.getElementById("notOpTrue").innerHTML = !(10<1);
}

function notOpFuncFalse() {
    document.getElementById("notOpFalse").innerHTML = !(10>1);
}