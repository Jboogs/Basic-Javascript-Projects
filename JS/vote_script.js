function ageFunction() {
    var ageVote, canVote;
    ageVote = document.getElementById("age").value;
    canVote = (ageVote > 17) ? "You are not old enough":"You are old enough";
    document.getElementById("vote").innerHTML = canVote + " to vote";
    }

    //This is the JS for the object constructor
function vehicle(make, model, year, color) {
    this.vehicle_make = make;
    this.vehicle_model = model;
    this.vehicle_year = year;
    this.vehicle_color = color;
}

var Justin = new vehicle("Toyota", "Tacoma", 2014, "Black");
var Jenny = new vehicle("Toyota", "Rav4", 2012, "Silver");
var Trent = new vehicle("Honda", "Civic", 2015, "Maroon");
function objectFunction() {
    document.getElementById("objects_and_constructors").innerHTML =
    "Justin Drives a " +Justin.vehicle_color+ " colored " +Justin.vehicle_year+ " " +Justin.vehicle_model+ " made by " +Justin.vehicle_make;
}

//this is my new/this practice
    //this is an object constructor
function ski(height, width, make, model) {
    this.skiHeight = height;
    this.skiWidth = width;
    this.skiMake = make;
    this.skiModel = model;
}

var Justin = new ski(179, 112, "DPS", "Wailer")
var Trent = new ski(179, 102, "K2", "Poacher")
function newThisFunction() {
    document.getElementById("skigear").innerHTML = Justin.skiMake;
}
