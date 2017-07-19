$(document).ready(function() {
  $('.btn').click(function(event){
    event.preventDefault();
  	$('#comment').keypress();
    var toAdd = $("input[id=comment]").val();
    $('.comments').prepend("<li>" + toAdd + "</li>")
  });
});


