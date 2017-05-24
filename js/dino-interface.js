$(document).ready(function(){
  $('.number').submit(function(event){
    event.preventDefault();
    $("#blank").show();
    $("#guess").show();
    $("#wrong").show();
    $("#hanger").show();
    $(".number").hide();
    $("#intro").hide();
    var wordNumber = parseInt($('#input').val());
    var getDinos = $.get('http://dinoipsum.herokuapp.com/api/?format=html&paragraphs=1&words=' + wordNumber),
      fillContainer = function(html) {
        $('#blank').html(html);
      },
      oops = function() {
        console.log('Where did all the dinosaurs go?');
      };
    getDinos.then(fillContainer, oops);
  });
});
