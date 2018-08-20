var total = 0
var random = Math.floor(Math.random() * 120) + 19;
var wins = 0
var losses = 0



$(document).ready(function() {


//generate random number in the random-number div
//var random = Math.floor(Math.random() * 120) + 19;

// ... and then dump the random number into our random-number div.
$("#random-number").text(random);


//generate points for buttons

var bluePoints = Math.floor(Math.random() * 12) + 1;
localStorage.setItem("blueKey", bluePoints); 
console.log(bluePoints);

var greenPoints = Math.floor(Math.random() * 12) + 1;
localStorage.setItem("greenKey", greenPoints); 
console.log(greenPoints);

var purplePoints = Math.floor(Math.random() * 12) + 1;
localStorage.setItem("purpleKey", purplePoints); 
console.log(purplePoints);

var yellowPoints = Math.floor(Math.random() * 12) + 1;
localStorage.setItem("blueKey", yellowPoints); 
console.log(yellowPoints);

//add clicked buttons value to the count in div score
//get buttons to click
$( ".blue" ).click(function() {
    console.log("Blue");
//onclick bluePoins will add to the score
total = total + bluePoints 
$("#score").html(total);
//compare the total to the random 
if (total > random){
    console.log("loss");
    $("#wins").prepend("<p>You lose!</p>");

} else if (total == random) {
    $("#wins").prepend("<p>You win!</p>");    
};


});//blue button

$( ".green" ).click(function() {
    console.log("green");
    total = total + greenPoints
$("#score").html(total);
if (total > random){
    console.log("loss");
    $("#wins").prepend("<p>You Lose!</p>");

}else if (total == random) {
    $("#wins").prepend("<p>You win!</p>");  
    this.getElementById("wins").innerHTML = ("Wins: " + ++wins);

};
}); //green button

$( ".purple" ).click(function() {
    console.log("purple");
    total = total + purplePoints 
    $("#score").html(total);
    if (total > random){
        console.log("loss");
        $("#wins").prepend("<p>You Lose!</p>");
       
    }else if (total == random) {
        $("#wins").prepend("<p>You win!</p>");  
       
    };
  }); //purple button
$( ".yellow" ).click(function() {
    console.log("yellow");
    total = total + yellowPoints 
$("#score").html(total);
if (total > random){
    console.log("loss");
    $("#wins").prepend("<p>You Lose!</p>"); 
   
} else if (total == random) {
    $("#wins").prepend("<p>You win!</p>");  
  
};
  });//yellow button




//make if else statements that will compare the total number and the random number


});//document.ready close