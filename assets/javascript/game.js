$(document).ready(function() {
    var wins = 0;
    var losses = 0;
    //decalare variables
    var target = Math.floor(Math.random() * (110 - 19 + 1)) + 19;
  
    // Crystal 1
    var crystalone = Math.floor(Math.random() * 11) + 1;
  
    // Crystal 2
    var crystaltwo = Math.floor(Math.random() * 11) + 1;
  
    // Crystal 3
    var crystalthree = Math.floor(Math.random() * 11) + 1;
  
    // Crystal 4
    var crystalfour = Math.floor(Math.random() * 11) + 1;
  
    var counter = 0;
  
    // give each image a value
    $(".crystalone").attr("data-crystalvalue", crystalone);
    $(".crystaltwo").attr("data-crystalvalue", crystaltwo);
    $(".crystalthree").attr("data-crystalvalue", crystalthree);
    $(".crystalfour").attr("data-crystalvalue", crystalfour);
  
    //Reset Function
  
    var reset = function() {
      target = Math.floor(Math.random() * (110 - 19 + 1)) + 19;
  
      crystalone = Math.floor(Math.random() * 11) + 1;
  
      crystaltwo = Math.floor(Math.random() * 11) + 1;
  
      crystalthree = Math.floor(Math.random() * 11) + 1;
  
      crystalfour = Math.floor(Math.random() * 11) + 1;
  
      counter = 0;
  
      // give each image a value
      $(".crystalone").attr("data-crystalvalue", crystalone);
      $(".crystaltwo").attr("data-crystalvalue", crystaltwo);
      $(".crystalthree").attr("data-crystalvalue", crystalthree);
      $(".crystalfour").attr("data-crystalvalue", crystalfour);
    };
  
    // Click any crystal to begin game; target number to guess is displayed
    $(".btn").on("click", function() {
      $(".target").text(target);
  
      $(".outcome").empty();
  
      var crystalValue = $(this).attr("data-crystalvalue");
      crystalValue = parseInt(crystalValue);
      // We then add the btn to the user's "counter" which is a global variable.
      // Every click, from every btn adds to the global counter.
      counter += crystalValue;
  
      // Display Sum
      $(".counter").text(counter);
  
      // Win or Lose
      if (counter > target) {
        $(".outcome").text("You Lose!");
        $(".losses").text(++losses);
        reset();
      } else if (counter === target) {
        $(".outcome").text("You Win!");
        $(".wins").text(++wins);
        reset();
      }
    });
  });
  