function call_Loop() {
    str = "";
    i = 1;
    while (i < 5) {
        str += "The value of i is: " + i;
        i++;
    }
    document.getElementById("loop").innerHTML = str;
}

//String length property .length

function lengthFunc() {
    text = document.getElementById('inputStr').value;
    document.getElementById("output").innerHTML = text.length;
}

//For loop example
var list = ["Piano", "Guitar", "Saxophone", "Drums", "Trumpet", "Flute"];
function forLoop() {
    var outputStr = "";
    var i;
    for (i = 0; i<list.length; i++) {
        outputStr += list[i] + "<br>";
    }
    document.getElementById("listOfInstruments").innerHTML = outputStr;
}

//this is the array assignment
function skiArray() {
    var skis = [];
    skis[0]="Kendo";
    skis[1]="Mantra";
    skis[2]="Katana";
    skis[3]="One";
    skis[4]="Race-Tiger";
    skis[5]="Deacon";
    document.getElementById("skiId").innerHTML = skis;
}

function constant_Function() {
    const roadTripStops = {type: "Ski Area", location: "New Mexico", name: "Taos Ski Valley", elevation: 12498};
    roadTripStops.location = "Colorado";
    roadTripStops.name = "Silverton Mountain";
    roadTripStops.elevation = 13487;
    roadTripStops.duration = "3 Days";
    document.getElementById("constant").innerHTML = "Our next road trip stop will be in " +roadTripStops.location+ " to ski at "
    +roadTripStops.name+ " whose elevation is " +roadTripStops.elevation+ ".  We plan to be there for " +roadTripStops.duration+ ".";
}

//let keyword
const birthYear = 1989;
var thisYear = 2020;
function let_Keyword_Prac() {
    let daysAlive = (thisYear - birthYear) * 365;
    document.getElementById("alive").innerHTML = daysAlive;
     }
 //return assignment
 function practiceReturn() {
     var x = 10;
     var y = 90;
     return x/y;
 } 
 
 //Objects and methods
 let ski = {
     Manufac: "Blizzard",
     model: "Bonafide 97",
     modelYear: "2020",
     width: "102mm",
     length: "180cm",
     webDescription: function() {
        return "I love to ski the " + this.modelYear + this.Manufac + this.model + " in all snow conditions." ;
        }
    };
 document.getElementById("objectPrint").innerHTML = ski.webDescription();
   
