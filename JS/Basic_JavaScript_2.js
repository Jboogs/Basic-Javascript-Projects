function myFunction() {
    document.getElementById("button").innerHTML = Date();
}

function myFunction_color() {
    var redText = document.getElementById("para").style.color = "red";
    var bigText = document.getElementById("para").style.fontSize = "220%";

}

function concatFunction() {
    var learn = "I am learning alot ";
    learn += " at the Tech Academy";
    document.getElementById("concat").innerHTML = learn;
}