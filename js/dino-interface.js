var Words = require('./../js/dino.js').dinoModule;

var dinoWord = "";

$(document).ready(function(){
  $('.number').submit(function(event){
    event.preventDefault();
    $("#blank").show();
    $("#guess").show();
    $("#wrong").show();
    $("#hanger").show();
    $(".number").hide();
    $("#intro").hide();
    // $("#guessForm").hide();
    var wordNumber = parseInt($('#input').val());
    var getDinos = $.get('http://dinoipsum.herokuapp.com/api/?format=text&paragraphs=1&words=' + wordNumber),
      fillContainer = function(bob) {
        dinoWord = new Words(bob);
        $('#blank').html("<h3>" + dinoWord.blankLetters() +"</h3>");
      },
      // oops = function() {
      //   console.log(dinoWord);
      // },
      makeDino = function(bob) {
        dinoWord = new Words(bob);
        console.log(dinoWord.blankLetters());
      };

    // var dinoWord = new Words(getDinos);
    getDinos.then(fillContainer);
    // getDinos.then(oops);
    // getDinos.then(makeDino);
    // Words.blankLetters(getDinos),Words.prototype.answerLetters(getDinos),

  });
    $('#guessForm').submit(function(event){
      event.preventDefault();
      input = $("#guessInput").val();
      userGuess = dinoWord.guess(input);
      console.log(dinoWord.guess(input))
      $('#blank').text(userGuess)
    });
});
