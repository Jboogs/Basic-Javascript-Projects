
//concat Method
function concatFunction() {
    var partOne = "Hello, my name ";
    var partTwo = "is Justin and I ";
    var partThree = "am learning ALOT "
    var partFour = "about Javascript!"
    var concatWhole = partOne.concat(partTwo, partThree, partFour);
    document.getElementById("concat_1").innerHTML = concatWhole;
}

function sliceFunction() {
    var string = "Hello!  My name is Justin and I really enjoy skiing";
    var section = string.slice(22, 29);
    document.getElementById("sliceOutput").innerHTML = section;
}

//to upper case method
function toUpperCaseFunc() {
    var lowerCase = document.getElementById("inputString").value;
    var upperCase = lowerCase.toUpperCase();
    document.getElementById("uppercasesen").innerHTML = upperCase;
}

//search Method JS
function searchFunction() {
    var sentence = "I am learning how to code in Javascript with the Tech Academy";
    var position_1 = sentence.search("Javascript");
    document.getElementById("searchResult").innerHTML = position_1;
}

//to string method
function toStringFunction() {
    var number1 = document.getElementById("inputNumber").value;
    var stringOne = number1.toString();
    document.getElementById("toString").innerHTML = stringOne;
}

//precision method
function precisionFunction() {
    var longNum = 9000977738.98745983745987;
    document.getElementById("precision").innerHTML = longNum.toPrecision(12);
}

//toFixed() method, takes number, rounds to amount of decimal places
//specified and displays as a string
function toFixFunction() {
    var longNumOne = 90.983749857393847584;
    var shortNumOne = longNumOne.toFixed(3);
    document.getElementById("toFixedEx").innerHTML = shortNumOne;
}

//This is the valueOf() method
function valueFunction() {
    var numNonPrim = 89 * 17;
    var primNum = numNonPrim.valueOf();
    document.getElementById("value").innerHTML = primNum;
}
