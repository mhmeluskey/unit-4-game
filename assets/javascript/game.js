var total = 0;
var random = Math.floor(Math.random() * 120) + 19;
var wins = 0;
var losses = 0;
var gameOver = false;

$(document).ready(function() {
  //generate random number in the random-number div
  //var random = Math.floor(Math.random() * 120) + 19;

  // ... and then dump the random number into our random-number div.
  $("#random-number").text(random);
  $("#score").text(total);

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
  $(".blue").click(function() {
    console.log("Blue");
    //onclick bluePoins will add to the score
    total = total + bluePoints;
    $("#score").html(total);
    //compare the total to the random
    if (total > random && gameOver != true) {
      console.log("loss");

      $("#losses").html(++losses);
      gameOver = true;
      //call restart function
      reStart();
      //inner html add loses
      // $("#report").text("You Lose!");
    } else if (total == random && gameOver != true) {
      $("#wins").html(++wins);
      gameOver = true;
      //call restart function
      reStart();
      // $("#report").text("You Win!");
      //inner html add wins
    }
  }); //blue button

  $(".green").click(function() {
    console.log("green");
    total = total + greenPoints;
    $("#score").html(total);
    if (total > random && gameOver != true) {
      console.log("loss");

      $("#losses").html(++losses);
      gameOver = true;
      //call restart function
      reStart();
      $("report").text("You Lose!");
      //inner html add loses
    } else if (total == random && gameOver != true) {
      $("#wins").html(++wins);

      gameOver = true;
      //call restart function
      reStart();
      $("#report").text("You Win!");
      //inner html add wins
    }
  }); //green button

  $(".purple").click(function() {
    console.log("purple");
    total = total + purplePoints;
    $("#score").html(total);
    if (total > random && gameOver != true) {
      console.log("loss");

      $("#losses").html(++losses);
      gameOver = true;
      //call restart function
      reStart();

      //inner html add loses
    } else if (total == random && gameOver != true) {
      $("#wins").html(++wins);
      gameOver = true;
      //call restart function
      reStart();
    }
  }); //purple button
  $(".yellow").click(function() {
    console.log("yellow");
    total = total + yellowPoints;
    $("#score").html(total);
    if (total > random && gameOver != true) {
      console.log("loss");

      $("#losses").html(++losses);
      gameOver = true;
      //call restart function
      reStart();
    } else if (total == random && gameOver != true) {
      $("#wins").html(++wins);
      gameOver = true;
      //call restart function
      reStart();
    }
  }); //yellow button

  function reStart() {
    //generate new random number in the random number tag
    random = Math.floor(Math.random() * 120) + 19;
    $("#random-number").text(random);

    //reset total to zero
    total = 0;
    $("#score").text(total);

    gameOver = false;

    bluePoints = Math.floor(Math.random() * 12) + 1;
    localStorage.setItem("blueKey", bluePoints);
    console.log(bluePoints);

    greenPoints = Math.floor(Math.random() * 12) + 1;
    localStorage.setItem("greenKey", greenPoints);
    console.log(greenPoints);

    purplePoints = Math.floor(Math.random() * 12) + 1;
    localStorage.setItem("purpleKey", purplePoints);
    console.log(purplePoints);

    yellowPoints = Math.floor(Math.random() * 12) + 1;
    localStorage.setItem("blueKey", yellowPoints);
    console.log(yellowPoints);
  }

  //get rid of you lose; reset all random numbers

  //make if else statements that will compare the total number and the random number
}); //document.ready close
