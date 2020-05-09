
// Multiply Function
function multiplyFunction() {
   var multiply = 365 * 24;
   document.getElementById("mathMult").innerHTML = "How many hours in a year: "  + multiply;
}
//subtract function
function subtractFunction() {
    var subtract = 24 - 8;
    document.getElementById("mathSub").innerHTML = "How many hours in a day after sleep: "  + subtract;
 }
// divide function
 function divideFunction() {
     var divide = 365 / 7;
     document.getElementById("mathDiv").innerHTML = "This is how many weeks are in the year: " +divide;
 }
// More math function
 function moreMathFunction() {
     var math = ((5 * 89) / (98 * 3) + 15);
     document.getElementById("moreMath").innerHTML = "This is a larger math problem that = " + math;
 }
// Modulus Function
 function modFunction() {
     var modMath = 95 % 14;
     document.getElementById("modulus").innerHTML = "This is the remainder of 95 / 14: " + modMath;
 }
// negation function
 function negation() {
     var num = 598;
     document.getElementById("neg").innerHTML = -num;
 }
// -- operator function
 function decreaseBy1() {
     var decrease = 15;
     decrease--;
     document.getElementById("negOp").innerHTML = decrease;

 }
 // ++ operator function
 function increaseBy1() {
     var increase = 27;
     increase++;
     document.getElementById("posOp").innerHTML = increase;
 }
// Math random method between 1 and 100
 function randoMath() {
    document.getElementById("random").innerHTML = Math.random() * 100;
 }

 //Math object allows you to perform mathematical tasks on numbers

 function mathSquare() {
     document.getElementById("mathSquare").innerHTML = Math.sqrt(99);
 }