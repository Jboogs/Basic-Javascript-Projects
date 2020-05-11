//This is a global variable
var name = "Justin";

function localVar() {
    //this is a local variable only accesable by the localVar() function
    var number = 0;
    number++;
    console.log(number)
    document.getElementById("local").innerHTML = number;
}

//This is a function using an if statement, conditional statement
function date_And_Time() {
    if(new Date().getHours() > 12) {
        document.getElementById("dateTime").innerHTML = "Its after-noon!  Time to go outside and play!";
    }
    else {"Study time!"};
}

function drinkingAge() {
    var age_1 = 22;
    if (age_1 >= 21) {
        document.getElementById("personal").innerHTML = "You may drink a beer!";
    }
}

//This is an if/else statement

function height_Function() {
    height_in_inches = document.getElementById("Height").value;
    if (height_in_inches >= 70) {ski = "You should be on a longer ski!";}
    else {ski = "You should be on a shorter ski!"}
    document.getElementById("how_Tall_Are_You").innerHTML = ski;

}

//this is the else if statement

function time_Function() {
    var time = new Date().getHours();
    var reply;
    if (time < 12 == time > 0) {reply = "It is morning time!";}
    else if (time > 12 == time < 18) {reply = "It is afternoon time!";}
    else {reply = "It is evening time now!";}
    document.getElementById("timeOfDay").innerHTML = reply;
}

