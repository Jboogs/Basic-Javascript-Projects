function ride_function() {
var height, canRide;
height = document.getElementById("height").value;
canRide = (height < 52) ? "You are too short" : "You are tall enough";
document.getElementById("ride").innerHTML = canRide + " to ride";
}

function nestedFunction() {
    document.getElementById("nested").innerHTML = horsePower();
    function horsePower() {
        var HP = 350;
        var electricity;
        function watts() {electricity = HP * 735.499;}
        watts();
        return electricity;}

    }
